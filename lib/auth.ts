import prisma from './prisma'
import bcrypt from 'bcrypt'
import { ValidationError } from './errors'

type UserData = {
  name: string,
  surname: string,
  email: string,
  password: string
}

export async function createUser(user: UserData) {
  const { name, surname, email, password } = user
  try {
    const saltRounds = await bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash(password, saltRounds)
    const newUser = await prisma.user.create({
      data: {
        name,
        //@ts-ignore
        surname,
        email,
        password: passwordHash
      }
    })
    const userInfo = Object.fromEntries(Object.entries(newUser).filter(([key,value]) => key != "password"))
    return [userInfo, null]
  } catch (error) {
    console.error(error)
    return [null, error]
  }
}

export async function getUser(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    })
    //@ts-ignore
    const userInfo = Object.fromEntries(Object.entries(user).filter(([key,value]) => key != "password"))
    if (!userInfo) throw new ValidationError('User does not exists')
    return [userInfo, null]
  } catch (error) {
    console.error(error)
    return [null, error]
  }
}

export async function getAllUsers() {
  try {
    let users = await prisma.user.findMany()
    return [users, null]
  } catch (error) {
    console.error(error)
    return [null, error]
  }
}

export async function login(email: string, password: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    })
    if (!user) throw new ValidationError('Invalid passowrd or email')
    const match = await bcrypt.compare(password, user.password)
    if (!match) throw new ValidationError('Invalid password or email') 
    const userInfo = Object.fromEntries(Object.entries(user).filter(([key,value]) => key != "password"))
    return [userInfo, null]
  } catch (error) {
    console.error(error)
    return [null, error]
  }
}

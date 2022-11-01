import prisma from './prisma'
import bcrypt from 'bcrypt'

export async function createUser(name: string, email: string, password: string) {
  try {
    const saltRounds = await bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash(password, saltRounds)
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: passwordHash
      }
    })
    const userInfo = Object.fromEntries(Object.entries(user).filter(([key,value]) => key != "password"))
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
    if (!user) throw new Error('User does not exists')
    return [user, null]
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
    if (!user) throw new Error('Invalid passowrd or email')
    const match = await bcrypt.compare(password, user.password)
    if (!match) throw new Error('Invalid password or email') 
    const userInfo = Object.fromEntries(Object.entries(user).filter(([key,value]) => key != "password"))
    return [userInfo, null]
  } catch (error) {
    console.error(error)
    return [null, error]
  }
}

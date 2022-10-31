import prisma from './prisma'
import bcrypt from 'bcrypt'

export async function createUser(name: string, email: string, password: string) {
  const saltRounds = await bcrypt.genSalt(10)
  const passwordHash = await bcrypt.hash(password, saltRounds)
  let user = await prisma.user.create({
    data: {
      name,
      email,
      password: passwordHash
    }
  })
  //@ts-ignore
  delete user["password"]
  return user
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

export async function getUser(email: string, password: string) {
  let user = await prisma.user.findUnique({
    where: {
      email
    }
  })
  if (!user) return null
  let match = await bcrypt.compare(password, user.password)
  //@ts-ignore
  delete user["password"]
  if (match) return user
  return null
}

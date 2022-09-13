import prisma from './prisma'
import bcrypt from 'bcrypt'
export async function createUser(name: string, email: string, password: string) {
  const salt = await bcrypt.genSalt(10)
  let passwordHash = await bcrypt.hash(password, salt);
  let user = await prisma.user.create({
    data: {
      name: name,
      email: email,
      //@ts-ignore
      password: passwordHash,
    },
  })
  //@ts-ignore
  delete user["password"]
  return user
}
export async function getUser(email: string, password: string) {

  let user = await prisma.user.findUnique({
    where: {
      email: email
    }
  })
  if (!user) return null
  //@ts-ignore
  let match = await bcrypt.compare(password, user.password)
  //@ts-ignore
  delete user["password"]
  if (match) return user
  return null;

}
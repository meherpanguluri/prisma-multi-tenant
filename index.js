const { PrismaClient } = require("@prisma/client")
const { MultiTenant } = require('prisma-multi-tenant')
require('dotenv').config({ path: 'prisma/.env' })
const multiTenant = new MultiTenant()
async function main() {
    // await prisma.user.create({
    //     data: {
    //       name: "Alice",
    //       email: "alice@prisma.io",
    //       posts: {
    //         create: { title: "Hello World" },
    //       },
    //       profile: {
    //         create: { bio:  "I like turtles" }
    //       }
    //     }
    //   })
    //   const allUsers = await prisma.user.findMany({
    //     include: { 
    //       posts: true,
    //       profile: true 
    //     },
    //   })
    //   console.dir(allUsers, { depth: null })
    // const tenant = await multiTenant.createTenant({
    //     name: 'school1',
    //     provider: 'postgresql',
    //     url: 'postgresql://postgres:postgres@localhost:32769/postgres'
    // })
    // console.log(tenant._meta)
    const prisma = await multiTenant.get('dev')
    const users = await prisma.user.findMany()
    console.log(users)
}
main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await multiTenant.disconnect()
  })
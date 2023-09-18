import { PrismaClient, User} from '@prisma/client'

const prisma = new PrismaClient()

await prisma.user.findMany()



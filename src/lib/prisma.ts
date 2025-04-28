import { PrismaClient } from '@prisma/client'

declare global {
    // This is necessary to allow global augmentation
    var prisma: PrismaClient | undefined
}

const prisma =
    global.prisma ||
    new PrismaClient({
        log: ['query'], // Optional: good for debugging
    })

if (process.env.NODE_ENV !== 'production') global.prisma = prisma

export default prisma

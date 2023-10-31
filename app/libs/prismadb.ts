import {PrismaClient} from '@prisma/client';

declare global{
    // so it can work in all our code
    var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient()
if(process.env.NODE_ENV !== 'production') globalThis.prisma = client
export default client
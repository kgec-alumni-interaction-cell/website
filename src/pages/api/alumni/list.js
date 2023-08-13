import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function query() {
    const list = await prisma.user.findMany({
        where: {
            alumni: true
        }
    })
    return list
}

export default function handler(req, res) {

    query()
    .then(async (list) => {
        await prisma.$disconnect()
        res.status(200).json(list)
    })
    .catch(async (err) => {
        console.error(err)
        await prisma.$disconnect()
        res.status(500).json(err)
    })
}
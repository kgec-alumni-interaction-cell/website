import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function query(id) {
    const profile = await prisma.user.findUnique({
        where: {
            id: id
        }
    })
    return profile
}

export default function handler(req, res) {

    query()
    .then(async (profile) => {
        res.status(200).json(profile)
    })
    .catch(async (err) => {
        console.error(err)
        res.status(500).json(err)
    }).finally(async () => {
        await prisma.$disconnect()
    })
}
import prisma from '../src/lib/prisma'

async function main() {
    const products = await Promise.all([
        // prisma.product.upsert({
        //     where: { id: 1 },
        //     update: {},
        //     create: {
        //         name: 'Khasfee Gold Serum',
        //         description: 'Serum dengan kandungan emas murni untuk mencerahkan dan meremajakan kulit.',
        //         price: 199000,
        //         image: './amino.png',
        //     },
        // }),
        // prisma.product.upsert({
        //     where: { id: 2 },
        //     update: {},
        //     create: {
        //         name: 'Khasfee Herbal Cleanser',
        //         description: 'Sabun wajah alami dengan ekstrak herbal, cocok untuk kulit sensitif.',
        //         price: 89000,
        //         image: './cera.png',
        //     },
        // }),
        // prisma.product.upsert({
        //     where: { id: 3 },
        //     update: {},
        //     create: {
        //         name: 'Khasfee Night Cream',
        //         description: 'Krim malam intensif untuk regenerasi kulit saat tidur.',
        //         price: 129000,
        //         image: './lumiere.png',
        //     },
        // }),
    ])

    console.log('Seeded or updated products:', products)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error('Seeding error:', e)
        await prisma.$disconnect()
        process.exit(1)
    })

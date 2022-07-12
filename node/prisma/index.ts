import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();



async function main() { 
    const clients = await prisma.clients.findMany();
    

    
    console.log(clients);
    if (clients.length < 4) {
        const client = await prisma.clients.create({
            data: {
                ShortDescription: "Sono il corto numero 4",
                LongDescription:  "Sono il looong numero 4"
            }
        })
    }
    
}

main()
    .catch(err => console.log(err.message))
    .finally(async () => await prisma.$disconnect())

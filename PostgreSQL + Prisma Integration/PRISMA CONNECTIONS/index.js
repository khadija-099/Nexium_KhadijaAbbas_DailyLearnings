
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    const newUser = await prisma.user.create({
        data: {
            name: "Sadia",
            email: "Sadia@yahoo.com",
            password: "Sadia122"
        }
    });
    console.log("Inserted User:", newUser)
}

main()
    .catch(console.error)
    .finally(()=> prisma.$disconnect());
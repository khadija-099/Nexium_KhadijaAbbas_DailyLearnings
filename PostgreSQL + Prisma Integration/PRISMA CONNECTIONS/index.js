import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    // #create
    const newUser = await prisma.user.create({
        data: { name: "Khadija", email: "khadija@example.com"}
    });
    console.log("Created:", newUser)

    // READ
    const users = await prisma.user.findMany();
    console.log("All Users:", users)

    // UPDATE
    const updated = await prisma.user.update({
        where: {id: newUser.id},
        data: {name: "Khadija Updated"}
    });
    console.log("Updated:", updated)

    // DELETE
    const deleted = await prisma.user.delete({
        where: {id: newUser.id}
    });
    console.log("Deleted:", deleted)

}

main()
    cath(console.error)
    .finally(() => prisma.$disconnect());


// npm install @prisma/client    
// node index.js

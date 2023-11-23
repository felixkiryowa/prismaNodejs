import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

    // PRISM QUERIES
    //CREATE USER
    // const user = await prisma.user.create({
    //     data:{
    //          name:'John Doe',
    //          email:'john@gmail.com'
    //     }
    // });


    // Get all users 
    // const users = await prisma.user.findMany({
    //     include:{
    //         articles:true
    //     }
    // });

    //creste an article for a given user
    // const article = await prisma.article.create({
    //     data:{
    //         title:'Johns First Article',
    //         body:"This is Johns first article",
    //         author:{
    //             connect:{
    //                 id:1
    //             }
    //         }
    //     }
    // });

    // GET ALL ARTICLES
    // const articles = await prisma.article.findMany();

    //CREATE USER AND ARTICLE AND ASSOCIATE THEM
    // const user = await prisma.user.create({
    //     data:{
    //         name:'Sarah Smith',
    //         email:'Sarah@gmail.com',
    //         articles:{
    //             create:{
    //                 title:'Sarah First Article',
    //                 body:'This is sarahs first article'
    //             }
    //         }
    //     }
    // });

    // UPDATE DATA
    // const user = await prisma.user.update({
    //     where:{
    //         id:1
    //     },
    //     data:{
    //         name:'John Doe Jr'
    //     }
    // });

    //DELETE ARTICLE
    const article = await prisma.article.delete({
        where: {
            id: 2
        }
    })

    console.log('USER<><><><>>', article);

}

main().then(async () => {
    await prisma.$disconnect();
}).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit();
})
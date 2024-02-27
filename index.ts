import { PrismaClient } from "@prisma/client";
import { log } from "console";

const prisma = new PrismaClient();

async function main() {
  //  create user
  //  const user = await prisma.user.create({
  //     data:{
  //         name:'john doe',
  //         email: "hina@gmail.com"
  //     }
  //  })
  //  console.log(user)

  // get all user
  // const user = await prisma.user.findMany()
  // console.log(user)
 
// create article and associate with the user
//   const article = await prisma.article.create({
//     data: {
//       title: "hello",
//       body: "mainbody",
//       author: {
//         connect: {
//           id: 1,
//         },
//       },
//     },
//   });

// const user = await prisma.article.findMany()
// console.log(user)

// create user nad acrticle and associate with them
const user = await prisma.user.create({
    data:{
        name: "john",
        email : "john@gmail.com",
        articles : {
           create:{
            title: 'new title',
            body : "new body"
           }
        }
    }
})
console.log(user)
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

import { categories, ingredients, products } from "./constants";
import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";
import { Prisma } from "@prisma/client";

const randomNumber = (min: number, max: number): number => {
  return parseFloat((Math.random() * (max - min) + min).toFixed(1));
};


const generateProductItem = ({
  productId,
  pizzaType,
  size,
}: {
  productId: number;
  pizzaType: 1 | 2;
  size: 20 | 30 | 40;
}): Prisma.ProductItemUncheckedCreateInput => {
  return {
    productId,
    price: randomNumber(190, 600),
    pizzaType,
    size,
  };
};
  

async function up() {
  await Promise.all([
    prisma.user.createMany({
      data: [
        {
          fullname: 'User',
          email: 'user@example.com',
          password: hashSync('111111', 10),
          verified: new Date(),
          role: 'USER',
        },
        {
          fullname: 'Admin',
          email: 'admin@example.com',
          password: hashSync('111111', 10),
          verified: new Date(),
          role: 'ADMIN',
        },
      ],
    }),
    prisma.category.createMany({
      data: categories,
    }),
    prisma.ingredient.createMany({
      data: ingredients,
    }),
    prisma.product.createMany({
      data: products,
    }),
  ]);

  // Создание продуктов с ингредиентами
  const [pizza1, pizza2, pizza3] = await Promise.all([
    prisma.product.create({
      data: {
        name: 'Двойной цыпленок 👶',
        imageUrl:
          'https://media.dodostatic.net/image/r:233x233/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
        categoryId: 1,
        ingredients: {
          connect: ingredients.slice(0, 5),
        },
      },
    }),

    prisma.product.create({
      data: {
        name: 'Жюльен',
        imageUrl:
          'https://media.dodostatic.net/image/r:233x233/11EE7D6175C10773BFE36E56D48DF7E3.avif',
        categoryId: 1,
        ingredients: {
          connect: ingredients.slice(5, 10),
        },
      },
    }),
    
    prisma.product.create({
      data: {
        name: 'Сырный цыпленок',
        imageUrl:
          'https://media.dodostatic.net/image/r:233x233/11EE7D61A994727081925F42547B059B.avif',
        categoryId: 1,
        ingredients: {
          connect: ingredients.slice(10, 40),
        },
      },
    }),
  ]);

  // Создание товарных позиций
  await prisma.productItem.createMany({
    data: [
      generateProductItem({ productId: pizza1.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza1.id, pizzaType: 1, size: 30 }),
      generateProductItem({ productId: pizza1.id, pizzaType: 1, size: 40 }),
    ]  
  });
}


async function down() {
  await prisma.$transaction([
    prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`,
    prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`,
    prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`,
    prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`,
    prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`,
  ]);
}


async function main() {
  try {
    console.log('Starting database seed...');
    await down();
    await up();
    console.log('Database seed completed successfully.');
  } catch (e) {
    console.error('Error during database seed:', e);
  } finally {
    await prisma.$disconnect();
  }     
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

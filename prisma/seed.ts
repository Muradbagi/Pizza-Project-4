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
  pizzaType?: 1 | 2;
  size?: 20 | 30 | 40;
}): Prisma.ProductItemUncheckedCreateInput => {
  return {
    productId,
    price: randomNumber(190, 600),
    pizzaType,
    size,
  };
};
  

async function up() {
  await prisma.user.createMany({
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
  });

    await prisma.category.createMany({
      data: categories,
    });

    await prisma.ingredient.createMany({
      data: ingredients,
    });

    await prisma.product.createMany({
      data: products,
    });

    const pizza1 = await prisma.product.create({
      data: {
        name: 'Двойной цыпленок 👶',
        imageUrl:
          'https://media.dodostatic.net/image/r:233x233/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
        categoryId: 1,
        ingredients: {
          connect: ingredients.slice(0, 5),
        },
      },
    });

    const pizza2 = await prisma.product.create({
      data: {
        name: 'Жюльен',
        imageUrl:
          'https://media.dodostatic.net/image/r:233x233/11EE7D6175C10773BFE36E56D48DF7E3.avif',
        categoryId: 1,
        ingredients: {
          connect: ingredients.slice(5, 10),
        },
      },
    });
    
    const pizza3 = await prisma.product.create({
      data: {
        name: 'Сырный цыпленок',
        imageUrl:
          'https://media.dodostatic.net/image/r:233x233/11EE7D610E8BBB248F31270BE742B4BD.avif',
        categoryId: 1,
        ingredients: {
          connect: ingredients.slice(10, 40),
        },
      },
    });

    await prisma.productItem.createMany({
      data: [
        // Пицца "Пепперони фреш"
        generateProductItem({ productId: pizza1.id, pizzaType: 1, size: 20 }),
        generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 30 }),
        generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 40 }),

        // Пицца "Сырная"
        generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 20 }),
        generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 30 }),
        generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 40 }),
        generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 20 }),
        generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 30 }),
        generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 40 }),

        // Пицца "Чоризо фреш"
        generateProductItem({ productId: pizza3.id, pizzaType: 1, size: 20 }),
        generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 30 }),
        generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 40 }),


        // Остальные продукты
        generateProductItem({ productId: 1 }),
        generateProductItem({ productId: 2 }),
        generateProductItem({ productId: 3 }),
        generateProductItem({ productId: 4 }),
        generateProductItem({ productId: 5 }),
        generateProductItem({ productId: 6 }),
        generateProductItem({ productId: 7 }),
        generateProductItem({ productId: 8 }),
        generateProductItem({ productId: 9 }),
        generateProductItem({ productId: 12 }),
        generateProductItem({ productId: 13 }),
        generateProductItem({ productId: 14 }),
        generateProductItem({ productId: 15 }),
        generateProductItem({ productId: 16 }),
        generateProductItem({ productId: 17 }),
      ],
    });

    await prisma.cart.createMany({
      data: [
        {
          userId: 1,
          totalAmount: 0,
          token: '11111',
        },
        {
          userId: 2,
          totalAmount: 0,
          token: '22222',
        },
      ],  
    });

    await prisma.cartItem.create({
      data: {
        productItemId: 1,
        cartId: 1,
        quantity: 2,
        ingredients: {
          connect: [{ id: 1 }, { id: 2 }, { id: 3 }],  
        },
      },    
    });
  }


async function down() {
  await prisma.$transaction([
    prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`,
    prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`,
    prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`,
    prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`,
    prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`,
    prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`,
    prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`,
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

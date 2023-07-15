//Using commonjs to import modules

const faker = require("@faker-js/faker").faker;
const PrismaClient = require("@prisma/client").PrismaClient;

// These are EsMoludes but dont seem to be working

// import { faker } from "@faker-js/faker";
// import { PrismaClient } from "@prisma/client";

// Creating new Prisma client for whole seed file

const prisma = new PrismaClient();

// Creating seed based on my schema.prisma

const getProduct = () => {
  const name = faker.commerce.productName();
  const product = {
    slug: faker.helpers.slugify(name),
    title: name,
    body: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    images: [
      faker.image.url(),
      faker.image.url(),
      faker.image.url(),
      faker.image.url(),
      faker.image.url(),
    ],
  };
  return product;
};

//This has to be async to be descriptive and here we are
// sending the data model to prisma cliente and to mongo

const saveInDB = async () => {
  return prisma.product.createMany({
    data: getProduct(),
  });
};

// Creating an array to return an array of promises to the client
// ----With Block

const seed = async () => {
  const promises = [...Array(100).keys()].map(saveInDB);
  await Promise.all(promises);
};

// ----With 1 liner

// const seed = async () => await Promise.all([...Array(10).keys()].map(saveInDB));

//We callback seed function to invoke every promise

seed();

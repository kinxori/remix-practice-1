import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";

// Creating seed based on my schema.prisma

const getProduct = () => {
  const name = faker.commerce.productName();
  const product = {
    slug: name,
    title: faker.commerce.productName(),
    body: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    image: faker.image.url(),
  };
  return product;
};

const saveInDB = () => {
  return null;
};

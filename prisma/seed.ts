import prisma from "../lib/prisma";
import bcrypt from "bcrypt";

async function main() {
  const password = await bcrypt.hashSync("admin12", 10);

  const userSeed = await prisma.user.create({
    data: {
      name: "admin",
      email: "admin@gmail.com",
      password,
      role: "ADMIN",
    },
  });

  console.log({ userSeed });
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

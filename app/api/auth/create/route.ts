import prisma from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export const GET = async () => {
  const session = getKindeServerSession();
  if (!session) {
    return new Response(JSON.stringify({ error: "Session not found" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }
  const user = await session.getUser();

  const userInDB = prisma.user.findUnique({
    where: {
      email: user.email as string,
    },
  });

  if (!userInDB) {
    await prisma.user.create({
      data: {
        email: user.email as string,
        name: user.given_name as string,
        image: user.picture ?? ("" as string),
      },
    });
  }
  redirect("/profile");
};

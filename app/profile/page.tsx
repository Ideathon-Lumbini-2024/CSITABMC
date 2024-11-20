"use server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React from "react";

const Profile = async () => {
  const session = getKindeServerSession();
  const user = await session.getUser();
  console.log(user);
  return <div>Profile</div>;
};

export default Profile;

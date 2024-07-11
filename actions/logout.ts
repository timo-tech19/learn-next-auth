"use server";

import { signOut } from "@/auth";

export const logout = async () => {
  // Do some server stuff before signing the user out.

  await signOut();
};

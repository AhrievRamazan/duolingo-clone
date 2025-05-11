import { auth } from "@clerk/nextjs/server";

const adminIds = [
  "user_2wvCJNIqAPRVvSwyJAD4BTFwudj",
]

export const getIsAdmin = async() => {
  const { userId } = await auth();

  if (!userId) {
    return false
  }

  return adminIds.indexOf(userId) !== -1
};

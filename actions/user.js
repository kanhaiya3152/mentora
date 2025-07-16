"use server"

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server"

export async function updateUser(data) {
    const {userId} = await auth(); // check from clerk
    if(!userId) throw new Error("Unauthorised");

    const user = await db.user.findUnique({ // check from DB
        where:{
            clerkUserId:userId,
        }
    })

    if(!userId) throw new Error("User not found");
}
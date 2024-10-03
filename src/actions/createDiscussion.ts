"use server";

import { auth } from "@/auth";
import { db } from "@/db";
import type { Discussion } from "@prisma/client";
import paths from "@/paths";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const createDiscussionValidationSchema = z.object({
  book: z.string().min(3, { message: "Must be at least 3 characters long." }),
  description: z
    .string()
    .min(10, { message: "Must be at least 10 characters long." }),
});

interface CreateDiscussionFormState {
  errors: {
    book?: string[];
    description?: string[];
    _form?: string[];
  };
}

export async function createDiscussion(
  formState: CreateDiscussionFormState,
  formData: FormData
): Promise<CreateDiscussionFormState> {
  const result = createDiscussionValidationSchema.safeParse({
    book: formData.get("book"),

    //TODO: Use api call to get book description
    description: formData.get("description"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: {
        _form: ["You must be signed in."],
      },
    };
  }

  let discussion: Discussion;
  try {
    discussion = await db.discussion.create({
      data: {
        slug: result.data.book,
        description: result.data.description,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["Something went wrong :("],
        },
      };
    }
  }

  revalidatePath("/");
  redirect(paths.discussionShow(discussion.slug));
}

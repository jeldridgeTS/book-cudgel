"use server";

import { z } from "zod";

const createDiscussionValidationSchema = z.object({
  book: z.string().min(3, { message: "Must be at least 3 characters long." }),
  description: z
    .string()
    .min(10, { message: "Must be at least 10 characters long." }),
});

interface CreateDiscussionFormState {
  errors: {
    name?: string[];
    description?: string[];
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

  return {
    errors: {},
  };

  //TODO: revalidate page
}

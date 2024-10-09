"use client";

import { useFormState } from "react-dom";
import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import * as actions from "@/actions";
import FormButton from "@/components/common/formButton";

interface PostCreateFormProps {
  slug: string;
}

export default function PostCreateForm({ slug }: PostCreateFormProps) {
  const [formState, action] = useFormState(
    actions.createPost.bind(null, slug),
    { errors: {} }
  );

  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <Button color="danger">Create Post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a post</h3>

            <Input
              name="title"
              label="Title"
              labelPlacement="outside"
              placeholder="Title"
              isInvalid={!!formState.errors.title}
              errorMessage={formState.errors.title?.join(", ")}
            />
            <Textarea
              name="content"
              label="Content"
              labelPlacement="outside"
              placeholder="Content"
              isInvalid={!!formState.errors.content}
              errorMessage={formState.errors.content?.join(", ")}
            />

            {
              //TODO: Replace with a toast
              formState.errors._form ? (
                <div className="p-2 bg-red-200 border rounded-xl border-red-400">
                  {formState.errors._form.join(", ")}
                </div>
              ) : null
            }

            <FormButton color="secondary" variant="flat">
              Create post
            </FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}

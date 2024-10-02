"use client";

import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@nextui-org/react";
import * as actions from "@/actions";
import { useFormState } from "react-dom";

export default function DiscussionCreateForm() {
  const [formState, action] = useFormState(actions.createDiscussion, {
    errors: {},
  });

  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <Button color="danger">Create Discussion</Button>
      </PopoverTrigger>

      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a discussion</h3>
            <Input
              name="book"
              label="Book"
              labelPlacement="outside"
              placeholder="title"
            />

            {
              //TODO: Hide desc field, use api to grab books description
            }
            <Textarea
              name="description"
              label="Description"
              labelPlacement="outside"
              placeholder="..."
            />
            <Button color="secondary" variant="flat" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}

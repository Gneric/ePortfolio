import React from "react";
import { Button } from "@nextui-org/button";

import { AddCircle } from '@/assets/blankTab/addCircle'

export default function AddButton({ addLink, ulkey, url, placeholder }) {
  return (
    <div className="flex gap-4 items-center absolute top-5 right-5">
      <Button isIconOnly onPress={() => addLink({ key: ulkey, url, placeholder })} color="success" aria-label="Like">
        <AddCircle />
      </Button>
    </div>
  );
}
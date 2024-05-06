import React from "react";
import {Button} from "@nextui-org/react";

import { addCircle } from '@/assets/blankTab/addCircle'

export default function AddButton({ addLink, ulkey, url, placeholder }) {
  return (
    <div className="flex gap-4 items-center">
      <Button isIconOnly onPress={() => addLink({ ulkey, url, placeholder })} color="success" aria-label="Like">
        <addCircle />
      </Button>
    </div>
  );
}
import { FC } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import React from "react";
import ArrowDown from "@/app/components/svg/ArrowDown";

const AccordionDemo: FC<{ question: string; answer: string }> = ({
  question,
  answer,
}) => (
  <Accordion.Root
    className=" border-4 border-primary rounded-md lg:w-500px sm:w-200px"
    type="single"
    collapsible
  >
    <Accordion.Item value="item-1" className="">
      <Accordion.Trigger className="flex justify-between w-full">
        {question}
        <ArrowDown />
      </Accordion.Trigger>
      <Accordion.Content>{answer}</Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
);

export { AccordionDemo };

import React from "react";
import {
  Progress,
  ProgressFilledTrack,
  VStack,
  Text,
  Box,
  Heading,
} from "@gluestack-ui/themed";

export default function PopoverConfirm() {
  return (
    <Progress w={800} value={value} size={"xl"}>
      <ProgressFilledTrack />
    </Progress>
  );
}

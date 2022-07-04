import { View, Text } from "react-native";
import React from "react";
import { Mainheaidng, HeadingText } from "./Style";
import { SvgXml } from "react-native-svg";

import { staricon } from "./Svgicon";

export default function Heading({ placeholder }) {
  return (
    <Mainheaidng>
      <SvgXml xml={staricon} width="70px" />
      <HeadingText>{placeholder}</HeadingText>
    </Mainheaidng>
  );
}

import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ModalViewBack, BackButton, OneView, TwoView } from "./style";
import { back, mainlogog } from "./svgAll";
import { SvgXml } from "react-native-svg";
import { Pressable } from "native-base";
export default function Backbtn({ handleBack }) {
  const navigation = useNavigation();

  // navigation.navigate("SignInEmail");
  return (
    <ModalViewBack>
      <BackButton>
        <Pressable
          onPress={() => {
            navigation.navigate(handleBack);
          }}
        >
          <OneView>
            <SvgXml xml={back} width="80px" />
          </OneView>
        </Pressable>

        <TwoView>
          <SvgXml xml={mainlogog} width="70px" />
        </TwoView>
      </BackButton>
    </ModalViewBack>
  );
}

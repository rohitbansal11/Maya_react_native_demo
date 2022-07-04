import { View, Text } from "react-native";
import React, { useState } from "react";
import { Input, Pressable } from "native-base";
import BackBtn from "../BackBtn/Backbtn";
import Heading from "../MainHeading/Heading";
import { endSvg, ButtonEnd } from "./svgAll";
import {
  MainView,
  ViewFlexImgFiled,
  MainInputFiled,
  ButtonView,
} from "./style";
import { SvgXml } from "react-native-svg";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
export default function ThirdFolder() {
  const navigation = useNavigation();

  // navigation.navigate("SignInEmail");
  const [textFiled, setTextFiled] = useState("");
  return (
    <KeyboardAwareScrollView>
      <MainView>
        <BackBtn handleBack="SecondPage" />
        <Heading placeholder="Hello,  What’s your mobile number?" />

        <ViewFlexImgFiled>
          <MainInputFiled>
            <Input
              type="text"
              placeholder="Enter your 10 digit mobile number"
              mx="3"
              w="100%"
              variant="unstyled"
              keyboardType="numeric"
              onChangeText={(val) => {
                setTextFiled(val);
              }}
            />
          </MainInputFiled>
        </ViewFlexImgFiled>
        <ButtonView>
          <Pressable
            onPress={() => {
              navigation.navigate("Fourth");
            }}
          >
            <SvgXml xml={ButtonEnd} width="500px" />
          </Pressable>
        </ButtonView>

        <SvgXml xml={endSvg} width="500px" />
      </MainView>
    </KeyboardAwareScrollView>
  );
}

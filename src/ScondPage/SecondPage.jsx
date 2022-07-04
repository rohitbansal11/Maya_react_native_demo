import { View, Text, ScrollView } from "react-native";
import React from "react";

import { logosvg, BtnSvg } from "./svgScond";
import { SvgXml } from "react-native-svg";
import {
  MainContainer,
  ImgMainBack,
  MainViewForFlex,
  Textfileisher,
  MainScondView,
  TextScondCheck,
  MainViewForFlexTYwo,
  EndView,
} from "./style";
import logoMain from "../../assets/home/copyfram.png";

import { useNavigation } from "@react-navigation/native";
import { Pressable } from "native-base";
export default function SecondPage() {
  const navigation = useNavigation();

  // navigation.navigate("SignInEmail");
  return (
    <ScrollView>
      <MainContainer>
        <ImgMainBack source={logoMain} resizeMode="cover"></ImgMainBack>
        <MainScondView>
          <MainViewForFlex>
            <SvgXml xml={logosvg} width="301px" />
          </MainViewForFlex>
          <MainViewForFlex>
            <Textfileisher>Save. Grow. Repeat</Textfileisher>
          </MainViewForFlex>
          <MainViewForFlex>
            <TextScondCheck>
              Mayaa is a savings and investment app for individuals and
              families. The child gets tasks dumy content dummy content here to
              fill so that its a paragraph in total.
            </TextScondCheck>
          </MainViewForFlex>
          <MainViewForFlexTYwo>
            <Pressable
              onPress={() => {
                navigation.navigate("ThirdFolder");
              }}
            >
              <SvgXml xml={BtnSvg} width="301px" />
            </Pressable>
          </MainViewForFlexTYwo>
        </MainScondView>

        <EndView></EndView>
      </MainContainer>
    </ScrollView>
  );
}

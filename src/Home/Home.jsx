import { View, Text } from "react-native";
import React from "react";

import homeimg from "../../assets/home/rightimg.png";
import logo from "../../assets/home/logo.png";
import { useNavigation } from "@react-navigation/native";

import {
  MainContainer,
  ImgContainer,
  MainInternalView,
  Textfileisher,
  NewFileEnd,
} from "./Style";
import { ScrollView, Image, Pressable } from "native-base";
import { SvgXml } from "react-native-svg";
import { logosvg, logoImg, Backbtn } from "./Svghere";

export default function Home() {
  const navigation = useNavigation();

  // navigation.navigate("SignInEmail");
  return (
    <ScrollView>
      <MainContainer>
        <ImgContainer xml={logoImg} />

        <MainInternalView>
          <SvgXml xml={logosvg} width="301px" />
        </MainInternalView>
        <MainInternalView>
          <Textfileisher>Creating financially smart families</Textfileisher>
        </MainInternalView>
        <MainInternalView>
          <Pressable
            onPress={() => {
              navigation.navigate("SecondPage");
            }}
          >
            <SvgXml xml={Backbtn} width="301px" />
          </Pressable>
        </MainInternalView>
        <NewFileEnd></NewFileEnd>
      </MainContainer>
    </ScrollView>
  );
}

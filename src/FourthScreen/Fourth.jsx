import { View, Text } from "react-native";
import React, { useState } from "react";
import { SvgXml } from "react-native-svg";
import { Pressable } from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { endSvg, ButtonEnd } from "./SvgAll";

import BackBtn from "../BackBtn/Backbtn";
import Heading from "../MainHeading/Heading";
import OTPTextView from "./Comp";

import {
  MainView,
  ButtonView,
  TextOne,
  MainViewForFlex,
  TextTwoUnder,
  TextTwo,
} from "./style";

export default function Fourth() {
  const [OTP, setOTP] = useState("");
  return (
    <KeyboardAwareScrollView>
      <MainView>
        <BackBtn handleBack="ThirdFolder" />
        <Heading placeholder="Enter the verification code" />

        <TextOne>We've sent it to 7506027757</TextOne>
        <View style={{ marginBottom: 20 }}>
          <OTPTextView
            tintColor="lightblue"
            offTintColor="gray"
            handleTextChange={(otp) => setOTP(otp)}
            defaultValue={OTP}
            selectionColor="lightblue"
            textInputStyle={{ borderWidth: 4, borderRadius: 8 }}
          ></OTPTextView>
        </View>
        <MainViewForFlex>
          <TextTwo>Didn't get the code?</TextTwo>
          <TextTwoUnder> Resend in 30 seconds</TextTwoUnder>
        </MainViewForFlex>
        <ButtonView>
          <Pressable>
            <SvgXml xml={ButtonEnd} width="500px" />
          </Pressable>
        </ButtonView>

        <SvgXml xml={endSvg} width="500px" />
      </MainView>
    </KeyboardAwareScrollView>
  );
}

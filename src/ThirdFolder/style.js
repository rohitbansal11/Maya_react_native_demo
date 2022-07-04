import styled from "styled-components";
import nativeStyled from "styled-components/native";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import homeimg from "../../assets/home/rightimg.png";
import { SvgXml } from "react-native-svg";

export const MainView = styled(View)`
  background: #fffbf0;
`;

export const ViewFlexImgFiled = styled(View)`
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
`;

export const MainInputFiled = styled(View)`
  border: 1px solid lightgray;
  border-radius: 16px;
  height: 49px;
`;
export const ButtonView = styled(View)`
  position: absolute;
  bottom: 150px;
  left: 60px;
  z-index: 1;
`;

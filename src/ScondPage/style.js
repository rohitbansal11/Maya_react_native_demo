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

export const MainContainer = styled(View)`
  background: #fffbf0;
`;

export const ImgMainBack = styled(ImageBackground)`
  width: 100%;
  height: 400px;
`;
export const MainViewForFlex = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const Textfileisher = styled(Text)`
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 38px;
  text-align: center;

  color: #26262a;
`;
export const MainScondView = styled(View)`
  margin-top: 16px;
`;

export const TextScondCheck = styled(Text)`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  text-align: center;
  padding-top: 5px;
  color: #26262a;
  width: 370px;
`;
export const MainViewForFlexTYwo = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 15px;
`;

export const EndView = styled(View)`
  height: 70px;
`;

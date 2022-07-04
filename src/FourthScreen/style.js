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

export const ButtonView = styled(View)`
  position: absolute;
  bottom: 150px;
  left: 60px;
  z-index: 1;
`;

export const TextOne = styled(Text)`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  /* identical to box height, or 112% */

  /* Primary/dark */

  color: #141e4f;
  margin-left: 30px;
  margin-top: 10px;
`;
export const MainViewForFlex = styled(View)`
  display: flex;
  flex-direction: row;
  margin-left: 30px;
  margin-top: 10px;
`;

export const TextTwo = styled(Text)`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  /* or 114% */

  display: flex;
  align-items: center;

  /* Primary/dark */

  color: #141e4f;
`;
export const TextTwoUnder = styled(Text)`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  /* or 114% */

  display: flex;
  align-items: center;

  /* Primary/dark */

  color: #141e4f;
  text-decoration: underline;
`;

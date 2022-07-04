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
  border-radius: 24px;
  width: 100%;
`;
export const ImgContainer = styled(SvgXml)`
  height: 100px;
`;

export const MainInternalView = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 16px;
`;

export const ImgeMainLogo = styled(Image)`
  width: 100px;
  height: 80px;
`;

export const Textfileisher = styled(Text)`
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 38px;
  text-align: center;

  color: #26262a;
`;

export const NewFileEnd = styled(View)`
  height: 70px;
`;

import styled from "styled-components";
import { View, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
export const ModalViewBack = styled(View)`
  width: 100%;
  margin-top: 30px;
  margin-left: 3px;
  margin-bottom: 3px;
`;
export const BackButton = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  margin-left: 10px;
`;
export const LeftOutLineIcon = styled(AntDesign)`
  font-weight: bolder;
  color: #003399;
  margin-top: 9px;
  margin-left: 8px;
`;
export const OneView = styled(View)`
  margin-top: 10px;
`;

export const TwoView = styled(View)`
  margin-top: 10px;
`;

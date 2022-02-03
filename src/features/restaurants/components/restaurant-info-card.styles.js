
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { theme } from "../../../infrastructure/theme/index"


export const RestaurantCard = styled(Card)`
background-color: ${theme.colors.bg.secondary};
`;
export const RestaurantCardCover = styled(Card.Cover)`
padding:${(props) => props.theme.space[3]};
backgroundColor:${(props) => props.theme.colors.bg.primary};
`;
export const Info = styled.View`
padding:${(props) => props.theme.space[3]};
`;
export const Address = styled.Text`
font-family:${(props) => props.theme.fonts.body};
font-size:${(props) => props.theme.fontSizes.caption};
color:${(props) => props.theme.colors.ui.primary};
`;
export const Icon = styled.Image`
width: 15px;
height: 15px;
`;
export const Rating = styled.View`
flex-direction: row;
padding-top: ${(props) => props.theme.space[2]};
padding-bottom: ${(props) => props.theme.space[2]};
`;
export const Section = styled.View`
flex-direction: row;
align-items: center;
justify-content: space-between;
`;
export const SectionEnd = styled.View`
flex-direction: row;
align-items: center;
`;
export const Open = styled(SvgXml)`
flex-direction: row;
`;

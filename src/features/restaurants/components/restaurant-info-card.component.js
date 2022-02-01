import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import styled from "styled-components/native";
import { theme } from "../../../infrastructure/theme/index"
import { SvgXml } from 'react-native-svg';
import { start } from '../../../../assets/star'

const RestaurantCard = styled(Card)`
    background-color: ${theme.colors.bg.secondary};
`

const RestaurantCardCover = styled(Card.Cover)`
    padding:${(props) => props.theme.space[3]};
    backgroundColor:${(props) => props.theme.colors.bg.primary};
`

const Title = styled.Text`
    font-family:${(props) => props.theme.fonts.heading};
    font-size:${(props) => props.theme.fontSizes.body}
    color:${(props) => props.theme.colors.ui.primary};
`
const Info = styled.View`
    padding:${(props) => props.theme.space[3]};
`
const Address = styled(Text)`
    font-family:${(props) => props.theme.fonts.body};
    font-size:${(props) => props.theme.fontSizes.caption};
    color:${(props) => props.theme.colors.ui.primary};
`

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = 'Algun restaurante chido',
        icon,
        photos = ['https://www.eluniverso.com/resizer/-miZFOybIZWsLGKD52kMNkTw1BA=/893x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/2XYTBX5LUFCRZC3NVYRLQJPBZU.jpg'],
        address = 'alguna calle aleatoria',
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily,
    } = restaurant;
    return (
        <>
            <RestaurantCard elevation={10}>
                <RestaurantCardCover source={{ uri: photos[0] }} />
                <Info>
                    <Title>{name}</Title>
                    <SvgXml xml={start} />
                    <Address>{address}</Address>
                </Info>
            </RestaurantCard>
        </>
    )
}
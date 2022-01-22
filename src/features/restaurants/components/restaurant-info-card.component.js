import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
`

const RestaurantCardCover = styled(Card.Cover)`
    padding:${(props) => props.theme.space[3]};
    backgroundColor:${(props) => props.theme.colors.bg.primary};
`

const Title = styled.Text`
    font-family:${(props) => props.theme.fonts.body}
    padding:${(props) => props.theme.space[3]};
    color:${(props) => props.theme.colors.ui.primary};
`

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = 'Algun restaurante chidooooooooo',
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
                <Title>Hola</Title>
            </RestaurantCard>
        </>
    )
}
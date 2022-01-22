import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
    background-color: white;
`

const RestaurantCardCover = styled(Card.Cover)`
    padding:20px;
    backgroundColor:white;
`

const Title = styled.Text`
    padding:16px;
    color:red;
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
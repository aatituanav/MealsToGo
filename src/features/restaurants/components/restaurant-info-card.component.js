import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import styled from "styled-components/native";



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
            <Card elevation={10} style={styles.card}>
                <Card.Cover source={{ uri: photos[0] }} style={styles.cover} />
                <Title>Hola</Title>
            </Card>
        </>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
    },
    cover: {
        padding: 20,
        backgroundColor: "white",
    }
})

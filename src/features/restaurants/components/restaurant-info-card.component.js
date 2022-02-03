import React from "react";
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star'
import open from '../../../../assets/open'
import { Spacer } from '../../../components/spacer/spacer.component'
import { Text } from '../../../components/typography/text.component'

import {
    Icon,
    RestaurantCard,
    RestaurantCardCover,
    Info,
    Section,
    SectionEnd,
    Rating,
    Address,
    Open,
} from './restaurant-info-card.styles'


export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = 'Algun restaurante chido',
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = ['https://www.eluniverso.com/resizer/-miZFOybIZWsLGKD52kMNkTw1BA=/893x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/2XYTBX5LUFCRZC3NVYRLQJPBZU.jpg'],
        address = 'alguna calle aleatoria',
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true,
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));


    return (
        <>
            <RestaurantCard elevation={10}>
                <RestaurantCardCover source={{ uri: photos[0] }} />
                <Info>
                    <Text variant='label'>{name}</Text>
                    <Section>
                        <Rating>
                            {ratingArray.map(() => (
                                <SvgXml xml={star} width={20} height={20} />
                            ))}
                        </Rating>
                        <SectionEnd>
                            {isClosedTemporarily && (
                                <Text variant='error'>
                                    CERRADO TEMPORALMENTE
                                </Text>
                            )}
                            <Spacer position="left" size="large" >
                                {isOpenNow && <Open xml={open} width={20} height={20} />}
                            </Spacer>
                            <Spacer position="left" size="large" >
                                <Icon source={{ uri: icon }} />
                            </Spacer>
                        </SectionEnd>
                    </Section>
                    <Address>{address}</Address>
                </Info>
            </RestaurantCard>
        </>
    )
}


import React from 'react';
import { Text, View, Image,Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image } = album
    const { headerstyle,
        thumbnailStyle,
        tCS,
        headerTextStyle,
        imageStyle
    } = styles

    return (
        <Card>
            <CardSection>
                <View style={tCS} >
                    <Image
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={headerstyle} >
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                    source={{ uri: image }}
                    style={imageStyle}
                />
            </CardSection>
            <CardSection>
                <Button  onPress={() =>Linking.openURL(url)} />
            </CardSection>
        </Card>
    )
};

const styles = {
    headerstyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 100,
        width: 100
    },
    tCS: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
}



export default AlbumDetail;
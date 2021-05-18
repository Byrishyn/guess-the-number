import React from 'react';
import { View, Image, StyleSheet, Button } from 'react-native'

import BodyText from "../components/BodyText"
import TitleText from "../components/TitleText"

const GameOverScreen = props => {
    return (
        <View style={styles.screen} >
            <TitleText>The game is over !</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    //source={require("../assets/success.png")}
                    source={{uri:"https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg"}}
                    style={styles.image}
                />
            </View>
            <BodyText>Number of rounds : {props.numberRounds}</BodyText>
            <BodyText>The number was : {props.userNumber}</BodyText>
            <Button title="New Game" onPress={props.onNewGame} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        height: "100%",
        width: "100%"
    },
    imageContainer: {
        height: 300,
        width: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: "black",
        overflow: "hidden",
        marginVertical: 30,
    }
})

export default GameOverScreen;
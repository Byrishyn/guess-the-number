import React from 'react';
import { View, Image, StyleSheet, Button } from 'react-native'

import BodyText from "../components/BodyText"
import TitleText from "../components/TitleText"

const GameOverScreen = props => {
    return (
        <View style={styles.screen} >
            <TitleText>The game is over !</TitleText>
            <Image source={require("../assets/success.png")}/>
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
    }
})

export default GameOverScreen;
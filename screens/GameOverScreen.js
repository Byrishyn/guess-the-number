import React from 'react';
import { View, Image, StyleSheet, Button, Text } from 'react-native'

import BodyText from "../components/BodyText"
import TitleText from "../components/TitleText"
import MainButton from "../components/MainButton"
import Colors from '../constants/colors';

const GameOverScreen = props => {
    var text = "";

    if (!props.computerGuess){
        text = "It took you "
    } else {
        text = "It took your phone "
    }


    return (
        <View style={styles.screen} >
            <TitleText>The game is over !</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    source={require("../assets/success.png")}
                    //source={{uri:"https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg"}}
                    style={styles.image}
                />
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>
                    {text}
                    <Text style={styles.highlight}>{props.numberRounds}</Text>
                    {" "}rounds to guess the number{" "}
                    <Text style={styles.highlight}>{props.userNumber}</Text>
                </BodyText>
            </View>
            <MainButton onPress={props.onNewGame}>New Game</MainButton>
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
    },
    highlight: {
        color: Colors.primary,
        fontFamily: "open-sans-bold"
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: 15,
    },
    resultText: {
        textAlign: "center",
        fontSize: 20,
    }
})

export default GameOverScreen;
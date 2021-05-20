import React from 'react';
import { StyleSheet, View } from 'react-native'

import TitleText from "../components/TitleText"
import MainButton from "../components/MainButton"

const GameSelectionScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText style={styles.title}>Who's guessing ?</TitleText>
            <View style={styles.buttonContainer}>
                <MainButton onPress={() => props.setComputerGuess(true)}>The computer !</MainButton>
                <MainButton onPress={() => props.setComputerGuess(false)}>Me !</MainButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
    },
    title: {
        marginVertical: 15
    },
    buttonContainer: {
        height: 120,
        justifyContent: "space-around"
    }
})

export default GameSelectionScreen;
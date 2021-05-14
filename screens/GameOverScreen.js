import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'

const GameOverScreen = props => {
    return (
        <View style={styles.screen} >
            <Text>The game is over !</Text>
            <Text>Number of rounds : {props.numberRounds}</Text>
            <Text>The number was : {props.userNumber}</Text>
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
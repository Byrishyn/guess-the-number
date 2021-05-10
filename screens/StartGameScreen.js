import React from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native'

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Start a New Game !</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.title}>Select a Number</Text>
                <TextInput/>
                <View style={styles.buttonContainer}>
                    <Button title="Reset" onPress={() => {}}/>
                    <Button title="Submit" onPress={() => {}}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen : {
        flex:1,
        padding: 10,
        alignItems : "center",
    },
    inputContainer : {
        width:300,
        maxWidth: "80%",
        alignItems : "center"
    },
    buttonContainer : {
        flexDirection:"row",
        row: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15,
    },
    title : {
        fontSize : 20,
        marginVertical : 10,
    },
});

export default StartGameScreen;

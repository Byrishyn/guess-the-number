import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Alert, Button, Keyboard } from 'react-native'

import BodyText from "../components/BodyText"
import Input from "../components/Input"
import NumberContainer from "../components/NumberContainer"
import Card from "../components/Card"
import Colors from "../constants/colors"

const GuessScreen = props => {
    const [enteredValue, setEnteredValue] = useState("")
    //const computerNumber = useRef(Math.floor(Math.random() * 100))
    const computerNumber = useRef(25)
    const [computerAnswer, setComputerAnswer] = useState("?")
    const [currentGuess, setCurrentGuess] = useState()
    const [pastGuesses, setPastGuesses] = useState([])

    useEffect(() => {
        if (currentGuess === computerNumber.current) {
            props.onGameOver(pastGuesses.length, currentGuess);
        }
    }, [currentGuess])

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ""))
    }

    const resetInputHandler = () => {
        setEnteredValue("");
    }

    const confirmInputHandler = () => {
        const choosenNumber = parseInt(enteredValue)
        if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
            Alert.alert("Invalid number !", "The value must be between 1 and 99", [{ text: "Okay", style: "destructive", onPress: resetInputHandler }])
            return;
        }
        setEnteredValue("");
        setPastGuesses(curr => [choosenNumber, ...curr])
        if (choosenNumber > computerNumber.current) {
            setComputerAnswer("-")
        } else if (choosenNumber < computerNumber.current) {
            setComputerAnswer("+")
        } else {
            setCurrentGuess(choosenNumber)
        }
        Keyboard.dismiss();
    }

    return (
        <View style={styles.screen}>
            <BodyText>Opponent's answer</BodyText>
            <NumberContainer>{computerAnswer}</NumberContainer>
            <Card style={styles.inputContainer}>
                <BodyText>Select a Number</BodyText>
                <Input
                    style={styles.input}
                    blurOnSubmit
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="number-pad"
                    maxLength={2}
                    onChangeText={numberInputHandler}
                    value={enteredValue}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Reset" onPress={resetInputHandler} color={Colors.accent} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Submit" onPress={confirmInputHandler} color={Colors.primary} />
                    </View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15,
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: "open-sans-bold"
    },
    button: {
        width: 100
    },
    input: {
        width: 50,
        textAlign: "center"
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: "center",
    },
    inputContainer: {
        width: 300,
        maxWidth: "80%",
        alignItems: "center",
    },
})

export default GuessScreen;
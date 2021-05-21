import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Alert, Button, Keyboard } from 'react-native'

import BodyText from "../components/BodyText"
import TitleText from "../components/TitleText"
import NumberContainer from "../components/NumberContainer"
import GuessScrollview from "../components/GuessScrollview"
import NumberInputCard from "../components/NumberInputCard"
import Card from "../components/Card"

const GuessScreen = props => {
    const [enteredValue, setEnteredValue] = useState("")
    const computerNumber = useRef(Math.floor(Math.random() * 100))
    const [computerAnswer, setComputerAnswer] = useState("?")
    const [currentGuess, setCurrentGuess] = useState()
    const [pastGuesses, setPastGuesses] = useState([])
    const currentLow = useRef(0);
    const currentHigh = useRef(100);

    useEffect(() => {
        if (currentGuess === computerNumber.current) {
            props.onGameOver(pastGuesses.length, currentGuess);
        }
    }, [currentGuess])

    const confirmInputHandler = () => {
        const choosenNumber = parseInt(enteredValue)
        if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
            Alert.alert("Invalid number !", "The value must be between 1 and 99", [{ text: "Okay", style: "destructive", onPress: resetInputHandler }])
            return;
        }
        setEnteredValue("");
        if (choosenNumber > computerNumber.current) {
            setComputerAnswer("Lower")
            currentHigh.current = choosenNumber;
            setPastGuesses(curr => ["<" + choosenNumber, ...curr])
        } else if (choosenNumber < computerNumber.current) {
            setComputerAnswer("Greater")
            currentLow.current = choosenNumber;
            setPastGuesses(curr => [">" + choosenNumber, ...curr])
        } else {
            setCurrentGuess(choosenNumber)
        }
        Keyboard.dismiss();
    }

    return (
        <View style={styles.screen}>
            <BodyText>Opponent's answer</BodyText>
            <NumberContainer>{computerAnswer}</NumberContainer>
            <NumberInputCard onConfirm={confirmInputHandler} enteredValue={enteredValue} setEnteredValue={setEnteredValue} />
            <Card style={styles.summaryContainer}>
                <TitleText>{currentLow.current + " < ? < " + currentHigh.current}</TitleText>
            </Card>
            <GuessScrollview pastGuesses={pastGuesses} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
    },
    summaryContainer: {
      marginTop: 10,
      alignItems: "center",
    }
})

export default GuessScreen;
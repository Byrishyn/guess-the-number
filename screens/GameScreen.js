import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Alert, ScrollView } from "react-native"
import { Ionicons } from "@expo/vector-icons"

import NumberContainer from "../components/NumberContainer"
import Card from "../components/Card"
import MainButton from "../components/MainButton"
import DefaultStyles from "../constants/default-styles"

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rnd = Math.floor(Math.random() * (max - min)) + min;
    if (rnd === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rnd;
    }
}

const GameScreen = props => {
    const initialGuess = generateRandomBetween(1, 100, props.userChoice)
    const [pastGuesses, setPastGuesses] = useState([initialGuess])
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { onGameOver, userChoice } = props;

    const nextGuessHandler = direction => {
        if ((direction === "lower" && currentGuess < props.userChoice) || (direction === "greater" && currentGuess > props.userChoice)) {
            Alert.alert("Don't lie !", "This is not true", [{ text: "Sorry...", style: "cancel" }]);
            return;
        }
        if (direction === "lower") {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess + 1;
        }
        const newNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(newNumber);
        setPastGuesses(curPastGuesses => [newNumber,...curPastGuesses])
    }

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(pastGuesses.length);
        }
    }, [currentGuess, onGameOver, userChoice])

    return (
        <View style={styles.screen}>
            <Text style={DefaultStyles.bodyText}>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <MainButton onPress={nextGuessHandler.bind(this, "lower")}>
                    <Ionicons name="md-remove" color="white" size={24} />
                </MainButton>
                <MainButton onPress={nextGuessHandler.bind(this, "greater")}>
                    <Ionicons name="md-add" color="white" size={24} />
                </MainButton>
            </Card>
            <ScrollView>
                {pastGuesses.map((guess) =>
                    <View key={guess}>
                        <Text>{guess}</Text>
                    </View>
                )}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
        width: 400,
        maxWidth: "90%"
    }
})

export default GameScreen;
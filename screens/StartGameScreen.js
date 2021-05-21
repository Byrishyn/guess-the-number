import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer"
import TitleText from "../components/TitleText"
import MainButton from "../components/MainButton"
import NumberInputCard from "../components/NumberInputCard"

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState("")
  const [confirmed, setConfirmed] = useState(false)
  const [selectedNumber, setSelectedNumber] = useState()

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  }

  const confirmInputHandler = () => {
    const choosenNumber = parseInt(enteredValue)
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert("Invalid number !", "The value must be between 1 and 99", [{ text: "Okay", style: "destructive", onPress: resetInputHandler }])
      return;
    }
    setConfirmed(true);
    setEnteredValue("");
    setSelectedNumber(choosenNumber);
    Keyboard.dismiss();
  }

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton onPress={ () => {props.onStartGame(selectedNumber)}}>START GAME !</MainButton>
      </Card>
    )
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }} >
      <View style={styles.screen}>
        <TitleText style={styles.title}>Start a New Game !</TitleText>
        <NumberInputCard onConfirm={confirmInputHandler} enteredValue={enteredValue} setEnteredValue={setEnteredValue}/>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: "open-sans-bold"
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  }
});

export default StartGameScreen;

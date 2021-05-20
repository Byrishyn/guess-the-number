import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';

import Header from "./components/Header"
import StartGameScreen from "./screens/StartGameScreen"
import GameScreen from "./screens/GameScreen"
import GuessScreen from "./screens/GuessScreen"
import GameOverScreen from "./screens/GameOverScreen"
import GameSelectionScreen from "./screens/GameSelectionScreen"

const FetchFonts = () => {
  return Font.loadAsync({
    'open-sans' : require("./assets/fonts/OpenSans-Regular.ttf"),
    'open-sans-bold' : require("./assets/fonts/OpenSans-Bold.ttf"),
  })
}

export default function App() {
  const [computerGuess, setComputerGuess] = useState();
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if(!dataLoaded){
    return <AppLoading startAsync={FetchFonts} onFinish={() => setDataLoaded(true)} onError={(err) => console.log(err)} />
  }


  const newGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
    setComputerGuess(null)
  }

  const gameStartHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
    setGuessRounds(0);
  }

  const gameOverHandler = nbrRounds => {
    setGuessRounds(nbrRounds);
  }

  const gameChoiceHandler = (choice) => {
    setComputerGuess(choice)
  }

  let content = <GameSelectionScreen setComputerGuess={gameChoiceHandler} />

  if (computerGuess === true) {
    content = <StartGameScreen onStartGame={gameStartHandler} />
  } else if (computerGuess === false) {
    content = <GuessScreen />
  }

  if (userNumber && guessRounds <=0) {
    content = <GameScreen userChoice={userNumber} onGameOver ={gameOverHandler} />
  } else if (guessRounds > 0) {
    content = <GameOverScreen userNumber={userNumber} numberRounds={guessRounds} onNewGame={newGameHandler} />
  }


  return (
    <View style={styles.screen}>
      <Header title="Guess a number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});

import React from "react";
import { StyleSheet, View, Button} from "react-native"

import Card from "./Card"
import BodyText from "./BodyText"
import Input from "./Input"
import Colors from "../constants/colors"

const NumberInputCard = props => {

    const numberInputHandler = inputText => {
        props.setEnteredValue(inputText.replace(/[^0-9]/g, ""))
    }

    const resetInputHandler = () => {
        props.setEnteredValue("");
    }

    return (
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
                    value={props.enteredValue}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Reset" onPress={resetInputHandler} color={Colors.accent} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Submit" onPress={props.onConfirm} color={Colors.primary} />
                    </View>
                </View>
            </Card>
    )



}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15,
    },
    button: {
        width: 100
    },
    input: {
        width: 50,
        textAlign: "center"
    },
    inputContainer: {
        width: 300,
        maxWidth: "80%",
        alignItems: "center",
    },
})

export default NumberInputCard
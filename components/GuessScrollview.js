import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import BodyText from "./BodyText"

const GuessScrollview = props => {

    const renderListItem = (value, numOfRounds) => (
        <View key={value} style={styles.listItem}>
            <BodyText>#{numOfRounds}</BodyText>
            <BodyText>{value}</BodyText>
        </View>
    )

    return (
        <View style={styles.listContainer}>
            <ScrollView contentContainerStyle={styles.list}>{props.pastGuesses.map((guess, index) => renderListItem(guess, props.pastGuesses.length - index))}</ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    listItem: {
        flexDirection: "row",
        borderColor: "#ccc",
        borderWidth: 1,
        backgroundColor: "white",
        padding: 15,
        marginVertical: 10,
        justifyContent: "space-between",
        width: "60%"
    },
    listContainer: {
        flex: 1,
    },
    list: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "flex-end",
    }
})

export default GuessScrollview;
import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import BodyText from "./BodyText"

const GuessFlatList = (props) => {

    const renderListItem = (listLength, itemData) => (
        <View style={styles.listItem}>
            <BodyText>#{listLength - itemData.index}</BodyText>
            <BodyText>{itemData.item}</BodyText>
        </View>
    )

    return (
        <View style={styles.listContainer}>
            <FlatList
                keyExtractor={item => item}
                data={props.pastGuesses}
                renderItem={renderListItem.bind(this, props.pastGuesses.length)}
                contentContainerStyle={styles.list}
            />
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
        width: "100%"
    },
    list: {
        flexGrow: 1,
        justifyContent: "flex-end"
    },
    listContainer:{
        width: "60%",
        flex: 1,
    }
})

export default GuessFlatList;
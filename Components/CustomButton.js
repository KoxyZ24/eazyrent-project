import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


const CustomButton = ({label}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
            >
                <Text>{label}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
    },
    button: {
        height: 40,
        margin: 12,
        padding: 10,
        borderRadius: 20,
        backgroundColor: "#E5E5E5",
        alignItems: "center",
    },
    countContainer: {
        alignItems: "center",
        padding: 10
    }
});

export default CustomButton;

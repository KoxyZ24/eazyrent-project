import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const CustomNumberInput = ({label,onChange,value}) => {
    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChange={onChange}
                value={value}
                placeholder={label}
                keyboardType="numeric"
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        padding: 8,
        paddingLeft: 16,
        borderRadius: 20,
        marginLeft: 5,
        fontSize: 20,
    },
});

export default CustomNumberInput;

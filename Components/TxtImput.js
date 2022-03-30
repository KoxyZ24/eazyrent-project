import React from "react";
import {SafeAreaView, StyleSheet, TextInput} from "react-native";

const CustomTextInput = ({label,onChange,text}) => {
    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChange={onChange}
                value={text}
                placeholder={label}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        marginLeft: 5,
        margin: 8,
        borderWidth: 1,
        padding: 8,
        paddingLeft: 16,
        borderRadius: 20,
        fontSize: 20,
    },
});

export default CustomTextInput;

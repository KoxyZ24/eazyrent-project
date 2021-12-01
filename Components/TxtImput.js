import * as React from 'react';
import { TextInput } from 'react-native-paper';
import {StyleSheet} from "react-native";

const TxtInput = ({label}) => {
    const [text, setText] = React.useState('');

    return (
        <TextInput
            style={Styles.Input}
            label={label}
            value={text}
            onChangeText={text => setText(text)}
        />
    );
};

const Styles = StyleSheet.create({
    Input: {
        borderWidth: 2,
        borderColor: "#DAA520"
    }
})

export default TxtInput;
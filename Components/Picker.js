import React from "react";
import {FlatList, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";

const CustomPicker = ({label, data, currentIndex, onSelected}) => {
    return (
        <>
            <Text style={Styles.title}>{label}</Text>
            <View style={Styles.wrapperHorizontal}>
                <FlatList
                    bounces
                    horizontal
                    data={data}
                    keyExtractor={(item, idx) => String(item)}
                    renderItem={({item, index}) => {
                        const selected = index === currentIndex;
                        return (
                            <TouchableWithoutFeedback onPress={() => onSelected(index)}>
                                <View
                                    style={[
                                        Styles.itemStyleHorizontal,
                                        selected && Styles.itemSelectedStyleHorizontal
                                    ]}
                                >
                                    <Text
                                        style={{
                                            textAlign: "center",
                                            color: "black",
                                            fontWeight: "normal"
                                        }}
                                    >
                                        {item + ""}
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        );
                    }}
                />
            </View>
        </>
    );
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: "#ecf0f1",
        padding: 8
    },
    paragraph: {
        color: "black",
        textDecorationColor: "yellow",
        textShadowColor: "red",
        textShadowRadius: 1,
        margin: 24,
        marginTop: 10,
    },
    wrapperHorizontal: {
        height: 54,
        justifyContent: "center",
        color: "black",
        marginBottom: 15
    },
    itemStyleHorizontal: {
        marginTop: 10,
        marginRight: 10,
        height: 40,
        width: 125,
        padding: 8,
        borderWidth: 1,
        borderColor: "#E5E5E5",
        borderRadius: 20,
        textAlign: "center",
        justifyContent: "center",
        fontSize: 20,
    },
    itemSelectedStyleHorizontal: {
        borderWidth: 2,
        backgroundColor: "#E5E5E5",
    },
    platformContainer: {
        marginTop: 8,
        borderTopWidth: 1
    },
    platformContainerTitle: {
        marginTop: 8
    },
    title: {
        fontWeight: "700",
        fontSize: 12,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 6,
        marginRight: 12,
    },
});

export default CustomPicker

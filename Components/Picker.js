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
                                            color: selected ? "black" : "grey",
                                            fontWeight: selected ? "bold" : "normal"
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
        margin: 24
    },
    wrapperHorizontal: {
        height: 54,
        justifyContent: "center",
        color: "black",
        marginBottom: 15
    },
    itemStyleHorizontal: {
        marginRight: 10,
        height: 50,
        padding: 8,
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 20,
        textAlign: "center",
        justifyContent: "center"
    },
    itemSelectedStyleHorizontal: {
        borderWidth: 2,
        borderColor: "#DAA520"
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
        marginTop: 30,
        marginBottom: 10,
        marginLeft: 6
    },
});

export default CustomPicker
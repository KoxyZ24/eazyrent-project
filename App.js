//App.js 

import React, {useState} from "react";
import {ScrollView, StatusBar, StyleSheet, SafeAreaView, Text, View} from "react-native";
import CustomPicker from "./Components/Picker";
import TxtInput from "./Components/TxtImput";

const App = () => {
    const [Press, setPress] = useState(0);
    return (
        <SafeAreaView style={Styles.container}>
            <ScrollView>
                <View style={Styles.container}>
                    <Text style={Styles.title}>
                        Informations
                    </Text>
                    <TxtInput
                        label={"Nom"}
                        style={Styles.input}
                    />
                    <TxtInput
                        style={Styles.input}
                        label={"Prénom"}
                    />
                    <CustomPicker
                        label="Situation"
                        data={SituationPicker}
                        currentIndex={Press}
                        onSelected={setPress}
                    />
                    <Text style={Styles.title}>
                        Fichiers à envoyer
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const SituationPicker = [
    "Etudiant",
    "Salarié",
    "Retraité",
    "En Recherche d'emploi",
];

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: "#ecf0f1",
        padding: 8,
    },
    input: {
        marginVertical: 30
    },
    title: {
        fontWeight: "700",
        marginTop: 30,
        marginBottom: 10,
        marginLeft: 6
    },
});

export default App;
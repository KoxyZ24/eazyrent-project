import React, {useState} from "react";
import {ScrollView, StatusBar, StyleSheet, SafeAreaView, Text, View, Button, TouchableOpacity} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CustomPicker from "./Components/Picker";
import CustomTextInput from "./Components/TxtImput";
import CustomNumberInput from "./Components/NumberInput";
import CustomButton from "./Components/CustomButton";

function HomeScreen({ navigation }) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
            <TouchableOpacity
                style={Styles.button}
                onPress={() => navigation.navigate('Information personnelles')}
            >
                <Text>Continue</Text>
            </TouchableOpacity>
        </View>
    );
}

const Formulaire1 = ({ navigation }) => {
    const [Press, setPress] = useState(0);
    return (
        <SafeAreaView style={Styles.container}>
            <ScrollView>
                <View style={Styles.container}>
                    <Text style={Styles.h1}>
                        Formulaire de candidature
                    </Text>
                    <View style={Styles.lineContainer}>
                        <View
                            style={{
                                borderBottomColor: "#E5E5E5",
                                borderBottomWidth: 2,
                                borderRadius: 20,
                                width: 150,
                                alignItems: "center",
                            }}
                        />
                    </View>
                    <Text style={Styles.h2}>
                        Veuillez entrer votre prénom et nom
                    </Text>
                    <CustomTextInput
                        label={"Nom"}
                        style={Styles.input}
                    />
                    <CustomTextInput
                        style={Styles.input}
                        label={"Prénom"}
                    />
                    <Text style={Styles.h2}>
                        Veuillez entrer votre numéro de téléphone
                    </Text>
                    <CustomNumberInput
                        style={Styles.input}
                        label={"Numéro de Téléphone"}
                    />
                    <CustomPicker
                        label="Veuillez sélectionner votre type de profil"
                        data={SituationPicker}
                        currentIndex={Press}
                        onSelected={setPress}
                    />
                    <TouchableOpacity
                        style={Styles.button}
                        onPress={() => navigation.navigate('Choose your documents')}
                    >
                        <Text>etape suivante</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const Formulaire2 = ({ navigation }) => {
    return (
            <TouchableOpacity
                style={Styles.button}
                onPress={() => navigation.navigate('Information personnelles')}
            >
                <Text>Continue</Text>
            </TouchableOpacity>
    )
}

const SituationPicker = [
    "Etudiant",
    "Salarié",
    "Retraité",
    "Intérimaire",
];

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Information personnelles" component={Formulaire1}/>
                <Stack.Screen name="Choose your documents" component={Formulaire2}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}


const Styles = StyleSheet.create({
    lineContainer: {
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10,
    },
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: "#ecf0f1",
        padding: 8,
    },
    input: {
        marginVertical: 30
    },
    h1: {
        fontWeight: "700",
        fontSize: 35,
        marginTop: 0,
        marginBottom: 10,
        marginLeft: 5,
    },
    h2: {
        fontWeight: "700",
        fontSize: 12,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 5,
    },
    button: {
        height: 40,
        margin: 12,
        padding: 10,
        borderRadius: 20,
        backgroundColor: "#E5E5E5",
        alignItems: "center",
    },
});

export default App;

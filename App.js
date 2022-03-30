import React, {useCallback, useState} from "react";
import {
    StatusBar,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ImageBackground, Button
} from "react-native";
import DocumentPicker from 'react-native-document-picker'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CustomPicker from "./Components/Picker";
import CustomTextInput from "./Components/TxtImput";
import CustomNumberInput from "./Components/NumberInput";
import {SafeAreaView} from "react-native-web";

function HomeScreen({navigation}) {
    return (
        <ImageBackground
            source={require('./assets/HomeBackground.png')}
            style={Styles.background}
        >
            <View style={Styles.homeContainer}>
                <TouchableOpacity
                    style={Styles.buttonHome}
                    onPress={() => navigation.navigate('Information personnelles')}
                >
                    <Text style={Styles.h3}>Get started !</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const Formulaire1 = ({navigation}) => {
    const [Press, setPress] = useState(0);
    const [nom, setLastname] = React.useState("");
    const [prenom, setName] = React.useState("");
    const [number, setNumber] = React.useState("");
    const SituationPicker = [
        "Etudiant",
        "Salarié",
        "Retraité",
        "Intérimaire",
    ];
    const onChangeNom = (e) => {
        setLastname(e.target.value)
    }
    const onChangePrenom = (e) => {
        setName(e.target.value)
    }
    const onChangeNumber = (e) => {
        setNumber(e.target.value)
    }
    const changePage = () => {
        console.log(nom, prenom, number, SituationPicker[Press])
        const regex = new RegExp(/(\d{2}){5}/)
        if ((nom !== "") && (prenom !== "") && (number.match(regex))) {
            navigation.navigate('Choose your documents')
            console.log("Done")
        } else {
            console.log("Wrong information")
            console.log(number.match(regex))
        }
    }
    return (
        <View style={Styles.container}>
            <View>
                <View style={Styles.TitleContainer}>
                    <Text style={Styles.h1}>
                        Formulaire de candidature
                    </Text>
                </View>
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
            </View>
            <View style={Styles.inputContainer1}>
                <Text style={Styles.h2}>
                    Veuillez entrer vos informations
                </Text>
                <CustomTextInput
                    style={{color: 'green',}}
                    onChange={onChangeNom}
                    value={nom}
                    label={"Nom"}
                />

                <CustomTextInput
                    onChange={onChangePrenom}
                    value={prenom}
                    label={"Prénom"}
                />
                <CustomNumberInput
                    onChange={onChangeNumber}
                    value={number}
                    label={"Numéro de Téléphone"}
                />
            </View>
            <View style={Styles.pickerContainer}>
                <CustomPicker
                    label="Veuillez sélectionner votre type de profil"
                    data={SituationPicker}
                    currentIndex={Press}
                    onSelected={setPress}
                />
            </View>
            <TouchableOpacity
                style={Styles.button}
                onPress={changePage}
            >
                <Text>etape suivante</Text>
            </TouchableOpacity>
        </View>
    );
}

const Formulaire2 = () => {
    const [file, setFile] = useState("");
    const onChangeFile = (e) => {
        setFile(e.target.value)
    }
    return (
        <input type="file" onChange={onChangeFile} value={file}/>
    );
}

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
    background: {
        width: '100%',
        height: '100%',
    },
    homeContainer: {
        flex: 1,
        justifyContent: "flex-end",
        paddingTop: StatusBar.currentHeight,
        padding: 8,
    },
    buttonHome: {
        height: 40,
        margin: 12,
        borderRadius: 20,
        backgroundColor: "white",
        alignItems: "center",
    },
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        paddingTop: StatusBar.currentHeight,
        backgroundColor: "#ecf0f1",
        padding: 8,
    },
    TitleContainer: {
        margin: 10,
    },
    lineContainer: {
        flex: 0.05,
        alignItems: "center",
        marginBottom: 10,
    },
    inputContainer1: {
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 5,
    },
    inputContainer2: {
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 5,
    },
    pickerContainer: {
        padding: 5,
        flexDirection: "column",
        justifyContent: "space-between",
    },
    h1: {
        fontWeight: "700",
        fontSize: 35,
        marginLeft: 5,
    },
    h2: {
        fontWeight: "700",
        fontSize: 16,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 5,
    },
    h3: {
        paddingTop:10,
        fontWeight: "700",
        fontSize: 16,
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

import React, {useState} from "react";
import {
    StatusBar,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
    TextInput, Alert
} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CustomPicker from "./Components/Picker";

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
    const showAlert = (message) =>
        Alert.alert(
            "Informations incomplètes",
            message,
            [{
                text: "Continue",
                style: "cancel",
            },
            ],
            {
                cancelable: true,
            }
        )
    const [Press, setPress] = useState(0);
    const [lastname, onChangeLastName] = React.useState("");
    const [firstName, onChangeFirstName] = React.useState("");
    const [number, onChangeNumber] = React.useState("");
    const SituationPicker = [
        "Etudiant",
        "Salarié",
        "Retraité",
        "Intérimaire",
    ];
    const changePage = () => {
        const regex = new RegExp(/(\d{2}){5}/)
        if (lastname !== "") {
            if (firstName !== "") {
                if (number.match(regex)) {
                    navigation.navigate('Choose your documents')
                    fetch('https://en0nai8j57zi6j.x.pipedream.net/', {
                            method: 'POST',
                            body: JSON.stringify({
                                name: firstName,
                                lastname: lastname,
                                number: number,
                                situation: SituationPicker[Press]
                            })
                        }
                    )
                } else {
                    showAlert("Veuillez entrer un numéro de téléphone valide")
                }
            } else {
                showAlert("Veuillez entrer votre prénom")
            }
        } else {
            showAlert("Veuillez entrer votre nom")
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
                <TextInput
                    style={Styles.Textinput}
                    onChangeText={text => onChangeLastName(text)}
                    value={lastname}
                    placeholder={"Nom"}
                    autoFocus={true}
                />
                <TextInput
                    style={Styles.Textinput}
                    onChangeText={text => onChangeFirstName(text)}
                    value={firstName}
                    placeholder={"Prénom"}
                />
                <TextInput
                    style={Styles.Textinput}
                    onChangeText={text => onChangeNumber(text)}
                    value={number}
                    placeholder={"Numéro de téléphone"}
                    keyboardType="numeric"
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
                <Text style={{fontWeight: 'bold'}}>Etape suivante</Text>
            </TouchableOpacity>
        </View>
    );
}

const Formulaire2 = () => {
    return (
        <View style={{
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Text>
                Informations send to https://requestbin.com/r/en0nai8j57zi6j/276ecYb9bfO0PfAejjmZmDWUvjY
            </Text>
        </View>
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
        paddingTop: 10,
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
    Textinput: {
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

export default App;

import React, {useState} from "react";
import {ScrollView, StatusBar, StyleSheet, SafeAreaView, Text, View} from "react-native";
import CustomPicker from "./Components/Picker";
import CustomTextInput from "./Components/TxtImput";
import CustomNumberInput from "./Components/NumberInput";
import CustomButton from "./Components/CustomButton";

const App = () => {
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
            <CustomButton
            label="Etape suivante"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
  );

}

const SituationPicker = [
  "Etudiant",
  "Salarié",
  "Retraité",
  "Intérimaire",
];

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
});

export default App;

import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { styles } from "./src/styles";
import { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
export default function App() {
  const [addOneInput, setAddOneInput] = useState("");
  const [listOfSomething, setListOfSomething] = useState([
    ["pc", true],
    ["ps", false],
  ]);
  const addOneMore = () => {
    setListOfSomething([...listOfSomething, [addOneInput, false]]);
    setAddOneInput("");
  };
  const changeBox = (index) => {
    const newList = [...listOfSomething];
    newList[index][1] = !newList[index][1];
    setListOfSomething(newList);
  };
  const changeText = (index, value) => {
    const newList = [...listOfSomething];
    newList[index][0] = value.toLowerCase();
    setListOfSomething(newList);
  };
  const getCorrects = () => {
    const newList = listOfSomething
      .filter((smv) => {
        return smv[1];
      })
      .map((smv, index) => `${index + 1}- ${smv[0]}`.toUpperCase());
    alert("Checked items: \n" + newList.join("\n"));
  };
  const getSomething = () => {
    return listOfSomething.map((smv, index) => {
      return (
        <View style={styles.listTouch} key={index}>
          <TextInput
            style={{ fontSize: 25, fontWeight: "600", width: "85%" }}
            value={smv[0].toUpperCase()}
            onChangeText={(value) => changeText(index, value)}
          ></TextInput>
          {smv[1] ? (
            <Icon.Button
              onPress={() => changeBox(index)}
              name="checkcircleo"
              backgroundColor={"green"}
            ></Icon.Button>
          ) : (
            <Icon.Button
              onPress={() => changeBox(index)}
              name="closecircleo"
              backgroundColor={"red"}
            ></Icon.Button>
          )}
        </View>
      );
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.textInput}
          value={addOneInput.toUpperCase()}
          onChangeText={(value) => setAddOneInput(value.toLowerCase())}
          placeholder="Add new one"
        ></TextInput>
      </View>
      <View style={styles.body}>
        <View style={styles.content}>
          <ScrollView style={{ padding: 10 }}>{getSomething()}</ScrollView>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "blue" }]}
          activeOpacity={0.7}
          onPress={getCorrects}
        >
          <Text style={styles.buttonText}>
            <Icon
              name="totop"
              style={{ fontWeight: "bold", fontSize: 25 }}
            ></Icon>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={addOneMore}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

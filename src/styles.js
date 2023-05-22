import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flex: 3,
    width: "100%",
  },
  body: {
    flex: 16,
    width: "100%",
  },
  footer: {
    flex: 2,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  textInput: {
    fontSize: 25,
    paddingLeft:20,
    width: "100%",
    height: "75%",
    borderColor: "grey",
    borderRadius: 5,
    borderWidth: 2,
    backgroundColor: "white",
    marginTop: 25,
  },
  button: {
    height: 65,
    width: 65,
    borderRadius: 50,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
  },
  content: {
    backgroundColor: "white",
    marginHorizontal:25,
    marginVertical: 55
  },
  listTouch: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    borderBottomColor: "grey",
    borderBottomWidth: 1
  }
});

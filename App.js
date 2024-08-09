import { StyleSheet, Text, View } from "react-native";
import Deck from "./src/Deck";
import { Card, Button } from "@rneui/themed";

const DATA = [
  {
    id: 1,
    text: "Card #1",
    uri: "https://images.pexels.com/photos/3979134/pexels-photo-3979134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    text: "Card #2",
    uri: "https://images.pexels.com/photos/3852204/pexels-photo-3852204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    text: "Card #3",
    uri: "https://images.pexels.com/photos/3973089/pexels-photo-3973089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    text: "Card #4",
    uri: "https://images.pexels.com/photos/3852136/pexels-photo-3852136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 5,
    text: "Card #5",
    uri: "https://images.pexels.com/photos/3852037/pexels-photo-3852037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 6,
    text: "Card #6",
    uri: "https://images.pexels.com/photos/3852204/pexels-photo-3852204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 7,
    text: "Card #7",
    uri: "https://images.pexels.com/photos/3973089/pexels-photo-3973089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 8,
    text: "Card #8",
    uri: "https://images.pexels.com/photos/3852136/pexels-photo-3852136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export default function App() {
  const renderCard = (item) => {
    return (
      <Card key={item?.id}>
        <Card.Image source={{ uri: item?.uri }} />
        <Card.Title style={{ textAlign: "left" }}>{item?.text}</Card.Title>
        <Text style={{ marginBottom: 10 }}>
          I can customise the Card Further.
        </Text>
        <Button
          icon={{ name: "code" }}
          background={{ color: "white" }}
          title={"View Now !"}
        />
      </Card>
    );
  };
  return (
    <View style={styles.container}>
      <Deck
        data={DATA}
        renderCard={renderCard}
        onSwipeLeft={(item) => console.log("item", item)}
        onSwipeRight={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

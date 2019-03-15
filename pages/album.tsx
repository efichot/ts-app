import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Firebase from "../helpers/firebase";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

interface User {
  name: string;
  age: number;
}

class Album extends React.PureComponent {
  state = {
    users: [] as User[]
  };

  componentDidMount = () => {
    Firebase.firestore.collection("users").onSnapshot(snapshot => {
      let users: User[] = [];
      snapshot.forEach(doc => {
        users = [...users, doc.data() as User];
      });
      this.setState({ users });
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello from Album page!</Text>
        {this.state.users.map((user, index) => (
          <Text key={index}>{`${user.name}-${user.age}`}</Text>
        ))}
      </View>
    );
  }
}

export default Album;

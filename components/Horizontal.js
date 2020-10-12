import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";

class Horizontal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        style={styles.container}
      >
        <View style={styles.outer}>
          <Text style={styles.innerText}>Welcome to LCO app</Text>
        </View>
        <View style={[styles.outer, styles.red]}>
          <Text style={styles.innerText}>Best quality videos</Text>
        </View>
        <View style={[styles.outer, styles.green]}>
          <Text style={styles.innerText}>Available on IOs and Android</Text>
        </View>
      </ScrollView>
    );
  }
}

export default Horizontal;

const styles = StyleSheet.create({
  container: {},
  outer: {
    backgroundColor: "#007bb6",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  red: {
    backgroundColor: "#dd4b39",
  },
  green: {
    backgroundColor: "#27ae60",
  },
  innerText: {
    color: "#fff",
    fontSize: 23,
    fontWeight: "bold",
  },
});

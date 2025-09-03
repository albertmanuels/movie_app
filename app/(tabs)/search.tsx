import { Button } from "@react-navigation/elements";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SearchScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>SearchScreen</Text>
      <Link href="/" asChild>
        <Button>Home</Button>
      </Link>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});

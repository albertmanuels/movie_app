import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SavedScreen = () => {
  return (
    <View>
      <Text>SavedScreen</Text>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{ title: "Home", headerShown: false }}
        />
        <Tabs.Screen
          name="search"
          options={{ title: "Search", headerShown: false }}
        />
        <Tabs.Screen
          name="saved"
          options={{ title: "Saved", headerShown: false }}
        />
        <Tabs.Screen
          name="profile"
          options={{ title: "Profile SAVEDD", headerShown: false }}
        />
      </Tabs>
    </View>
  );
};

export default SavedScreen;

const styles = StyleSheet.create({});

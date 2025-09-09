import { icons } from "@/constants/icons";
import React from "react";
import { Image, Text, View } from "react-native";

const SavedScreen = () => {
  return (
    <View className="flex-1 px-10 bg-primary">
      <View className="flex flex-col items-center justify-center flex-1 gap-5">
        <Image source={icons.save} className="size-10" tintColor="#fff" />
        <Text className="text-lg font-bold text-white">Saved</Text>
      </View>
    </View>
  );
};

export default SavedScreen;

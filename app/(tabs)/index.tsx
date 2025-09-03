import { Button } from "@react-navigation/elements";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      className="bg-light-100"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-4xl font-bold text-accent">Movie App</Text>
      <Link href="/search" asChild>
        <Button>Search</Button>
      </Link>
    </View>
  );
}

import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

const WelcomeScreen = () => {
  return (
    <SafeAreaView className="flex flex-1 justify-around bg-white">
      <View className="space-y-2">
        <Text className="text-center font-bold text-gray-700">Voxi</Text>
        <Text className="text-center tracking-wider text-gray-600 font-semibold">
          The Future is here, powered by AI.
        </Text>
      </View>
      <View className="flex-row justify-center">
        <Image
          source={require("../../assets/images/welcome.png")}
          className="w-72 h-72"
        />
      </View>
      <TouchableOpacity className="bg-emerald-600 mx-5 p-4 rounded-2xl">
        <Text className="text-center font-bold text-white text-2xl">
          Get Started
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

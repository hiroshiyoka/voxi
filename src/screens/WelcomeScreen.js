import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const WelcomeScreen = () => {
  return (
    <SafeAreaView className="flex flex-1 justify-around bg-white">
      <View className="space-y-2">
        <Text
          style={{ fontSize: wp(10) }}
          className="text-center font-bold text-gray-700">
          Voxi
        </Text>
        <Text
          style={{ fontSize: wp(4) }}
          className="text-center tracking-wider text-gray-600 font-semibold">
          The Future is here, powered by AI.
        </Text>
      </View>
      <View className="flex-row justify-center">
        <Image
          style={{ width: wp(75), height: hp(75) }}
          source={require("../../assets/images/welcome.png")}
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

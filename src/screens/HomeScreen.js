import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Features from "../components/Features";
import { dummyMessages } from "../constants";

const HomeScreen = () => {
  const [messages, setMessages] = useState(dummyMessages);

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex flex-1 mx-5">
        {/* Bot Icon */}
        <View className="flex-row justify-center">
          <Image
            source={require("../../assets/images/robot.png")}
            style={{ height: hp(15), width: wp(15) }}
          />
        </View>

        {/* Features || Messages */}
        {messages.length > 0 ? (
          <View className="space-y-2 flex-1">
            <Text
              style={{ fontSize: wp(5) }}
              className="text-gray-700 font-semibold ml-1">
              Assistant
            </Text>
            <View
              style={{ height: hp(58) }}
              className="bg-neutral-200 rounded-3xl p-4">
              <ScrollView
                bounces={false}
                className="space-y-4"
                showsVerticalScrollIndicator={false}></ScrollView>
            </View>
          </View>
        ) : (
          <Features />
        )}
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

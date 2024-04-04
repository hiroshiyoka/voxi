import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const HomeScreen = () => {
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
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

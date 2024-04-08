import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Features from "../components/Features";
import { dummyMessages } from "../constants";
import Voice from "@react-native-community/voice";
import { apiCall } from "../api/openAI";

const HomeScreen = () => {
  const [messages, setMessages] = useState(dummyMessages);
  const [recording, setRecording] = useState(false);
  const [speaking, setSpeaking] = useState(true);
  const [result, setResult] = useState("");

  const SpeechStartHandler = e => {
    console.log("Speech Start Handler");
  };

  const SpeechEndHandler = e => {
    setRecording(false);
    console.log("Speech End Handler");
  };

  const SpeechResultsHandler = e => {
    console.log("Voice Event: ", e);
    const text = e.value[0];
    setResult(text);
  };

  const SpeechErrorHandler = e => {
    console.log("Speech Error Handler: ", e);
  };

  const startRecording = async () => {
    setRecording(true);

    try {
      await Voice.start("en-GB"); // en-US
    } catch (error) {
      console.log("Error", error);
    }
  };

  const stopRecording = async () => {
    try {
      await Voice.stop();
      setRecording(false);
      // Fetch Response
      fetchResponse();
    } catch (error) {
      console.log("Error", error);
    }
  };

  const fetchResponse = () => {
    if (result.trim().length > 0) {
      let newMessages = [...messages];
      newMessages.push({ role: "user", content: result.trim() });
      setMessages([...messages]);

      apiCall(result.trim(), newMessages).then(result => {
        console.log(result);
      });
    }
  };

  const clear = () => {
    setMessages([]);
  };

  const stopSpeaking = () => {
    setSpeaking(false);
  };

  useEffect(() => {
    Voice.onSpeechStart = SpeechStartHandler;
    Voice.onSpeechEnd = SpeechEndHandler;
    Voice.onSpeechResults = SpeechResultsHandler;
    Voice.onSpeechError = SpeechErrorHandler;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

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
                showsVerticalScrollIndicator={false}>
                {messages.map((message, index) => {
                  if (message.role == "assistant") {
                    if (message.content.includes(https)) {
                      // AI Image
                      return (
                        <View key={index} className="flex-row justify-start">
                          <View className="p-2 flex rounded-2xl bg-emerald-100 rounded-tl-none">
                            <Image
                              source={{ uri: message.content }}
                              className="rounded-2xl"
                              resizeMode="contain"
                              style={{ height: wp(60), width: wp(60) }}
                            />
                          </View>
                        </View>
                      );
                    } else {
                      // Text Response
                      return (
                        <View
                          key={index}
                          style={{ width: wp(70) }}
                          className="bg-emerald-100 rounded-xl p-2 rounded-tl-none">
                          <Text>{message.content}</Text>
                        </View>
                      );
                    }
                  } else {
                    // User input
                    return (
                      <View key={index} className="flex-row justify-end">
                        <View
                          style={{ width: wp(70) }}
                          className="bg-white rounded-xl p-2 rounded-tr-none">
                          <Text>{message.content}</Text>
                        </View>
                      </View>
                    );
                  }
                })}
              </ScrollView>
            </View>
          </View>
        ) : (
          <Features />
        )}

        {/* Recording, Clear, and Stop Buttons */}
        <View className="flex justify-center items-center">
          {recording ? (
            <TouchableOpacity onPress={stopRecording}>
              {/* Recording Stop */}
              <Image
                className="rounded-full"
                source={require("../../assets/images/recording.gif")}
                style={{ width: hp(10), height: hp(10) }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={startRecording}>
              {/* Recording Start */}
              <Image
                className="rounded-full"
                source={require("../../assets/images/recording-icon.png")}
                style={{ width: hp(10), height: hp(10) }}
              />
            </TouchableOpacity>
          )}

          {messages.length > 0 && (
            <TouchableOpacity
              onPress={clear}
              className="bg-neutral-400 rounded-3xl p-2 absolute right-10">
              <Text className="text-white font-semibold">Clear</Text>
            </TouchableOpacity>
          )}

          {speaking && (
            <TouchableOpacity
              onPress={stopSpeaking}
              className="bg-red-400 rounded-3xl p-2 absolute left-10">
              <Text className="text-white font-semibold">Stop</Text>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

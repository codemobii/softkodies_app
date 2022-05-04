import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  Platform,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Input from "./Input";
import Select from "./Select";
import Button from "./Button";
import Request from "../utils/request";
import { Toast } from "../utils/toast";

export default function UserAccount({ onSetToken }) {
  const [data, setData] = useState({
    email: "",
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    address: "",
    user_type: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (
      !data.email ||
      !data.password ||
      !data.first_name ||
      !data.last_name ||
      !data.phone_number ||
      !data.address ||
      !data.user_type
    ) {
      new Toast().error("Please fill in all the fields");
      return;
    } else {
      setLoading(true);

      //   get username from email address
      const username = data.email.split("@")[0];

      data.username = username;

      const res = await new Request().post("/user/create/", data);

      if (!res.error) {
        setData({
          email: "",
          username: "",
          password: "",
          first_name: "",
          last_name: "",
          phone_number: "",
          address: "",
          user_type: "",
        });

        const res = await new Request().post(
          "/user/token/",
          {
            email: data.email,
            password: data.password,
          },
          "User created successfully"
        );

        if (!res.error) {
          onSetToken(res.data?.token);
        }
      }

      setLoading(false);
    }
  };

  return (
    <KeyboardAwareScrollView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      contentContainerStyle={{ padding: 25, alignItems: "center" }}
    >
      <View style={{ position: "relative", alignItems: "center" }}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1651550477512-aa5184ff98c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
          }}
          style={{ width: 100, height: 100, borderRadius: 100 }}
        />

        <View
          style={{
            width: 28,
            height: 28,
            borderRadius: 100,
            backgroundColor: "#0000ff",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            borderWidth: 2,
            borderColor: "#fff",
            top: 0,
            right: 0,
          }}
        >
          <Ionicons name="camera-outline" size={16} color="#fff" />
        </View>
      </View>

      <Input
        label={"First name"}
        value={data.first_name}
        onChange={(e) => setData({ ...data, first_name: e })}
      />
      <Input
        label={"Last name"}
        value={data.last_name}
        onChange={(e) => setData({ ...data, last_name: e })}
      />
      <Input
        label={"Email address"}
        value={data.email}
        onChange={(e) => setData({ ...data, email: e })}
      />
      <Input
        label={"Phone number"}
        value={data.phone_number}
        onChange={(e) => setData({ ...data, phone_number: e })}
      />
      <Input
        label={"Address"}
        value={data.address}
        onChange={(e) => setData({ ...data, address: e })}
      />
      <Input
        label={"Password"}
        value={data.password}
        onChange={(e) => setData({ ...data, password: e })}
      />
      <Select
        label={"User Type"}
        options={["Admin", "User"]}
        value={data.user_type}
        onChange={(e) => setData({ ...data, user_type: e })}
      />

      <Button onPress={handleSubmit} loading={loading}>
        Continue
      </Button>
    </KeyboardAwareScrollView>
  );
}

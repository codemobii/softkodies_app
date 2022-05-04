import { View, Text, TextInput } from "react-native";
import React from "react";

export default function Input({ onChange, value, label }) {
  return (
    <View style={{ width: "100%", marginTop: 20 }}>
      <Text style={{ fontWeight: "500", fontSize: 16 }}>{label}</Text>

      <TextInput
        style={{
          padding: 15,
          backgroundColor: "#e6e6e6",
          marginTop: 10,
          borderRadius: 6,
        }}
        placeholder={"Enter your " + label}
        onChangeText={onChange}
        value={value}
      />
    </View>
  );
}

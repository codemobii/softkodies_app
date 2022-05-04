import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import React from "react";

export default function Button({ children, onPress, style, loading }) {
  return (
    <TouchableOpacity
      style={[
        {
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
          borderRadius: 100,
          backgroundColor: "#000",
          marginTop: 40,
        },
        style,
      ]}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator color={"#fff"} />
      ) : (
        <Text style={{ fontSize: 16, color: "#fff", fontWeight: "bold" }}>
          {children}
        </Text>
      )}
    </TouchableOpacity>
  );
}

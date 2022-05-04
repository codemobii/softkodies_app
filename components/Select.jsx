import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function Select({ options, onChange, value, label }) {
  return (
    <View style={{ width: "100%", marginTop: 20 }}>
      <Text style={{ fontWeight: "500", fontSize: 16 }}>{label}</Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          marginTop: 10,
        }}
      >
        {options.map((option) => (
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: "#e6e6e6",
              alignItems: "center",
              flexDirection: "row",
              marginRight: 10,
              borderRadius: 6,
            }}
            onPress={() => onChange(option)}
            key={option}
          >
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 100,
                backgroundColor: value === option ? "#0000ff" : "#fff",
                marginRight: 10,
              }}
            />
            <Text style={{ fontSize: 16 }}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

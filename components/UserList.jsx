import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import Request from "../utils/request";
import { Toast } from "../utils/toast";

export default function UserList({ token }) {
  const [DATA, setDATA] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(token);

  const getData = async () => {
    setLoading(true);
    const res = await new Request(token).get("/user/list/");
    if (!res.error) {
      setDATA(res.data);
      console.log(res.data);
      setLoading(false);
    } else {
      new Toast().error("Please create an account first");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return loading ? (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  ) : (
    <FlatList
      contentContainerStyle={{ padding: 25 }}
      data={DATA}
      renderItem={({ item }) => (
        <View
          style={{
            padding: 20,
            backgroundColor: "#000",
            borderRadius: 6,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 12, color: "#fff" }}>{item.username}</Text>
            <Text style={{ fontSize: 16, color: "#fff", fontWeight: "bold" }}>
              {item.first_name} {item.last_name}
            </Text>
          </View>

          <View
            style={{
              padding: 10,
              borderRadius: 100,
              backgroundColor: "rgba(255,255,255,0.2)",
            }}
          >
            <Text style={{ color: "#fff" }}>{item.user_type}</Text>
          </View>
        </View>
      )}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={{ height: 10, backgroundColor: "#fff" }} />
      )}
    />
  );
}

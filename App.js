import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import UserAccount from "./components/UserAccount";
import FlashMessage from "react-native-flash-message";
import UserList from "./components/UserList";

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [token, setToken] = useState("");

  const TABS = ["Users Account", "Users List"];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <FlashMessage position="top" />
      <View style={{ padding: 25, paddingBottom: 0 }}>
        <View style={styles.tabContainer}>
          {TABS.map((tab, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setActiveIndex(index)}
              style={[
                styles.tabButton,
                {
                  backgroundColor:
                    activeIndex === index ? "#000" : "transparent",
                },
              ]}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: activeIndex === index ? "#fff" : "#000",
                }}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {activeIndex === 0 && (
        <UserAccount onSetToken={(token) => setToken(token)} />
      )}

      {activeIndex === 1 && <UserList token={token} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  tabContainer: {
    width: "100%",
    overflow: "hidden",
    backgroundColor: "#e6e6e6",
    borderRadius: 100,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  tabButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    paddingVertical: 20,
  },
});

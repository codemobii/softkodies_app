import { showMessage } from "react-native-flash-message";
import Button from "../components/Button";

export class Toast {
  success(message) {
    showMessage({
      message: message,
      type: "success",
      backgroundColor: "#589C5F",
      // duration: "10000",
      renderCustomContent: () => (
        <Button
          style={{
            marginTop: 20,
            borderRadius: 100,
            backgroundColor: "rgba(255,255,255,0.2)",
          }}
        >
          Dismiss
        </Button>
      ),
    });
  }

  error(message) {
    showMessage({
      message: message,
      type: "error",
      backgroundColor: "#FB3F4A",
      // duration: "10000",
      renderCustomContent: () => (
        <Button
          style={{
            marginTop: 20,
            borderRadius: 100,
            backgroundColor: "rgba(255,255,255,0.2)",
          }}
        >
          Dismiss
        </Button>
      ),
    });
  }
}

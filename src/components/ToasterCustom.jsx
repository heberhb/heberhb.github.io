import { Toaster } from "react-hot-toast";

const ToasterCustom = () => {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={8}
      toastOptions={{
        duration: 4000,
        style: {
          padding: "12px 20px",
          color: "#fff",
          borderRadius: "8px",
          fontWeight: "500",
          fontSize: "14px",
        },
        success: {
          style: {
            background: "#4caf50",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#4caf50",
          },
        },
        error: {
          style: {
            background: "#f44336",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#f44336",
          },
        },
        info: {
          style: {
            background: "#2196f3",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#2196f3",
          },
        },
      }}
    />
  );
};

export default ToasterCustom;

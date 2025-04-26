import { useState, useCallback } from "react";

export default function useSnackbar() {
  const [snackbar, setSnackbar] = useState({
    visible: false,
    message: "",
    type: "success", // or "error"
  });

  const showSnackbar = useCallback((message, type = "success") => {
    setSnackbar({ visible: true, message, type });

    setTimeout(() => {
      setSnackbar((prev) => ({ ...prev, visible: false }));
    }, 3000); // 3 seconds
  }, []);

  const hideSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, visible: false }));
  };

  return {
    ...snackbar,
    showSnackbar,
    hideSnackbar,
  };
}

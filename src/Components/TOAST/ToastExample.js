import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToastExample() {
  const showToastSuccessMessage = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const showToastUnsuccessMessage = () => {
    toast.error("Unsuccess Notification !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const showToastWarningMessage = () => {
    toast.warning("Warning Notification !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const showToastInfoMessage = () => {
    toast.info("Info Notification !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <div>
      <button onClick={showToastSuccessMessage}>Success</button>
      <button onClick={showToastUnsuccessMessage}>Unsuccess</button>
      <button onClick={showToastWarningMessage}>Warning</button>
      <button onClick={showToastInfoMessage}>Info</button>
      <ToastContainer />
    </div>
  );
}

import { useSnackbarContext } from "../../../context/SnackbarContext";
import "./snackbarStyle.css";

export default function Snackbar() {
    const { visible, message, type, hideSnackbar } = useSnackbarContext();

    return (
        <div 
            className={`snackbar snackbar-${type} ${visible ? "slide-in" : "slide-out"}`} 
            onClick={hideSnackbar}
        >
            <p>{message}</p>
        </div>
    );
}

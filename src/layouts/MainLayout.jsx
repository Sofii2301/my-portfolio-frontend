import Navbar from "../components/organisms/Navbar";
import Snackbar from "../components/atoms/Snackbar/Snackbar"
import "./mainLayout.css";
import backgroundImage from "../assets/background_home.png";

export default function MainLayout({ children }) {
  return (
    <div 
        className="layout-container montserrat-regular" 
        style={{ 
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}
    >
        {/* Background with Overlay (for the ENTIRE page) */}
        <div className="background-overlay"></div>

        {/* Navbar */}
        <Navbar />

        {/* Page content */}
        <main className="page-content">{children}</main>

        <Snackbar />
    </div>
  );
}

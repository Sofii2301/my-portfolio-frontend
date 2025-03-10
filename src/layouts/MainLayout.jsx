import Navbar from "../components/organisms/Navbar";
import "../assets/css/mainLayout.css";
import backgroundImage from "../assets/background_home.jpg";

export default function MainLayout({ children }) {
  return (
    <div 
        className="layout-container" 
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
    </div>
  );
}

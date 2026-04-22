import Navbar from "../components/organisms/Navbar/Navbar";
import Snackbar from "../components/atoms/Snackbar/Snackbar"
import Footer from "../components/organisms/Footer/Footer";
import "./mainLayout.css";

export default function MainLayout({ children }) {
    return (
        <div className="layout-container montserrat-regular" >
            {/* Navbar */}
            <Navbar />
              
            {/* Page content */}
            <main className="page-content">{children}</main>

            <Snackbar />

            <Footer />
        </div>
    );
}

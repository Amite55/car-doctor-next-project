
import Footer from "@/components/Shared/Footer";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";
import AuthProvider from "@/services/AuthProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: {
    default: 'Car Doctor',
    template: "%s | Car Doctor "
  },
  description: 'car repairing workshop'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="carDoctorTheme">
      <body>
        <ToastContainer/>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}

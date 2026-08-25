import { Outlet } from "react-router-dom";
import Header from "../../Page/Page/Header";
import Footer from "../../Page/Page/Footer";



export default function MainLayout() {
      return (
            <>
                  <Header />
                  <Outlet />
                  <Footer />
            </>
      )
}
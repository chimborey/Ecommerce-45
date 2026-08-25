import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Router/AppRouter";
import { ToastContainer } from "react-toastify";



export default function App() {
  return (
    <BrowserRouter>
    {/* ======================================= ToastContainer ================================ */}
    <ToastContainer />
    {/* ======================================= AppRouter ================================ */}
      <AppRouter />
    </BrowserRouter>
  )
}
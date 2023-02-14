import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "./index.css";
import App from "./App";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init(5000);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

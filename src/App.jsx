import { lazy } from "solid-js";
import { Routes, Route } from "@solidjs/router"
import Navbar from "./components/Navbar";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

export default function App() {
  return <>
    <Navbar>
    </Navbar>
    <Routes>
      <Route path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
    </Routes>
  </>
}
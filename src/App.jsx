import { lazy } from "solid-js";
import { Routes, Route } from "@solidjs/router"
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

export default function App() {
  return <>
    <h1>My Site with Lots of Pages</h1>
    <Routes>
      <Route path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
    </Routes>
  </>
}
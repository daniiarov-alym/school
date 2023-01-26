import { lazy } from "solid-js";
import { Routes, Route } from "@solidjs/router"
import Navbar from "./components/Navbar";
const Home = lazy(() => import("./pages/Home"));
const Accreditation = lazy(() => import("./pages/Accreditation"));

export default function App() {
  return <div class="h-screen bg-slate-200 dark:bg-slate-200">
    <Navbar>
    </Navbar>
    <Routes>
      <Route path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/accreditation" component={Accreditation} />
    </Routes>
  </div>
}
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/404";
import LinkInBio from "./pages/LinkInBio";
import Layout from "./pages/Layout";
import usePageTracking from "@/hooks/use-page-tracking";

function App() {
  usePageTracking();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/linkinbio" element={<LinkInBio />} />
        {/* 404 ERROR */}
        <Route path="/*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;

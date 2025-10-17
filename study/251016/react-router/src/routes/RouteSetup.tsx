import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import NoMatch from "../pages/NoMatch";

export default function RoutesSetup() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/welcome"
          element={<Home title="Welcome to our site!" />}
        />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

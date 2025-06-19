import {Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "./screens/home/App";
import {Layout} from "./components/Layout";
import {MovieDetails} from "./screens/movie/MovieDetails";

export default function MainRoutes() {
  return (
    <Router>
      <Routes>
        
        <Route element={<Layout/>}>
        <Route path="/" element={<App />} />

        <Route path="/movie/:id" element={<MovieDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

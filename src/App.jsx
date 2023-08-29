import Home from "./modules/home/home";
import Tashxis from "./modules/tashxis/tashxis";
import { Routes, Route } from "react-router-dom";
import PostTashxis from "./modules/post/post_tashxis";
import Admin from "./modules/admin/admin";


function App() {
  return (
    <>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tashxis" element={<Tashxis />} />
        <Route path="/post" element={<PostTashxis />} />
        <Route path="/login" element={<Admin />} />
      </Routes>
    </div>
    </>
  );
}

export default App;

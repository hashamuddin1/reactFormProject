import Blog from "./components/Blog";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Paginate from "./components/Paginate";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Form />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/paginate" element={<Paginate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { Homeview } from "./view/home";
import { NotFound } from "./view/NotFound";
import { Route, Routes } from "react-router-dom";
import { ClassesView } from "./view/Class";
import {  } from "./view/classDetail";

function App() {
  return(
    <Routes>
      <Route path="/" element={<Homeview/>} />
      <Route path="*" element={<NotFound/>} />
      <Route path="/turmas" element={<ClassesView/>} />
      <Route path="/turmas/:id" element={<ClassDetails/>} />
    </Routes>
  ) 
}
export default App;

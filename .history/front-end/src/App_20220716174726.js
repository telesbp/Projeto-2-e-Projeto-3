import { Homeview } from "./view/home";
import { NotFound } from "./view/NotFound";
import { Route, Routes } from "react-router-dom";
import { ClassesView } from "./view/Class";
import { ClassDetails } from "./view/classDetail";

function App() {
  return(
    <Routes>
      <Route path="/" element={<Homeview/>} />
      <Route path="*" element={<NotFound/>} />
      <Route path="/turma" element={<ClassesView/>} />
      <Route path="/turma/:id" element={<ClassDetails/>} />
    </Routes>
  ) 
}
export default App;

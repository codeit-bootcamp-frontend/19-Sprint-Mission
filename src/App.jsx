import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path={"/items"} element={<Items />} />
        <Route path={"/additem"} element={<AddItem />} />
      </Routes>
    </div>
  );
}

export default App;

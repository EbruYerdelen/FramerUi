import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import ScheduleCall from "./Components/ScheduleCall";
import WebflowProfile from "./Components/WebflowProfile";

function App() {
  return (
    <>
      <main className="font-Inter box-border">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/schedule-call" element={<ScheduleCall />} />
          <Route path="/webflow-profile" element={<WebflowProfile />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

/*
import  Table  from "./Components/Table";

function generateData(count:number) {
  return Array.from({ length: count }, (_, index) => ({
    col1: `Data ${index + 1}`,
    col2: `Value ${index + 1}`,
    col3: `Item ${index + 1}`,
  }));
}

const App = () => {
  const data = generateData(100);

  return (
    <div className="m-6">
      <Table data={data} />
    </div>
  );
};


*/

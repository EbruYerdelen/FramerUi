import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";
import Home from "./Components/Home";
import ScheduleCall from "./Components/ScheduleCall";
import WebflowProfile from "./Components/WebflowProfile";

function App() {
  const location = useLocation();

  return (
    <main className="font-Inter box-border">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            index
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Home />
              </motion.div>
            }
          />
          <Route
            path="/schedule-call"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ScheduleCall />
              </motion.div>
            }
          />
          <Route
            path="/webflow-profile"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <WebflowProfile />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </main>
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

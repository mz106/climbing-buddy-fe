import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';

import Header from "./components/UI/header/Header";

import LandingPage from "./pages/landingPage/LandingPage";

function App() {

  const [ testState, setTestState ] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}test`);
      const data = await response.json();
      await setTestState(data.message);
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  
  return (
    <div>
    <Header />
      <p>The following message is coming from the backend: "{testState}"</p>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;

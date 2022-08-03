import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';

import Header from "./components/UI/header/Header";
import Footer from "./components/UI/footer/Footer";

import LandingPage from "./pages/landingPage/LandingPage";
import FriendSwipe from "./pages/friendSwipe/FriendSwipe";

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
     
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/friendSwipe" element={<FriendSwipe />} />
      </Routes>
      <Footer />
      <p>The following message is coming from the backend: "{testState}"</p>
    </div>
  );
}

export default App;

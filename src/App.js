import { useEffect, useState } from "react";

function App() {

  const [ testState, setTestState ] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/test`);
      const data = await response.json();
      setTestState(data.message);
      console.log(testState)
    })();
  },[]);

  return (
    <div>
      <p>The following message is coming from the backend: "{testState}"</p>
    </div>
  );
}

export default App;

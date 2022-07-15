import { useEffect, useState } from "react";

function App() {

  const [ testState, setTestState ] = useState("");

  useEffect(() => {
    (async () => {
      console.log("hello from useEffect")
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/test`);
      console.log(response)
      const data = await response.json();
      await setTestState(data.message);
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  
  return (
    <div>
      <p>The following message is coming from the backend: "{testState}"</p>
    </div>
  );
}

export default App;

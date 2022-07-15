import { useEffect } from "react";

function App() {

  useEffect(() => {
    (async () => {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}`);
      console.log(response)
      const data = await response.json();
      console.log(data);
    })();
  },[]);

  return (
    <div>
      <p>Hello world</p>
    </div>
  );
}

export default App;

import { useState } from "react";
import Parent1 from "./component/Parent1.jsx";

function App() {
  const [nama] = useState("Pojok Code");

  return <Parent1 nama={nama} />;
}

export default App;

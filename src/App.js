import "./App.css";
import Navbar from "./componants/navbar";
import Textform from "./componants/text";

function App() {
  return (
    <>
      <Navbar logo="text" title="hello" />
      <div className="container my-3">
        <Textform heading="Enter a text to analyze below" />
      </div>
    </>
  );
}

export default App;

import reactLogo from "./assets/react.svg";
import "./btn.css";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>pwa notification demo</h1>
      <button className="button button-royal button-rounded button-giant button-large">
        推送消息
      </button>
    </>
  );
}

export default App;

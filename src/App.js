import Input from "./components/Input/Input";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <Input placeHolder={"username"} type={"text"} />
      <Input placeHolder={"password"} type={"password"} />
      <Button text={"login"} />
    </div>
  );
}

export default App;

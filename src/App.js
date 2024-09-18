import "./App.css";
import Form from "./Form";
import ContextProvider from "./context/ContextProvider";
function App() {
  return (
    <ContextProvider>
      <Form />
    </ContextProvider>
  );
}

export default App;

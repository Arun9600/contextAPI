import "./App.css";
import Form from "./Form";
import { UserContextProvider } from "./context/userContext";
function App() {
  return (
    <UserContextProvider>
      <Form />
    </UserContextProvider>
  );
}

export default App;

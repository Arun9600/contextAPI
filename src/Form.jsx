import { useState, useContext } from "react";
import userContext from "./context/userContext";
const Form = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(userContext);
  const handleClick = (e) => {
    e.preventDefault();
    setUser({ name, password });
  };
  return (
    <>
      <div className="form">
        <form autoComplete="off">
          <div>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <input type="submit" onClick={handleClick} />
          </div>
        </form>
        {user && user.name}
      </div>
    </>
  );
};

export default Form;

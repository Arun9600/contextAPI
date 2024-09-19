import { useContext, useState } from "react";
import { UserContext } from "./context/userContext";
const Form = () => {
  const { name, setName, password, setPassword } = useContext(UserContext);
  const [userName, setUserName] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    setUserName(name);
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
          {userName ? <p>Your Username is {userName}</p> : ""}
        </form>
      </div>
    </>
  );
};

export default Form;

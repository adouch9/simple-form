import "./App.css";
import { useState } from "react";
import Title from "./components/Title";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = (event) => {
    // J'empêche  le rafraichissement
    event.preventDefault();
    if (password !== confirm) {
      alert(`Les mot de passe sont différent `);
    }
  };

  const handleClick = () => {
    if (password !== confirm) {
      alert(`Les mot de passe sont différent `);
    }
  };

  return (
    <div className="App container">
      <Title />
      <form onSubmit={handleSubmit}>
        <span>Name</span>
        <input
          onChange={(event) => {
            setName(event.target.value);
          }}
          type="text"
          placeholder="Nom"
          value={name}
        ></input>
        <span>Email</span>
        <input
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          type="email"
          placeholder="mail@mail.com"
          value={email}
          name="email"
        ></input>
        <span>Password</span>
        <input
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          type="password"
          placeholder="azerty"
        ></input>
        <span>Confirm your password</span>
        <input
          onChange={(event) => {
            setConfirm(event.target.value);
          }}
          type="password"
          placeholder="azerty"
        ></input>
        <input
          onClick={() => {
            handleClick("Cliqué !");
          }}
          type="submit"
        ></input>
      </form>
      
      <div>{email}</div>
      <div>{name}</div>
      <div>{password}</div>
      <div>{confirm}</div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.jsx";
import "./App.css";
import Input from "./Components/Input/input";
import Button from "./Components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer} from "react-toastify";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();

    formData.set("email", email);
    formData.set("password", password);

    const response = await axios.post(
      "http://127.0.0.1:8000/api/v1.0.0/login",
      formData
    );

    if (response.data.success) {
      toast.success(response.data.message);
      setIsLoading(false);
      setTimeout(function () {
        navigate("/dashboard");
      }, 3000);
    } else {
      console.log(response.data);
      toast.error(response.data.message);
      setIsLoading(false);
    }
  };

  return (
    <div id="container" >
      <ToastContainer />
      <h1>Connexion</h1>
      <form onSubmit={handleSubmit}>
        <p>Renseignez vos information de connexion pour vous connectez</p>
        <Input
          label={"Email"}
          reference={"email"}
          type={"email"}
          value={email}
          placeholder={"Saisir l'adresse e-mail ici"}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <div>{email}</div>

        <Input
          label={"Mot de passe"}
          reference={"password"}
          type={"password"}
          value={password}
          placeholder={"Saisir le mod de passe ici"}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div>{password}</div>

        <div>
          <Button
            disabled={isLoading}
            type={"submit"}
            text={isLoading ? "Chargement ..." : "Soumettre"}
          />
          <Button type={"reset"} text={"Annuler"} />
        </div>
        <div>
          <Link to={"/registration"}>Inscription</Link>
        </div>
      </form>
    </div>
  );
}

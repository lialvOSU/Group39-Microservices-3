import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Login({setUser}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

          
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({username, password})
      });

      const data = await res.json();

      if (res.ok) {
        alert("Welcome back, " + username + "!");
        setUser(username);

        navigate("/testpage")

      } else {
        alert("Invalid username or password");
      }
    } catch (err) {
        alert("Error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <h1>Login</h1>
      
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>

      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>

      <button type="submit">Login</button>

    </form>
  );
}

export default Login;
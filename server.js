import express from "express";
import cors from "cors";
import {users} from "./test.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Login Microservice
//
// Function: Use POST API to send a JSON object in the form of user entered data on a webpage. Verifies the data sent to the server from a database with 
//           usernames and passwords saved. 
//
// Result: If user does not enter a username or password, return "Please enter your username and password" message. If user entered data but is incorrect,
//         return "Invalid username or password" message. Else, return "Welcome back username"
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Please enter your username and password." });
  }

  const user = users[username];
  if (!user|| user.password !== password) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  res.json({ message: "Login successful"});
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
})

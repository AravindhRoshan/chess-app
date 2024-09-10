import { Button, Card, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const LoginPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleFormSubmit = () => {
    console.log("came in form");
    console.log("have a good day ");
  };

  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('../../../public/assets/loginBackground.png')]  h-screen w-screen" />
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <Card className="h-auto bg-slate-500 z-20 py-10 px-20 flex flex-col gap-5 min-w-[600px]">
        <Typography variant="h3" fontWeight={"600"}>
          Sign In
        </Typography>
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <Button
          sx={{
            backgroundColor: "#42922C",
            height: "60px",
            fontSize: "20px",
            fontFamily: "inherit",
            fontWeight: "700",
          }}
          variant="contained"
        >
          Sign In
        </Button>
      </Card>
    </div>
  );
};

export default LoginPage;

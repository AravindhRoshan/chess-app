import React, { useState } from "react";
import "./LoginPage.css";
import bgImage from "../../assets/chessBg.jpg"; // Import your local background image
import { useNavigate } from "react-router-dom";

const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  // State for login form
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // State for signup form
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // State for form validation errors
  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  });

  // Email regex pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Password regex pattern (at least 8 characters, 1 uppercase, 1 lowercase, 1 number, and 1 special character)
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  // Toggle between login and sign up forms
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setErrors({ emailError: "", passwordError: "", confirmPasswordError: "" }); // Reset errors when toggling forms
  };

  // Handle login input change
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle signup input change
  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validate and handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;

    // Reset errors before validating
    setErrors({ emailError: "", passwordError: "", confirmPasswordError: "" });

    // Email validation (for both login and signup forms)
    if (!emailPattern.test(isLogin ? loginData.email : signupData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        emailError: "Please enter a valid email address",
      }));
      valid = false;
    }

    // Password validation (for signup only)
    if (!isLogin) {
      if (!passwordPattern.test(signupData.password)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          passwordError:
            "Password must be at least 8 characters long, contain an uppercase letter, a number, and a special character.",
        }));
        valid = false;
      }

      // Check if password and confirmPassword match
      if (signupData.password !== signupData.confirmPassword) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          confirmPasswordError: "Passwords do not match",
        }));
        valid = false;
      }
    }

    if (valid) {
      if (!isLogin) {
        const APICall = async () => {
          try {
            const response = await fetch("http://localhost:8000/signup", {
              method: "POST",
              headers: {
                "Content-Type": "application/json", // Specify that we're sending JSON data
              },
              body: JSON.stringify(signupData), // Convert signupData object to a JSON string
            });

            const resultFromApi = await response.json(); // Parse the JSON response
            console.log("resultFromApi", resultFromApi); // Log the result
            onLogin(); // Call the onLogin prop to update authentication status
            navigate("/"); // Navigate to the landing page after successful login
          } catch (error) {
            console.error("Error making API call:", error);
          }
        };

        APICall();

        console.log("Signup Data:", signupData);
      } else {
        const APICall = async () => {
          try {
            const response = await fetch("http://localhost:8000/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json", // Specify that we're sending JSON data
              },
              body: JSON.stringify(loginData), // Convert signupData object to a JSON string
            });

            const resultFromApi = await response.json(); // Parse the JSON response
            console.log("resultFromApi", resultFromApi); // Log the result
            if (resultFromApi == "Sucess") {
              onLogin(); // Call the onLogin prop to update authentication status
              navigate("/"); // Navigate to the landing page after successful login
            } else {
              alert(resultFromApi);
            }
          } catch (error) {
            console.error("Error making API call:", error);
          }
        };

        APICall();
        console.log("Login Data:", loginData);
      }
    }
  };

  return (
    <div
      className="auth-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="auth-form-wrapper">
        <div className="form-box">
          {isLogin ? (
            <form className="login-form" onSubmit={handleSubmit}>
              <h2>Login</h2>
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  required
                />
                {errors.emailError && (
                  <p className="error">{errors.emailError}</p>
                )}
              </div>
              <div className="input-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  required
                />
              </div>
              <button type="submit" className="submit-btn">
                Login
              </button>
              <p className="toggle-text">
                New to us? <span onClick={toggleForm}>Sign up now</span>.
              </p>
            </form>
          ) : (
            <form className="signup-form" onSubmit={handleSubmit}>
              <h2>Sign Up</h2>
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={signupData.name}
                  onChange={handleSignupChange}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={signupData.email}
                  onChange={handleSignupChange}
                  required
                />
                {errors.emailError && (
                  <p className="error">{errors.emailError}</p>
                )}
              </div>
              <div className="input-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={signupData.password}
                  onChange={handleSignupChange}
                  required
                />
                {errors.passwordError && (
                  <p className="error">{errors.passwordError}</p>
                )}
              </div>
              <div className="input-group">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={signupData.confirmPassword}
                  onChange={handleSignupChange}
                  required
                />
                {errors.confirmPasswordError && (
                  <p className="error">{errors.confirmPasswordError}</p>
                )}
              </div>
              <button type="submit" className="submit-btn">
                Sign Up
              </button>
              <p className="toggle-text">
                Already have an account?{" "}
                <span onClick={toggleForm}>Login here</span>.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

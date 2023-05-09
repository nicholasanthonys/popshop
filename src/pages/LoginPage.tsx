import React, { FC, useState } from "react";
import InputField from "../elements/InputField";
import CustomButton from "../elements/CustomButton";
import logo from "../assets/images/logo.png";
import facebook from "../assets/images/facebook.png";
import apple from "../assets/images/apple.png";
import google from "../assets/images/google.png";
import Cookie from "js-cookie";
import { useNavigate } from "react-router-dom";
import loginImage from "../assets/images/login.png";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState<string | null>();
  const [passwordError, setPasswordError] = useState<string | null>();
  const navigate = useNavigate();

  const validateEmail = (email: string): string | null => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return "Invalid email format";
    }
    return null;
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    const error = validateEmail(event.target.value);
    if (error) {
      setEmailError(error);
      return;
    }
    setEmailError(null);
  };

  const validatePassword = (password: string): string | null => {
    const lowerRegex = /[a-z]/;
    const upperRegex = /[A-Z]/;
    const digitRegex = /[0-9]/;
    const specialRegex = /[^A-Za-z0-9]/;

    if (password.length < 8) {
      return "Password must contain at least 8 characters";
    }
    if (!lowerRegex.test(password)) {
      return "Password must contain at least one lowercase character";
    }
    if (!upperRegex.test(password)) {
      return "Password must contain at least one uppercase character";
    }
    if (!digitRegex.test(password)) {
      return "Password must contain at least one digit character";
    }
    if (!specialRegex.test(password)) {
      return "Password must contain at least one special character";
    }
    return null;
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    const error = validatePassword(event.target.value);
    if (error) {
      setPasswordError(error);
      return;
    }
    setPasswordError(null);
  };

  const isButtonDisabled = function (): boolean {
    if (emailError || passwordError || !email || !password) {
      return true;
    }
    return false;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // simulate login validation
    if (email.length == 0) {
      setEmailError("Email Required");
      return;
    }

    if (password.length == 0) {
      setPasswordError("Password required");
      return;
    }
    if (!emailError && !passwordError) {
      Cookie.set("isLoggedIn", "true");
      return navigate("/dashboard");
    }
    return navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white h-full">
      <div className="pt-[18px] pl-[26px] pr-[27px] pb-18px ">
        <img
          src={logo}
          className="object-contain w-157px h-51px mb-14 sm:mb-20"
        />

        <div className="sm:grid sm:grid-cols-2 sm:gap-60  sm:px-20 lg:px-32">
          <div className="hidden sm:block sm:w-[400px] lg:w-[473px] pt-16">
            <img src={loginImage} className="login image" />

            <div className="flex justify-center items-center gap-2 mt-20">
              <div className="rounded-md bg-[#2F68FF] w-12 h-2"></div>
              <div className="rounded-full bg-[#B5B5B5] w-2 h-2"></div>
              <div className="rounded-full bg-[#B5B5B5] w-2 h-2"></div>
              <div className="rounded-full bg-[#B5B5B5] w-2 h-2"></div>
            </div>
          </div>
          <div className="sm:cols-span-1">
            <h3 className="hidden sm:block font-semibold text-[26px] leading-[39px]">
              {" "}
              Sign In{" "}
            </h3>

            <h3 className="font-semibold text-[26px] leading-[39px] sm:hidden">
              {" "}
              Sign in to
            </h3>
            <h4 className="font-medium text-[21px] leading-[32px] sm:hidden">
              Lorem Ipsum is simply{" "}
            </h4>
            <br />
            <br />

            <InputField
              placeholder="Email"
              value={email}
              error={emailError}
              onChange={handleChangeEmail}
              className="h-[62px]"
            />
            <br />
            <InputField
              placeholder="Password"
              value={password}
              error={passwordError}
              onChange={handleChangePassword}
              className="h-[62px]"
              isPassword
            />
            <br />
            <p className="text-right text-[#B0B0B0]">Forgot password ?</p>
            <br />
            <br />

            <CustomButton className="h-[59px]" type="submit">
              Login
            </CustomButton>
            <br />
            <br />
            <p className="text-center text-[#B0B0B0]"> or continue with</p>
            <br />
            <div className="flex justify-center">
              <img src={facebook} className="mr-6" />
              <img src={apple} className="mr-6" />
              <img src={google} />
            </div>
            <br />
            <br />
            <p className="font-medium text-base text-center">
              You Don’t Have Account?{" "}
              <span className="underline text-[#3e76ff]">Register Here</span>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}

export default LoginPage;

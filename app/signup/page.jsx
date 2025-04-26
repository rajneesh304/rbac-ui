"use client";
import Link from "next/link";
import React, { useState } from "react";

const page = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verifypass, setVerifypass] = useState("");
  const [email, setEmail] = useState("");

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const cancelHandler = (event) => {
    setUsername("");
    setPassword("");
    setVerifypass("");
    setEmail("");
    document.getElementById("loginError").style.display = "none";
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const verifypassHandler = (event) => {
    setVerifypass(event.target.value);
    if (password !== event.target.value) {
      document.getElementById("loginError").style.display = "none";
      document.getElementById("passwordMatchError").style.display = "block";
    } else {
      document.getElementById("passwordMatchError").style.display = "none";
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    document.getElementById("loginError").style.display = "block";
  };

  return (
    <div
      className="flex 
      px-[10%]
      md:px-[20%]
      justify-evenly 
      md:flex-col
      lg:flex-row
      py-20

    "
    >
      <div className="p-10 flex-6 text-primary-a0 hidden md:flex">
        MONSTER.INC
      </div>
      <div className="flex flex-col space-y-5 flex-6 rounded-2xl shadow-2xl p-10 dark:bg-surface-a60">
        <form method="POST">
          <input
            name="email"
            id="email"
            type="text"
            placeholder="email"
            value={email}
            onChange={emailHandler}
          />

          <input
            name="username"
            id="username"
            type="text"
            placeholder="username"
            value={username}
            onChange={usernameHandler}
          />

          <input
            name="password"
            id="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={passwordHandler}
          />
          <input
            name="verifypass"
            id="verifypass"
            type="password"
            placeholder="verify password"
            value={verifypass}
            onChange={verifypassHandler}
          />

          <div className="hidden text-red-700" id="loginError">
            Please verify all fields!
          </div>
          <div className="hidden text-red-700" id="passwordMatchError">
            Password and verify password do not match!
          </div>
          <div className="w-full flex justify-between space-x-5 flex-col space-y-5 sm:flex-row sm:space-y-0">
            <button
              className="bg-red-400 hover:bg-red-500"
              type="reset"
              onClick={cancelHandler}
            >
              CANCEL
            </button>
            <button
              className="bg-primary-a30 hover:bg-primary-a20"
              type="submit"
              onClick={submitHandler}
            >
              SUBMIT
            </button>
          </div>
        </form>
        <div className="items-center justify-center">
          Already have an account? <Link href="/login"> Log in!</Link>
        </div>
      </div>
    </div>
  );
};

export default page;

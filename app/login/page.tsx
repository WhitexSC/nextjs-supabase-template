"use client";

import { login, signup } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Login() {
  return (
    <form className="flex flex-col items-center">
      <label htmlFor="email" className="mb-1">
        Email:
      </label>
      <Input
        id="email"
        name="email"
        type="email"
        required
        className="mb-2"
        maxWidth={"lg"}
      />
      <label htmlFor="password" className="mb-1">
        Password:
      </label>
      <Input
        id="password"
        name="password"
        type="password"
        required
        className="mb-8"
        maxWidth={"lg"}
      />

      {/* <div className="flex flex-col mt-4 w-[80%] "> */}
      <Button size={"sm"} formAction={login} className="mb-2">
        Log in
      </Button>
      <Button formAction={signup} className="">
        Sign up
      </Button>
      {/* </div> */}
    </form>
  );
}

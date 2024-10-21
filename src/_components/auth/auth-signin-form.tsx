"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/ui-input";
import { Button } from "../ui/ui-button";

export const SigninForm = () => {
  const router = useRouter();
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const handleEnterButton = () => {
    router.replace("/main");
  };

  return (
    <>
      <Input
        placeholder="digite seu email"
        value={emailField}
        onChange={(t) => setEmailField(t)}
      />

      <Input
        placeholder="sua senha"
        value={passwordField}
        onChange={(t) => setPasswordField(t)}
        password
      />

      <Button size="g" label="Entrar" onClick={handleEnterButton} />
    </>
  );
};

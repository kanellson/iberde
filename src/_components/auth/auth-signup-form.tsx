"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/ui-input";
import { Button } from "../ui/ui-button";

export const SignupForm = () => {
  const router = useRouter();
  const [nameField, setNameField] = useState("");
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const handleEnterButton = () => {
    router.replace("/signin");
  };

  return (
    <>
      <Input
        placeholder="digite seu nome"
        value={nameField}
        onChange={(t) => setNameField(t)}
      />

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

      <Button size="g" label="Criar conta" onClick={handleEnterButton} />
    </>
  );
};

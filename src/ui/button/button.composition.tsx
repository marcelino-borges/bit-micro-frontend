import React from "react";
import { Button } from "./button";

export const BasicButton = () => <Button text="Hello from Button" />;

export const PrimaryButton = () => (
  <Button text="Hello from Primary Button" importance="primary" />
);

export const SecondaryButton = () => (
  <Button text="Hello from Secondary Button" importance="secondary" />
);

import React from "react";
import { Card } from "./card";

export const BasicCard = () => (
  <Card buttonText="CLICK, MTF!" text="Hello from Card" />
);

export const PrimaryCard = () => (
  <Card buttonText="CLICK, MTF!" text="Hello from Card" importance="primary" />
);

export const SecondaryCard = () => (
  <Card
    buttonText="CLICK, MTF!"
    text="Hello from Card"
    importance="secondary"
  />
);

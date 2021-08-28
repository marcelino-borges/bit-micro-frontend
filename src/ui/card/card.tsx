import React from "react";
import styles from "./card.module.scss";
import { Button, ButtonProps } from "@marcelino-borges/mfe-test.ui.button";

export type CardProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string;
  buttonText: string;
} & ButtonProps;

export function Card({ text, buttonText = "LABEL", importance }: CardProps) {
  return (
    <div className={styles.card}>
      <h2>{text}</h2>
      <Button text={buttonText} importance={importance} />
    </div>
  );
}

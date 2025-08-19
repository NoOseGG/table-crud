import React from "react";

import styles from "./custom-button.module.css";

interface Props {
  text: string;
}

export const CustomButton: React.FC<Props> = ({ text }) => {
  return <button className={styles.button}>{text}</button>;
};

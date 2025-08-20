import React from "react";

import styles from "./custom-button.module.css";

interface Props {
  text: string;
  onClick: () => void;
}

export const CustomButton: React.FC<Props> = ({ text, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ModalProps } from "./types";
import clear from "../../../content/icons/clear.png";
import styles from "./styles.module.scss";

export const Modal = ({ showModal, setShowModal, children }: ModalProps) => {
  const nodeRef = React.useRef(null);

  if (!showModal) return null;

  return ReactDOM.createPortal(
    <div ref={nodeRef} className={styles.wrapper}>
      <div className={styles.content}>
        {children}
        <button
          className={styles.btn}
          onClick={() => setShowModal((showModal: any) => !showModal)}
        >
          <img src={clear} alt={clear} />
        </button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

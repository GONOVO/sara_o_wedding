"use client";
import React from "react";
import SharedForm from "../sharedform/SharedForm";
import styles from "./destinationmodal.module.css";

interface DestinationModalProps {
  isOpen: boolean;
  onClose: () => void;
  destinationName: string;
}

function DestinationModal({
  isOpen,
  onClose,
  destinationName,
}: DestinationModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>
            Reserve Your Event in {destinationName}
          </h2>
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
        </div>

        <SharedForm
          title=""
          subtitle=""
          eventTypeDisabled={true}
          defaultEventType="Destination"
          destinationName={destinationName}
          className={styles.modalForm}
        />
      </div>
    </div>
  );
}

export default DestinationModal;

"use client";
import React, { useState, useEffect } from "react";
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
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);

  // Handle body overflow when modal is open
  useEffect(() => {
    if (isOpen) {
      // Store original overflow values
      const originalBodyOverflow = document.body.style.overflow;
      const originalDocumentOverflow = document.documentElement.style.overflow;

      // Set overflow hidden
      document.body.style.overflow = "hidden";
      document.body.style.overflowY = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.overflowY = "hidden";

      // Cleanup function to restore original overflow
      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.body.style.overflowY = originalBodyOverflow;
        document.documentElement.style.overflow = originalDocumentOverflow;
        document.documentElement.style.overflowY = originalDocumentOverflow;
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = () => {
    if (!isFormSubmitting) {
      onClose();
    }
  };

  const handleCloseClick = () => {
    if (!isFormSubmitting) {
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>
            Reserve Your Event in {destinationName}
          </h2>
          <button
            className={styles.closeButton}
            onClick={handleCloseClick}
            disabled={isFormSubmitting}
            style={{
              opacity: isFormSubmitting ? 0.5 : 1,
              cursor: isFormSubmitting ? "not-allowed" : "pointer",
            }}
          >
            ×
          </button>
        </div>

        <SharedForm
          title=""
          subtitle=""
          eventTypeDisabled={false}
          destinationName={destinationName}
          className={styles.modalForm}
          onFormStateChange={setIsFormSubmitting}
        />
      </div>
    </div>
  );
}

export default DestinationModal;

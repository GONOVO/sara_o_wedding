"use client";
import React, { useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import styles from "./sharedform.module.css";

const EVENT_TYPES = [
  "Wedding",
  "Corporate",
  "Milestone Birthday",
  "Destination",
  "Entertainment",
  "Party",
  "Other",
] as const;

interface SharedFormProps {
  title?: string;
  subtitle?: string;
  eventTypeDisabled?: boolean;
  defaultEventType?: string;
  destinationName?: string;
  className?: string;
  onFormStateChange?: (isSubmitting: boolean) => void;
}

function SharedForm({
  title = "Reserve Your Event with Us Here",
  subtitle = "Our friendly team would love to hear from you.",
  eventTypeDisabled = false,
  defaultEventType = "",
  destinationName = "",
  className = "",
  onFormStateChange,
}: SharedFormProps) {
  // Set default event type based on whether it's a destination booking
  const eventType = destinationName
    ? "Destination"
    : defaultEventType || "Wedding";
  const formDataRef = useRef<HTMLFormElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [form, setForm] = useState({
    client_name: "",
    event_type: eventType,
    other_event_type: "",
    event_date: "",
    event_venue: "",
    guest_size: "",
    inspiration_link: "",
    phone: "",
    email: "",
    additional_info: "",
    destination: destinationName,
    attachment: null as File | null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [fileError, setFileError] = useState("");

  // Notify parent component about form submission state only
  React.useEffect(() => {
    if (onFormStateChange) {
      onFormStateChange(isSubmitting);
    }
  }, [isSubmitting, onFormStateChange]);

  // Prevent page navigation during form submission only
  React.useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isSubmitting) {
        e.preventDefault();
        e.returnValue =
          "Your form is being submitted. Are you sure you want to leave?";
        return "Your form is being submitted. Are you sure you want to leave?";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isSubmitting]);

  // Get tomorrow's date for minimum date validation
  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const target = e.target;
    setForm({ ...form, [target.name]: target.value });
  };

  const handlePhoneChange = (value: string) => {
    setForm({ ...form, phone: value });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFileError("");

    if (file) {
      // Validate file size (15MB = 15 * 1024 * 1024 bytes)
      const maxSize = 15 * 1024 * 1024; // 15MB
      if (file.size > maxSize) {
        setFileError(
          `File size must be less than 15MB. Your file is ${(
            file.size /
            (1024 * 1024)
          ).toFixed(1)}MB`
        );
        e.target.value = ""; // Clear the input
        return;
      }

      // Validate file type
      const allowedTypes = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/gif",
        "image/webp",
        "application/pdf",
      ];
      if (!allowedTypes.includes(file.type)) {
        setFileError(
          "Only images (JPG, PNG, GIF, WebP) and PDF files are allowed"
        );
        e.target.value = ""; // Clear the input
        return;
      }

      setIsUploading(true);
      setUploadProgress(0);

      // Simulate upload progress
      for (let progress = 0; progress <= 100; progress += 10) {
        await new Promise((resolve) => setTimeout(resolve, 100));
        setUploadProgress(progress);
      }

      setForm({ ...form, attachment: file });
      setIsUploading(false);
    } else {
      setForm({ ...form, attachment: null });
      setUploadProgress(0);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const formData = new FormData();

      // Add all form fields to FormData
      Object.entries(form).forEach(([key, value]) => {
        if (key === "attachment" && value) {
          formData.append("attachment", value);
        } else if (key !== "attachment") {
          formData.append(key, value as string);
        }
      });

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you! Your message has been sent successfully. We'll get back to you soon!",
        });
        // Hide message after 4 seconds
        setTimeout(() => setSubmitStatus({ type: null, message: "" }), 4000);
        // Reset form using native form reset
        if (formDataRef.current) {
          formDataRef.current.reset();
        }

        // Reset form state
        setForm({
          client_name: "",
          event_type: eventType,
          other_event_type: "",
          event_date: "",
          event_venue: "",
          guest_size: "",
          inspiration_link: "",
          phone: "",
          email: "",
          additional_info: "",
          destination: destinationName,
          attachment: null,
        });
        setFileError("");
        setUploadProgress(0);

        // Reset file input element
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } else {
        throw new Error(data.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Error sending form:", error);
      setSubmitStatus({
        type: "error",
        message:
          "Sorry, there was an error sending your message. Please try again or contact us directly.",
      });
      // Hide error after 4 seconds
      setTimeout(() => setSubmitStatus({ type: null, message: "" }), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`${styles.formContainer} ${className}`}>
      {title && <h1 className={styles.title}>{title}</h1>}
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

      <form ref={formDataRef} onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="client_name" className={styles.label}>
              Client Name *
            </label>
            <input
              type="text"
              id="client_name"
              name="client_name"
              value={form.client_name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="event_type" className={styles.label}>
              Type of Event *
            </label>
            <select
              id="event_type"
              name="event_type"
              value={form.event_type}
              onChange={handleChange}
              required
              disabled={eventTypeDisabled}
              className={`${styles.select} ${
                eventTypeDisabled ? styles.disabled : ""
              }`}
            >
              {EVENT_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        {form.event_type === "Other" && (
          <div className={styles.formGroup}>
            <label htmlFor="other_event_type" className={styles.label}>
              Please Specify Event Type *
            </label>
            <input
              type="text"
              id="other_event_type"
              name="other_event_type"
              value={form.other_event_type}
              onChange={handleChange}
              placeholder="Please specify your event type"
              required
              className={styles.input}
            />
          </div>
        )}

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="event_date" className={styles.label}>
              Event Date *
            </label>
            <input
              type="date"
              id="event_date"
              name="event_date"
              value={form.event_date}
              onChange={handleChange}
              min={getTomorrowDate()}
              required
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="guest_size" className={styles.label}>
              Guest Size *
            </label>
            <select
              id="guest_size"
              name="guest_size"
              value={form.guest_size}
              onChange={handleChange}
              required
              className={styles.select}
            >
              <option value="">Select guest size</option>
              <option value="1-50">1-50 guests</option>
              <option value="51-100">51-100 guests</option>
              <option value="101-200">101-200 guests</option>
              <option value="201-500">201-500 guests</option>
              <option value="500+">500+ guests</option>
            </select>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="event_venue" className={styles.label}>
            Preferred Venue
          </label>
          <input
            type="text"
            id="event_venue"
            name="event_venue"
            value={form.event_venue}
            onChange={handleChange}
            placeholder="e.g., Beach Resort, Hotel, Villa"
            className={styles.input}
          />
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.label}>
              Phone Number *
            </label>
            <PhoneInput
              country="us"
              value={form.phone}
              onChange={handlePhoneChange}
              inputProps={{
                name: "phone",
                required: true,
              }}
              containerClass={styles.phoneContainer}
              inputClass={styles.phoneInput}
              buttonClass={styles.phoneButton}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="inspiration_link" className={styles.label}>
            Inspiration Link
          </label>
          <input
            type="url"
            id="inspiration_link"
            name="inspiration_link"
            value={form.inspiration_link}
            onChange={handleChange}
            placeholder="Pinterest, Instagram, or website link"
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="attachment" className={styles.label}>
            Attach Image or PDF (Max 15MB)
          </label>
          <input
            ref={fileInputRef}
            type="file"
            id="attachment"
            name="attachment"
            onChange={handleFileChange}
            accept="image/jpeg,image/jpg,image/png,image/gif,image/webp,application/pdf"
            className={styles.fileInput}
            disabled={isUploading || isSubmitting}
          />
          {fileError && <p className={styles.fileError}>{fileError}</p>}
          {isUploading && (
            <div className={styles.uploadProgressInline}>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
              <p className={styles.progressText}>
                Uploading... {uploadProgress}%
              </p>
            </div>
          )}
          {form.attachment && !isUploading && (
            <p className={styles.fileInfo}>
              Selected: {form.attachment.name} (
              {(form.attachment.size / (1024 * 1024)).toFixed(1)}MB)
            </p>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="additional_info" className={styles.label}>
            Additional Information
          </label>
          <textarea
            id="additional_info"
            name="additional_info"
            value={form.additional_info}
            onChange={handleChange}
            rows={4}
            placeholder="Tell us more about your vision, special requirements, or any questions you have..."
            className={styles.textarea}
          />
        </div>

        {submitStatus.type && (
          <div
            className={`${styles.statusMessage} ${
              submitStatus.type === "success" ? styles.success : styles.error
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting || isUploading}
          className={`${styles.submitButton} ${
            isSubmitting ? styles.submitting : ""
          }`}
        >
          {isSubmitting ? (
            <div className={styles.buttonLoading}>
              <div className={styles.buttonSpinner}></div>
              <span>Sending...</span>
            </div>
          ) : (
            "Send Inquiry"
          )}
        </button>
      </form>
    </div>
  );
}

export default SharedForm;

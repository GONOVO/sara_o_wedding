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
}

function SharedForm({
  title = "Reserve Your Event with Us Here",
  subtitle = "Our friendly team would love to hear from you.",
  eventTypeDisabled = false,
  defaultEventType = "",
  destinationName = "",
  className = "",
}: SharedFormProps) {
  // Set default event type based on whether it's a destination booking
  const eventType = destinationName
    ? "Destination"
    : defaultEventType || "Wedding";
  const formDataRef = useRef<HTMLFormElement | null>(null);
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
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
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
        // Reset form
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
        });
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
          disabled={isSubmitting}
          className={`${styles.submitButton} ${
            isSubmitting ? styles.submitting : ""
          }`}
        >
          {isSubmitting ? "Sending..." : "Send Inquiry"}
        </button>
      </form>
    </div>
  );
}

export default SharedForm;

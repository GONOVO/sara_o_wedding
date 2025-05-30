"use client";
import React, { useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import styles from "./contactus.module.css";

const MobileFrame = React.lazy(() => import("../ui/mobileframe/Mobile"));

import emailjs from "@emailjs/browser";

const EVENT_TYPES = [
  "Wedding",
  "Corporate",
  "Milestone Birthday",
  "Destination",
  "Entertainment",
  "Party",
  "Other",
] as const;

function Contactus() {
  const formDataRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({
    client_name: "",
    event_type: "Wedding",
    other_event_type: "",
    event_date: "",
    event_venue: "",
    guest_size: "",
    inspiration_link: "",
    phone: "",
    email: "",
    additional_info: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    emailjs
      .send(
        "service_5tz6yw8---",
        "template_4m22yrb",
        { ...form },
        {
          publicKey: "N9qLzL2P3X7Rut2Mp---",
        }
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
        },
        (error) => {
          console.error("Failed to send email:", error.text);
        }
      );
    setForm({
      client_name: "",
      event_type: "Wedding",
      other_event_type: "",
      event_date: "",
      event_venue: "",
      guest_size: "",
      inspiration_link: "",
      phone: "",
      email: "",
      additional_info: "",
    });
  };

  return (
    <section
      className={`${styles.main_grid_contactus} nunito_font`}
      id="contactus"
    >
      <div data-aos="fade-right">
        <h3>CONTACT US</h3>
        <h1>We&apos;d love to hear from you</h1>
        <p>Our friendly team would love to hear from you.</p>
        <form
          ref={formDataRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="client_name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Client Name
              </label>
              <input
                type="text"
                id="client_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={form.client_name}
                onChange={handleChange}
                name="client_name"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="event_type"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Type of Event
              </label>
              <div className="relative">
                <select
                  id="event_type"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-8 appearance-none"
                  value={form.event_type}
                  onChange={handleChange}
                  name="event_type"
                  required
                >
                  {EVENT_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {form.event_type === "Other" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="other_event_type"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Please Specify Event Type
                </label>
                <input
                  type="text"
                  id="other_event_type"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  value={form.other_event_type}
                  onChange={handleChange}
                  name="other_event_type"
                  required={form.event_type === "Other"}
                />
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="event_date"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Target Event Date
              </label>
              <input
                type="date"
                id="event_date"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={form.event_date}
                onChange={handleChange}
                name="event_date"
                min={getTomorrowDate()}
                required
              />
            </div>

            <div>
              <label
                htmlFor="guest_size"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Target Guest Size
              </label>
              <input
                type="number"
                id="guest_size"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={form.guest_size}
                onChange={handleChange}
                name="guest_size"
                placeholder="Number of guests"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="event_venue"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Event Venue
              </label>
              <input
                type="text"
                id="event_venue"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={form.event_venue}
                onChange={handleChange}
                name="event_venue"
                placeholder="Venue name or location"
                required
              />
            </div>

            <div>
              <label
                htmlFor="inspiration_link"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Event Design Inspiration Link
              </label>
              <input
                type="url"
                id="inspiration_link"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={form.inspiration_link}
                onChange={handleChange}
                name="inspiration_link"
                placeholder="Pinterest board, Instagram collection, etc."
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Phone Number
              </label>
              <PhoneInput
                country={"us"}
                inputClass={styles.custom_phone_input}
                value={form.phone}
                onChange={(value: string) => {
                  handleChange({
                    target: { name: "phone", value },
                  } as React.ChangeEvent<HTMLInputElement>);
                }}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={form.email}
                onChange={handleChange}
                name="email"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div className="w-full">
            <label
              htmlFor="additional_info"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Additional Information
            </label>
            <textarea
              id="additional_info"
              rows={4}
              className="block w-full h-32 text-sm text-gray-900 bg-gray-50 rounded-lg border p-2 border-gray-300 resize-none"
              placeholder="Share any additional details or special requirements..."
              value={form.additional_info}
              onChange={handleChange}
              name="additional_info"
            ></textarea>
          </div>

          <button
            type="submit"
            className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center bg-black"
          >
            Send Your Message
          </button>
        </form>
      </div>

      <div className={styles.sec_main_container}>
        <div className={styles.mobiles_container} data-aos="fade-left">
          <div className={styles.first_mob}>
            <MobileFrame
              video="/videos/contactusmob1.mp4"
              fallback="/images/contactusfall1.webp"
            />
          </div>
          <MobileFrame
            video="/videos/contactusmob2.mp4"
            fallback="/images/contactusfall2.webp"
          />
        </div>
      </div>
    </section>
  );
}

export default Contactus;

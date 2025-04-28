"use client";
import React, { useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import styles from "./contactus.module.css";

const MobileFrame = React.lazy(() => import("../ui/mobileframe/Mobile"));

import emailjs from "@emailjs/browser";
function Contactus() {
  const formDataRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = (
    // e: any
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    // React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    setForm({ ...form, [target.name]: target.value });
    // setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .send(
        "service_5tz6yw8---",
        "template_4m22yrb",
        { ...form },
        // (formDataRef as any).current,
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
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      message: "",
    });
  };
  return (
    <section
      className={`${styles.main_grid_contactus} nunito_font`}
      id="contactus"
    >
      <div data-aos="fade-right">
        <h3>CONTACT US</h3>
        <h1>We’d love to hear from you</h1>
        <p>Our friendly team would love to hear from you.</p>
        <form ref={formDataRef} onSubmit={handleSubmit}>
          <div className="grid gap-6  md:grid-cols-2">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                First name
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="John"
                value={form.first_name}
                onChange={handleChange}
                name="first_name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Last name
              </label>
              <input
                type="text"
                id="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Doe"
                value={form.last_name}
                onChange={handleChange}
                name="last_name"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email1"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your email
            </label>
            <input
              id="email1"
              type="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
              placeholder="ayaad@gonovo.com"
              value={form.email}
              onChange={handleChange}
              name="email"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Phone number
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
              // dropdownClass="custom-dropdown"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="block w-full h-32 text-sm text-gray-900 bg-gray-50 rounded-lg border p-2 border-gray-300  resize-none"
              placeholder="Write your thoughts here..."
              value={form.message}
              onChange={handleChange}
              name="message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center bg-black"
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
              fallback="/images/contactusfall1.png"
            />
          </div>
          <MobileFrame
            video="/videos/contactusmob2.mp4"
            fallback="/images/contactusfall2.png"
          />
        </div>
      </div>
    </section>
  );
}

export default Contactus;

"use client";

import Script from "next/script";

export default function NeexaChat() {
  return (
    <>
      {/* Neexa Chat Widget */}
      <Script id="neexa-config" strategy="beforeInteractive">
        {`var neexa_xgmx_cc_wpq_ms = "9f4f5d2a-8d07-4d1d-baa2-50357aba0ce1";`}
      </Script>
      <Script
        src="https://chat-widget.neexa.ai/main.js?nonce=1751637708639.5225"
        strategy="afterInteractive"
        onLoad={() => {
          if (
            typeof window !== "undefined" &&
            "neexa" in window &&
            window.neexa
          ) {
            window.neexa.init({
              agent_id: window.neexa_xgmx_cc_wpq_ms,
              appearance_mode: "light",
              mobile_mini_style: "greeting_only",
              chat_position: "bottom_right",
            });
          }
        }}
      />
    </>
  );
}

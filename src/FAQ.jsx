import { useState } from "react";
import { Link } from "react-router-dom";
import LogoGdgoc from "./assets/gdgoc.png";
export default function FAQsPage() {
  const [formData, setFormData] = useState({ name: "", question: "" });

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "6282392290090";


    const message = `Hello, I have a question.\n\n*Name:* ${formData.name}\n*Question:* ${formData.question}`;


    const encodedMessage = encodeURIComponent(message);


    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank",
    );
  };

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        fontFamily: "sans-serif",
        textAlign: "left",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          padding: "64px 96px 100px",
          maxWidth: "1248px",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        <Link
          to="/"
          style={{
            display: "inline-block",
            alignItems: "left",
            backgroundColor: "#1967D2",
            color: "#ffffff",
            padding: "12px 24px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          &larr; Back to Home
        </Link>

        <div
          style={{ marginTop: "32px", marginBottom: "40px", maxWidth: "800px" }}
        >
          <span
            style={{
              fontSize: "12px",
              fontWeight: "600",
              textTransform: "uppercase",
              color: "#1967D2",
            }}
          >
            Got a question?
          </span>
          <h1
            style={{
              fontSize: "42px",
              fontWeight: "700",
              color: "#202124",
              margin: "8px 0 16px 0",
            }}
          >
            Ask Us A Question
          </h1>
          <p
            style={{
              fontSize: "16px",
              color: "#5F6368",
              lineHeight: "160%",
              margin: 0,
            }}
          >
            Have questions about learning tracks, community activities, or
            collaborations? Send us a message!
          </p>
        </div>

        <form
          onSubmit={handleWhatsAppSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "900px",
          }}
        >
          <div>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: "600",
                color: "#202124",
                marginBottom: "8px",
              }}
            >
              Full Name:
            </label>
            <input
              type="text"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              style={{
                width: "100%",
                padding: "14px 16px",
                borderRadius: "12px",
                border: "1px solid #DADCE0",
                fontSize: "15px",
                boxSizing: "border-box",
                outline: "none",
              }}
            />
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: "600",
                color: "#202124",
                marginBottom: "8px",
              }}
            >
              Question:
            </label>
            <textarea
              rows="5"
              required
              placeholder="Your Question"
              value={formData.question}
              onChange={(e) =>
                setFormData({ ...formData, question: e.target.value })
              }
              style={{
                width: "100%",
                padding: "14px 16px",
                borderRadius: "12px",
                border: "1px solid #DADCE0",
                fontSize: "15px",
                boxSizing: "border-box",
                outline: "none",
                fontFamily: "inherit",
              }}
            />
          </div>

          <div>
            <button
              type="submit"
              style={{
                backgroundColor: "#25D366",
                color: "#FFFFFF",
                padding: "16px 32px",
                borderRadius: "12px",
                border: "none",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "20px",
              }}
            >
              Send To WhatsApp ↗
            </button>
          </div>
        </form>
      </div>
      {/* --- FOOTER HALAMAN HOME --- */}
      <footer
        style={{
          backgroundColor: "#F1F3F4",
          padding: "56px 96px 28px",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          boxSizing: "border-box",
          width: "100%",
        }}
      >
        {/* Top Footer Content */}
        <div
          style={{
            maxWidth: "1248px",
            width: "100%",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            textAlign: "left",
            flexWrap: "wrap",
            gap: "40px",
          }}
        >
          {/* 1. Community Identity (Kiri) */}

          {/* 2. Menu Kanan (Dibungkus Flex Row agar Explore & Keep in the Loop Berjajar) */}
          {/* Top Footer Content */}
          <div
            style={{
              maxWidth: "1248px",
              width: "100%",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              textAlign: "left",
              gap: "64px",
            }}
          >
            {/* 1. Kolom Kiri: Logo & Deskripsi GDGoC */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                maxWidth: "420px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "16px" }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#FFFFFF",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "#1a73e8",
                      fontSize: "20px",
                    }}
                  >
                    <img
                      src={LogoGdgoc}
                      alt="Logo GDGoC UGM"
                      style={{
                        width: "100px",
                        height: "50px",
                        objectFit: "contain",
                      }}
                    />
                  </span>
                </div>
                <div>
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "#202124",
                      fontSize: "15px",
                      display: "block",
                      lineHeight: "1.2",
                    }}
                  >
                    Google Developer Groups
                  </span>
                  <span style={{ fontSize: "12px", color: "#5f6368" }}>
                    On Campus • Universitas Gadjah Mada
                  </span>
                </div>
              </div>
              <p
                style={{
                  fontSize: "16px",
                  color: "#5F6368",
                  lineHeight: "155%",
                  margin: 0,
                }}
              >
                A student community for curious minds, shared learning, and
                technology with purpose.
              </p>
            </div>

            {/* 2. Kolom Kanan: Berisi Explore & Keep in the loop yang sejajar */}
            <div
              style={{ display: "flex", gap: "96px", alignItems: "flex-start" }}
            >
              {/* Bagian Explore */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                <span
                  style={{
                    fontWeight: "700",
                    fontSize: "16px",
                    color: "#000000",
                  }}
                >
                  Explore
                </span>
                <Link
                  to="/"
                  style={{
                    color: "#5F6368",
                    textDecoration: "none",
                    fontSize: "15px",
                  }}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  style={{
                    color: "#5F6368",
                    textDecoration: "none",
                    fontSize: "15px",
                  }}
                >
                  About
                </Link>
                <Link
                  to="/overview"
                  style={{
                    color: "#5F6368",
                    textDecoration: "none",
                    fontSize: "15px",
                  }}
                >
                  Overview
                </Link>
              </div>

              {/* Bagian Keep in the loop */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <span
                  style={{
                    fontWeight: "700",
                    fontSize: "16px",
                    color: "#000000",
                  }}
                >
                  Keep in the loop
                </span>

                {/* Link Instagram dengan Ikon SVG */}
                <a
                  href="https://instagram.com/gdgoc.ugm"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#5F6368",
                    textDecoration: "none",
                    fontSize: "15px",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  Instagram
                </a>

                {/* Link YouTube dengan Ikon SVG */}
                <a
                  href="https://youtube.com/@gdgocugm"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#5F6368",
                    textDecoration: "none",
                    fontSize: "15px",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"></path>
                    <polygon
                      points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
                      fill="currentColor"
                    ></polygon>
                  </svg>
                  YouTube
                </a>

                <span
                  style={{
                    fontSize: "14px",
                    color: "#5F6368",
                    marginTop: "4px",
                  }}
                >
                  Learn together. Build together.
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Divider Line */}
        <div
          style={{
            maxWidth: "1248px",
            width: "100%",
            margin: "0 auto",
            height: "1px",
            backgroundColor: "#DADCE0",
          }}
        ></div>

        {/* Footer Note & Copyright */}
        <div
          style={{
            maxWidth: "1248px",
            width: "100%",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "12px",
            color: "#5F6368",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <span>© GDGoC Universitas Gadjah Mada • 2026/2027</span>
          <span>Made for the campus. Open to possibilities.</span>
        </div>

        {/* Brand Signature Colors Bar */}
        <div
          style={{
            maxWidth: "160px",
            width: "100%",
            height: "4px",
            display: "flex",
          }}
        >
          <div style={{ flex: 1, backgroundColor: "#4284F4" }}></div>
          <div style={{ flex: 1, backgroundColor: "#EA4335" }}></div>
          <div style={{ flex: 1, backgroundColor: "#F9AB00" }}></div>
          <div style={{ flex: 1, backgroundColor: "#34A853" }}></div>
        </div>
      </footer>
    </div>
  );
}

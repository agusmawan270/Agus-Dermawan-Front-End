import Logo2 from "./assets/logo2.png";
import { useState, useEffect } from "react";
import LogoGdgoc from "./assets/gdgoc.png";
import { Link } from "react-router-dom";
export default function AboutPage() {
  const [values, setValues] = useState([]);
  const [loadingValues, setLoadingValues] = useState(true);

  // Ambil data langsung dari endpoint API values
  useEffect(() => {
    async function ambilDataValues() {
      try {
        const response = await fetch(
          "https://gdgoc-ugm-api.vercel.app/api/values",
        );
        const hasil = await response.json();
        setValues(hasil.data || []);
      } catch (error) {
        console.error("Gagal mengambil data values dari API:", error);
      } finally {
        setLoadingValues(false);
      }
    }

    ambilDataValues();
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        fontFamily: "sans-serif",
        textAlign: "left",
      }}
    >
      {/* --- 1. HERO ABOUT SECTION --- */}
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "88px 96px",
          maxWidth: "1440px",
          margin: "0 auto",
          boxSizing: "border-box",
          gap: "64px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "24px",
            maxWidth: "620px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "7px",
                height: "7px",
                backgroundColor: "#4284F4",
                borderRadius: "50%",
              }}
            ></div>
            <span
              style={{
                fontSize: "12px",
                fontWeight: "500",
                textTransform: "uppercase",
                color: "#5F6368",
                letterSpacing: "0.5px",
              }}
            >
              ABOUT GDGOC UGM
            </span>
          </div>

          <h1
            style={{
              fontSize: "64px",
              fontWeight: "700",
              lineHeight: "112%",
              color: "#242424",
              margin: 0,
            }}
          >
            Built by students. <br />
            <span style={{ color: "#4284F4" }}>For what's next.</span>
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "155%",
              color: "#5F6368",
              margin: 0,
            }}
          >
            We're a community of learners and makers at Universitas Gadjah Mada,
            connected by curiosity and the belief that technology can do good.
          </p>

          <span
            style={{
              fontSize: "12px",
              fontWeight: "500",
              color: "#5F6368",
              textTransform: "uppercase",
              marginTop: "12px",
            }}
          >
            UNIVERSITAS GADJAH MADA • 2026/2027
          </span>
        </div>

        <div
          style={{
            width: "600px",
            height: "300px",
            borderRadius: "32px",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FFFFFF", // atau transparan
          }}
        >
          <img
            src={Logo2}
            alt="GDGoC UGM Artwork"
            style={{ width: "100%", height: "100%", objectFit: "fill" }}
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.innerHTML =
                '<span style="color:#4284F4;font-weight:bold;">[ Ilustrasi Artwork About ]</span>';
            }}
          />
        </div>
      </section>

      {/* --- 2. OUR PURPOSE SECTION --- */}
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          padding: "80px 96px",
          gap: "96px",
          width: "100%",
          backgroundColor: "#F1F3F4",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            maxWidth: "1248px",
            width: "100%",
            margin: "0 auto",
            display: "flex",
            gap: "96px",
          }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "7px",
                  height: "7px",
                  backgroundColor: "#4284F4",
                  borderRadius: "50%",
                }}
              ></div>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  textTransform: "uppercase",
                  color: "#5F6368",
                }}
              >
                WHY WE COME TOGETHER
              </span>
            </div>

            <h2
              style={{
                fontSize: "48px",
                fontWeight: "700",
                lineHeight: "112%",
                color: "#242424",
                margin: 0,
              }}
            >
              A bridge from <br />
              <span style={{ color: "#4284F4" }}>“I wonder”</span> to <br />
              <span style={{ color: "#4284F4" }}>“I made this.”</span>
            </h2>
          </div>

          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <p
              style={{
                fontSize: "21px",
                lineHeight: "155%",
                color: "#242424",
                margin: 0,
                fontWeight: "400",
              }}
            >
              Learning feels different when there’s someone to exchange ideas
              with, a problem you care about, and the space to give it a try.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "155%",
                color: "#5F6368",
                margin: 0,
              }}
            >
              That’s the spirit of Google Developer Groups on Campus at UGM. We
              create room for students to explore technology, develop practical
              skills, and learn from one another.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "155%",
                color: "#5F6368",
                margin: 0,
              }}
            >
              Our campus is the starting point. The questions we ask and the
              things we build can reach beyond it.
            </p>
          </div>
        </div>
      </section>

      {/* --- 3. COMMUNITY VALUES SECTION (Dinamis dari API Values) --- */}
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "88px 96px",
          gap: "40px",
          maxWidth: "1440px",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            maxWidth: "800px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "7px",
                height: "7px",
                backgroundColor: "#4284F4",
                borderRadius: "50%",
              }}
            ></div>
            <span
              style={{
                fontSize: "12px",
                fontWeight: "500",
                textTransform: "uppercase",
                color: "#5F6368",
              }}
            >
              HOW WE SHOW UP
            </span>
          </div>

          <h2
            style={{
              fontSize: "48px",
              fontWeight: "700",
              lineHeight: "112%",
              color: "#242424",
              margin: 0,
            }}
          >
            What shapes our community.
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "155%",
              color: "#5F6368",
              margin: 0,
            }}
          >
            Four values guide how we learn, collaborate, and build together.
          </p>
        </div>

        {loadingValues ? (
          <div style={{ color: "#5f6368", padding: "20px 0" }}>
            Sedang memuat data Community Values dari API...
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "24px",
              width: "100%",
            }}
          >
            {values.map((val, index) => (
              <div
                key={val.id || index}
                style={{
                  border: "1px solid #DADCE0",
                  borderRadius: "24px",
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "20px",
                  backgroundColor: "#FFFFFF",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    backgroundColor: "#F1F3F4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "22px",
                  }}
                >
                  {val.icon}
                </div>

                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    lineHeight: "112%",
                    color: "#242424",
                    margin: 0,
                  }}
                >
                  {val.title}
                </h3>

                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "155%",
                    color: "#5F6368",
                    margin: 0,
                  }}
                >
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
      {/* --- 4. WAYS TO BELONG SECTION (Baru) --- */}
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          padding: "0px 96px 88px 96px",
          gap: "96px",
          width: "100%",
          maxWidth: "1440px",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        {/* Kolom Kiri: Teks Judul & Deskripsi */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "7px",
                height: "7px",
                backgroundColor: "#4284F4",
                borderRadius: "50%",
              }}
            ></div>
            <span
              style={{
                fontSize: "12px",
                fontWeight: "500",
                textTransform: "uppercase",
                color: "#5F6368",
              }}
            >
              PEOPLE, NOT LABELS
            </span>
          </div>

          <h2
            style={{
              fontSize: "48px",
              fontWeight: "700",
              lineHeight: "112%",
              color: "#242424",
              margin: 0,
            }}
          >
            There’s more than one way to contribute.
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "155%",
              color: "#5F6368",
              margin: 0,
            }}
          >
            You can be learning one day and helping someone else the next. A
            community grows through both.
          </p>
        </div>

        {/* Kolom Kanan: Daftar Peran (Learner, Collaborator, Contributor) */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          {/* Poin 1 */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              paddingBottom: "24px",
              borderBottom: "1px solid #DADCE0",
            }}
          >
            <h3
              style={{
                fontSize: "22px",
                fontWeight: "700",
                color: "#242424",
                margin: 0,
              }}
            >
              Come as a learner
            </h3>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "155%",
                color: "#5F6368",
                margin: 0,
              }}
            >
              Explore a topic, join a discussion, and ask the question that’s
              been on your mind.
            </p>
          </div>

          {/* Poin 2 */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              paddingBottom: "24px",
              borderBottom: "1px solid #DADCE0",
            }}
          >
            <h3
              style={{
                fontSize: "22px",
                fontWeight: "700",
                color: "#242424",
                margin: 0,
              }}
            >
              Grow as a collaborator
            </h3>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "155%",
                color: "#5F6368",
                margin: 0,
              }}
            >
              Work with people whose skills complement yours. Discover what you
              can build together.
            </p>
          </div>

          {/* Poin 3 */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              paddingBottom: "16px",
            }}
          >
            <h3
              style={{
                fontSize: "22px",
                fontWeight: "700",
                color: "#242424",
                margin: 0,
              }}
            >
              Give back as a contributor
            </h3>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "155%",
                color: "#5F6368",
                margin: 0,
              }}
            >
              Share knowledge, support a learning session, or bring an idea for
              the community.
            </p>
          </div>

          <div></div>
        </div>
      </section>
      {/* --- 5. COMMUNITY INVITATION SECTION (Penutup About) --- */}
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "64px 96px",
          width: "100%",
          maxWidth: "1440px",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "100%",
            backgroundColor: "#242424",
            borderRadius: "32px",
            padding: "64px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "24px",
            boxSizing: "border-box",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Section Label */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "7px",
                height: "7px",
                backgroundColor: "#4284F4",
                borderRadius: "50%",
              }}
            ></div>
            <span
              style={{
                fontSize: "12px",
                fontWeight: "500",
                textTransform: "uppercase",
                color: "#BDC1C6",
                letterSpacing: "0.5px",
              }}
            >
              READY WHEN YOU ARE
            </span>
          </div>

          {/* Heading */}
          <h2
            style={{
              fontSize: "44px",
              fontWeight: "700",
              lineHeight: "115%",
              color: "#FFFFFF",
              margin: 0,
            }}
          >
            Curious where you might fit in?
          </h2>

          {/* Description */}
          <p
            style={{
              fontSize: "18px",
              lineHeight: "155%",
              color: "#BDC1C6",
              margin: 0,
              maxWidth: "580px",
            }}
          >
            Explore the learning tracks, or reach out if you’d like to know more
            about the community.
          </p>
        </div>
      </section>
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

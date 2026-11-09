import { useState, useEffect } from "react";
import Logo1 from "./assets/logo1.png";
import { Link } from "react-router-dom";
import LogoGdgoc from "./assets/gdgoc.png";

export default function HomePage() {
  const [tracks, setTracks] = useState([]);
  const [loadingTracks, setLoadingTracks] = useState(true);
  const [faqs, setFaqs] = useState([]);
  const [loadingFaqs, setLoadingFaqs] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);

  // 1. STATE activeTrack diletakkan di sini (di luar fungsi lain, sejajar dengan state utama)
  const [activeTrack, setActiveTrack] = useState(null);

  // Fungsi untuk toggle FAQ
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const trackDetails = {
    "research-discovery":
      "Fokus pada riset pengguna, analisis kebutuhan, dan validasi ide sebelum produk dibangun oleh tim.",
    "design-creativity":
      "Mempelajari antarmuka pengguna (UI), pengalaman pengguna (UX), wireframing, dan prototyping.",
    development:
      "Membangun aplikasi frontend dan backend yang responsif menggunakan React dan integrasi API.",
  };

  useEffect(() => {

    async function ambilDataTracks() {
      try {
        const response = await fetch(
          "https://gdgoc-ugm-api.vercel.app/api/tracks",
        );
        const hasil = await response.json();
        setTracks(hasil.data || []);
      } catch (error) {
        console.error("Gagal mengambil data tracks:", error);
      } finally {
        setLoadingTracks(false);
      }
    }

    async function ambilDataFaqs() {
      try {
        const response = await fetch(
          "https://gdgoc-ugm-api.vercel.app/api/faqs",
        );
        const hasil = await response.json();
        setFaqs(hasil.data || []);
      } catch (error) {
        console.error("Gagal mengambil data FAQ:", error);
      } finally {
        setLoadingFaqs(false);
      }
    }

    ambilDataTracks();
    ambilDataFaqs();
  }, []);

  return (
    <div>
      {/* --- HERO SECTION --- */}
      <section
        id="home"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "72px 64px 64px 96px",
          maxWidth: "1440px",
          margin: "0 auto",
          boxSizing: "border-box",
          gap: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "28px",
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
              }}
            >
              GDGOC UGM • 2026/2027
            </span>
          </div>
          <h1
            style={{
              fontSize: "80px",
              fontWeight: "700",
              lineHeight: "105%",
              color: "#242424",
              margin: "0",
              textAlign: "left",
            }}
          >
            Big ideas. <br />
            <span style={{ color: "#4284F4" }}>Built together.</span>
          </h1>
          <p
            style={{
              fontSize: "21px",
              lineHeight: "155%",
              color: "#5F6368",
              margin: "0",
              textAlign: "left",
            }}
          >
            A place for curious minds at{" "}
            <strong>Universitas Gadjah Mada</strong> to learn, connect, and
            build technology that matters.
          </p>
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
            backgroundColor: "#FFFFFF", 
          }}
        >
          <img
            src={Logo1} 
            alt="Ideas coming together"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "fill", 
            }}
          />
        </div>
      </section>

      {/* --- COMMUNITY INTRODUCTION --- */}
      <section
        id="about"
        style={{
          display: "flex",
          padding: "88px 96px",
          gap: "96px",
          maxWidth: "1440px",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "490px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            textAlign: "left",
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
              A Campus, A Community
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
            Not just learning tech. Finding your people.
          </h2>
          <Link
            to={`/MoreAbout`}
            style={{
              color: "#1967D2",
              fontWeight: "500",
              textDecoration: "none",
              fontSize: "16px",
            }}
          >
            More About GDGoC &rarr;
          </Link>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            textAlign: "left",
          }}
        >
          <p
            style={{
              fontSize: "21px",
              lineHeight: "155%",
              color: "#5F6368",
              margin: 0,
            }}
          >
            Google Developer Groups on Campus, Universitas Gadjah Mada brings
            students together around one simple idea: we can go further when we
            learn with each other.
          </p>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "155%",
              color: "#5F6368",
              margin: 0,
            }}
          >
            From your first line of code to your next product idea, there's room
            to ask questions, share what you know, and try something new.
          </p>
          <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
            <span
              style={{
                backgroundColor: "#F1F3F4",
                padding: "8px 14px",
                borderRadius: "100px",
                fontSize: "13px",
                fontWeight: "700",
                color: "#5F6368",
              }}
            >
              Student-led
            </span>
            <span
              style={{
                backgroundColor: "#F1F3F4",
                padding: "8px 14px",
                borderRadius: "100px",
                fontSize: "13px",
                fontWeight: "700",
                color: "#5F6368",
              }}
            >
              Peer-powered
            </span>
            <span
              style={{
                backgroundColor: "#F1F3F4",
                padding: "8px 14px",
                borderRadius: "100px",
                fontSize: "13px",
                fontWeight: "700",
                color: "#5F6368",
              }}
            >
              Curiosity-first
            </span>
          </div>
        </div>
      </section>

      {/* --- TRACK DISCOVERY (API Tracks) --- */}
      <section
        id="overview"
        style={{
          padding: "16px 96px 88px",
          maxWidth: "1440px",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "36px",
          }}
        >
          <div style={{ textAlign: "left" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "18px",
              }}
            >
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
                Find your starting point
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
              Many interests. One shared journey.
            </h2>
          </div>
        </div>

        {loadingTracks ? (
          <div
            style={{ textAlign: "center", color: "#5f6368", padding: "40px" }}
          >
            Sedang memuat data Learning Track...
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "24px",
              alignItems: "stretch",
              width: "100%",
              transition: "all 0.4s ease",
            }}
          >
            {tracks.map((item, index) => {
              const trackKey = item.id || index;
              const isSelected = activeTrack === trackKey;


              const customDetails = {
                "research-discovery":
                  "A deep focus on user research, interviews, needs analysis, and data-driven problem-solving methodologies to validate ideas before moving into the development phase.",
                "design-creativity":
                  "Learning modern UI/UX principles, creating interactive wireframes and design systems, and prototyping applications using Figma in a collaborative manner.",
                development:
                  "Hands-on practice in building responsive web and mobile applications using React, state management, and REST API integration, following industry standards.",
              };

              // Ambil teks unik berdasarkan id item, atau fallback ke teks bawaan API
              const detailText = customDetails[item.id] || item.detail || "";

              return (
                <div
                  key={trackKey}
                  onClick={() => setActiveTrack(isSelected ? null : trackKey)}
                  style={{
                    flex: activeTrack === null ? "1" : isSelected ? "2" : "1",
                    border: isSelected
                      ? "2px solid #1967D2"
                      : "1px solid #DADCE0",
                    borderRadius: "24px",
                    backgroundColor: isSelected ? "#FFFFFF" : "#F8F9FA",
                    padding: "36px",
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    cursor: "pointer",
                    overflow: "hidden",
                    boxShadow: isSelected
                      ? "0 12px 32px rgba(25, 103, 210, 0.12)"
                      : "none",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <div>
                    {/* Header Warna Kartu */}
                    <div
                      style={{
                        height: isSelected ? "140px" : "90px",
                        backgroundColor:
                          index === 0
                            ? "#EAF2FF"
                            : index === 1
                              ? "#FFF7DF"
                              : "#EAF5ED",
                        borderRadius: "16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "24px",
                        transition: "all 0.4s ease",
                      }}
                    >
                      <span
                        style={{
                          color: "#5F6368",
                          fontWeight: "bold",
                          fontSize: "14px",
                        }}
                      >
                        {item.category}
                      </span>
                    </div>

                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: "600",
                        textTransform: "uppercase",
                        color: "#1967D2",
                      }}
                    >
                      {isSelected
                        ? "ACTIVE TRACK (CLICK TO CLOSE)"
                        : "CLICK TO EXPAND"}
                    </span>

                    <h3
                      style={{
                        fontSize: isSelected ? "32px" : "24px",
                        fontWeight: "700",
                        color: "#242424",
                        margin: "12px 0 16px 0",
                        transition: "font-size 0.3s ease",
                      }}
                    >
                      {item.name}
                    </h3>

                    <p
                      style={{
                        fontSize: "16px",
                        lineHeight: "160%",
                        color: "#5F6368",
                        margin: 0,
                        textAlign: "justify",
                      }}
                    >
                      {item.description}
                    </p>

                    {/* Deskripsi Tambahan yang Berbeda-beda Tiap Kartu Saat Dipilih */}
                    {isSelected && (
                      <div
                        style={{
                          marginTop: "30px",
                          padding: "25px",
                          backgroundColor: "#F1F3F4",
                          borderRadius: "12px",
                          animation: "fadeIn 0.6s ease-in-out",
                        }}
                      >
                        <h4
                          style={{
                            fontSize: "15px",
                            color: "#202124",
                            margin: "0 0 8px 0",
                          }}
                        >
                          What you'll learn in this track:
                        </h4>
                        <p
                          style={{
                            fontSize: "15px",
                            color: "#5F6368",
                            lineHeight: "155%",
                            margin: 0,
                            textAlign: "justify",
                          }}
                        >
                          {detailText}
                        </p>
                      </div>
                    )}
                  </div>

                  <div style={{ marginTop: "32px" }}>
                    <div
                      style={{
                        height: "1px",
                        backgroundColor: "#DADCE0",
                        width: "100%",
                        marginBottom: "20px",
                      }}
                    ></div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          color: "#1967D2",
                          fontWeight: "600",
                          fontSize: "15px",
                        }}
                      >
                        {isSelected
                          ? "Click again to close "
                          : "Explore this track →"}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
      {/* --- LEARNING FORMATS --- */}
      <section style={{ padding: "80px 96px", backgroundColor: "#F1F3F4" }}>
        <div
          style={{ maxWidth: "1248px", margin: "0 auto", textAlign: "left" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "18px",
            }}
          >
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
              More than a classroom
            </span>
          </div>
          <h2
            style={{
              fontSize: "48px",
              fontWeight: "700",
              lineHeight: "112%",
              color: "#242424",
              margin: "0 0 40px 0",
            }}
          >
            Less watching. More making.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
          >
            <div
              style={{
                backgroundColor: "#FFFFFF",
                padding: "32px",
                borderRadius: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <h3
                style={{
                  fontSize: "28px",
                  fontWeight: "700",
                  color: "#242424",
                  margin: 0,
                }}
              >
                Study together
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  color: "#5F6368",
                  lineHeight: "155%",
                  margin: 0,
                }}
              >
                Work through foundations in peer learning sessions. Bring your
                questions; leave with a next step.
              </p>
              <div style={{ height: "1px", backgroundColor: "#DADCE0" }}></div>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "#1967D2",
                }}
              >
                Study groups & guided practice
              </span>
            </div>
            <div
              style={{
                backgroundColor: "#FFFFFF",
                padding: "32px",
                borderRadius: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <h3
                style={{
                  fontSize: "28px",
                  fontWeight: "700",
                  color: "#242424",
                  margin: 0,
                }}
              >
                Try it hands-on
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  color: "#5F6368",
                  lineHeight: "155%",
                  margin: 0,
                }}
              >
                Explore a tool or technique in a workshop, then put it to work
                in a small experiment.
              </p>
              <div style={{ height: "1px", backgroundColor: "#DADCE0" }}></div>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "#1967D2",
                }}
              >
                Workshops & technical sessions
              </span>
            </div>
            <div
              style={{
                backgroundColor: "#FFFFFF",
                padding: "32px",
                borderRadius: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <h3
                style={{
                  fontSize: "28px",
                  fontWeight: "700",
                  color: "#242424",
                  margin: 0,
                }}
              >
                Share the process
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  color: "#5F6368",
                  lineHeight: "155%",
                  margin: 0,
                }}
              >
                Exchange feedback, explain your decisions, and learn from
                different ways of thinking.
              </p>
              <div style={{ height: "1px", backgroundColor: "#DADCE0" }}></div>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "#1967D2",
                }}
              >
                Project circles & sharing sessions
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROJECT POSSIBILITY --- */}
      <section
        style={{
          display: "flex",
          padding: "88px 96px",
          gap: "64px",
          maxWidth: "1440px",
          margin: "0 auto",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "592px",
            backgroundColor: "#FFF7DF",
            borderRadius: "32px",
            padding: "40px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "24px",
            }}
          >
            <span style={{ fontSize: "12px", color: "#5F6368" }}>
              IDEA &rarr; PROTOTYPE
            </span>
            <span style={{ color: "#1967D2", fontSize: "20px" }}>
              {" "}
              <img
                src={LogoGdgoc}
                alt="Logo GDGoC UGM"
                style={{ width: "100px", height: "50px", objectFit: "contain" }}
              />
            </span>
          </div>
          <div
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #DADCE0",
              borderRadius: "16px",
              padding: "26px",
            }}
          >
            <div style={{ display: "flex", gap: "6px", marginBottom: "16px" }}>
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: "#EA4335",
                  borderRadius: "50%",
                }}
              ></div>
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: "#F9AB00",
                  borderRadius: "50%",
                }}
              ></div>
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: "#34A853",
                  borderRadius: "50%",
                }}
              ></div>
            </div>
            <h3
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "#242424",
                margin: "0 0 16px 0",
              }}
            >
              A little less friction. <br />A better campus day.
            </h3>
            <div style={{ display: "flex", gap: "12px" }}>
              <span
                style={{
                  backgroundColor: "#EAF2FF",
                  padding: "8px 16px",
                  borderRadius: "12px",
                  fontSize: "13px",
                  fontWeight: "700",
                }}
              >
                Discover
              </span>
              <span
                style={{
                  backgroundColor: "#EAF5ED",
                  padding: "8px 16px",
                  borderRadius: "12px",
                  fontSize: "13px",
                  fontWeight: "700",
                }}
              >
                Connect
              </span>
              <span
                style={{
                  backgroundColor: "#FDEDEA",
                  padding: "8px 16px",
                  borderRadius: "12px",
                  fontSize: "13px",
                  fontWeight: "700",
                }}
              >
                Share
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            textAlign: "left",
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
              Build something that matters
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
            Your next project could start on campus.
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "155%",
              color: "#5F6368",
              margin: 0,
            }}
          >
            What if finding a study partner, sharing resources, or navigating
            campus felt easier? Small, familiar problems can be the beginning of
            meaningful work.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "155%",
              color: "#5F6368",
              margin: 0,
            }}
          >
            Bring research, design, and development together. Try an idea, get
            feedback, and make the next version better.
          </p>
        </div>
      </section>

      {/* --- GETTING STARTED JOURNEY --- */}
      <section
        style={{
          padding: "8px 96px 88px",
          maxWidth: "1440px",
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "left", marginBottom: "40px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "18px",
            }}
          >
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
              Make your first move
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
            You don’t need to have it all figured out.
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "40px",
            textAlign: "left",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <span
              style={{ fontSize: "44px", fontWeight: "700", color: "#1967D2" }}
            >
              01
            </span>
            <div style={{ height: "1px", backgroundColor: "#DADCE0" }}></div>
            <h3
              style={{
                fontSize: "25px",
                fontWeight: "700",
                color: "#242424",
                margin: 0,
              }}
            >
              Follow your curiosity
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "#5F6368",
                lineHeight: "155%",
                margin: 0,
              }}
            >
              Explore the tracks and find a topic you want to understand better.
            </p>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <span
              style={{ fontSize: "44px", fontWeight: "700", color: "#1967D2" }}
            >
              02
            </span>
            <div style={{ height: "1px", backgroundColor: "#DADCE0" }}></div>
            <h3
              style={{
                fontSize: "25px",
                fontWeight: "700",
                color: "#242424",
                margin: 0,
              }}
            >
              Learn alongside others
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "#5F6368",
                lineHeight: "155%",
                margin: 0,
              }}
            >
              Join a learning opportunity, ask a question, and share your
              perspective.
            </p>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <span
              style={{ fontSize: "44px", fontWeight: "700", color: "#1967D2" }}
            >
              03
            </span>
            <div style={{ height: "1px", backgroundColor: "#DADCE0" }}></div>
            <h3
              style={{
                fontSize: "25px",
                fontWeight: "700",
                color: "#242424",
                margin: 0,
              }}
            >
              Turn learning into action
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "#5F6368",
                lineHeight: "155%",
                margin: 0,
              }}
            >
              Practice through a project, exchange feedback, and pass something
              on.
            </p>
          </div>
        </div>
      </section>

      {/* --- BELONGING STATEMENT --- */}
      <section
        style={{
          display: "flex",
          alignItems: "center",
          padding: "64px 96px",
          gap: "64px",
          backgroundColor: "#EAF5ED",
        }}
      >
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "#34A853",
            borderRadius: "20px",
            flexShrink: 0,
          }}
        ></div>
        <div
          style={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <h2
            style={{
              fontSize: "40px",
              fontWeight: "700",
              color: "#242424",
              margin: 0,
              lineHeight: "112%",
            }}
          >
            Different majors. Different starting points. A place for all of
            them.
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "#5F6368",
              margin: 0,
              lineHeight: "155%",
            }}
          >
            You don't have to be the most experienced person in the room.
            Curiosity, kindness, and a willingness to learn are a good place to
            start.
          </p>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section
        id="faq"
        style={{
          display: "flex",
          padding: "88px 96px",
          gap: "96px",
          maxWidth: "1440px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            width: "400px",
            textAlign: "left",
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
              A few good questions
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
            Wondering where to begin?
          </h2>
          <Link
            to="/FAQ"
            style={{
              color: "#4284F4",
              textDecoration: "none",
              fontSize: "15px",
            }}
          >
            Ask us a question →
          </Link>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            textAlign: "left",
          }}
        >
          {loadingFaqs ? (
            <div style={{ color: "#5f6368", padding: "20px 0" }}>
              Sedang memuat daftar pertanyaan (FAQ)...
            </div>
          ) : (
            faqs.map((item, index) => (
              <div
                key={item.id || index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  borderBottom: "1px solid #DADCE0",
                  paddingBottom: "20px",
                }}
              >
                <div
                  onClick={() => toggleFaq(index)}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: "500",
                      color: "#242424",
                      margin: 0,
                    }}
                  >
                    {item.question}
                  </h3>
                  <span
                    style={{
                      color: "#1967D2",
                      fontWeight: "bold",
                      fontSize: "24px",
                      lineHeight: "1",
                    }}
                  >
                    {openFaq === index ? "−" : "+"}
                  </span>
                </div>
                {openFaq === index && (
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#5F6368",
                      lineHeight: "155%",
                      margin: 0,
                    }}
                  >
                    {item.answer}
                  </p>
                )}
              </div>
            ))
          )}
        </div>
      </section>

      {/* --- COMMUNITY INVITATION --- */}
      <section style={{ padding: "64px 96px" }}>
        <div
          style={{
            maxWidth: "1248px",
            margin: "0 auto",
            backgroundColor: "#EAF2FF",
            borderRadius: "32px",
            padding: "48px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              textAlign: "left",
              maxWidth: "844px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
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
                Your next chapter
              </span>
            </div>
            <h2
              style={{
                fontSize: "44px",
                fontWeight: "700",
                color: "#242424",
                margin: 0,
                lineHeight: "112%",
              }}
            >
              Bring your curiosity. We’ll build from there.
            </h2>
            <p style={{ fontSize: "18px", color: "#5F6368", margin: 0 }}>
              Find a learning track, meet a collaborator, or start a
              conversation.
            </p>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <Link
              to={`/overview`}
              style={{
                padding: "0 24px",
                height: "52px",
                backgroundColor: "#4284F4",
                color: "#FFFFFF",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Explore The Overview &rarr;
            </Link>
          </div>
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

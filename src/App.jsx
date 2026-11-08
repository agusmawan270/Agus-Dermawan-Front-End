import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import HomePage from "./Home";
import AboutPage from "./About";
import OverviewPage from "./Overview";
import LogoGdgoc from "./assets/gdgoc.png";
import MoreAboutPage from "./MoreAbout";
import FAQsPage from "./FAQ";
export default function App() {
  const getNavStyle = ({ isActive }) => ({
    padding: "14px 20px",
    borderRadius: "100px",
    textDecoration: "none",
    fontSize: "16Fpx",
    backgroundColor: isActive ? "#EAF2FF" : "transparent",
    color: isActive ? "#1967D2" : "#5F6368",
    fontWeight: isActive ? "700" : "400",
  });
  return (
    <BrowserRouter>
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        {/* --- NAVBAR --- */}
        <header
          style={{
            boxSizing: "border-box",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0px 64px",
            width: "100%",
            height: "104px",
            borderBottom: "1px solid #DADCE0",
            backgroundColor: "#FFFFFF",
            position: "sticky",
            top: 0,
            zIndex: 1000,
          }}
        >
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "11.31px",
              textDecoration: "none",
            }}
          >
            <div
              style={{ fontWeight: "bold", color: "#1a73e8", fontSize: "20px" }}
            >
              <img
                src={LogoGdgoc}
                alt="Logo GDGoC UGM"
                style={{ width: "100px", height: "50px", objectFit: "contain" }}
              />
            </div>
            <div style={{ textAlign: "left" }}>
              <span
                style={{
                  fontWeight: "700",
                  color: "#202124",
                  fontSize: "15px",
                  display: "block",
                  lineHeight: "1.2",
                }}
              >
                Google Developer Groups
              </span>
              <span style={{ fontSize: "12px", color: "#5F6368" }}>
                On Campus • Universitas Gadjah Mada
              </span>
            </div>
          </Link>

          <nav style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <NavLink to="/" style={getNavStyle} end>
              Home
            </NavLink>
            <NavLink to="/about" style={getNavStyle}>
              About
            </NavLink>
            <NavLink to="/overview" style={getNavStyle}>
              Overview
            </NavLink>
          </nav>

          <Link
            to="/overview"
            style={{
              display: "flex",
              alignItems: "center",
              padding: "0px 24px",
              gap: "16px",
              height: "52px",
              backgroundColor: "#4284F4",
              borderRadius: "8px",
              color: "#FFFFFF",
              textDecoration: "none",
              fontWeight: "500",
              fontSize: "16px",
            }}
          >
            <span>Find your track</span>
            <span>&rarr;</span>
          </Link>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/overview" element={<OverviewPage />} />
          <Route path="/moreabout" element={<MoreAboutPage />} />
          <Route path="/faq" element={<FAQsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

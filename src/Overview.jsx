import { useState, useEffect } from 'react';
import Logo3 from './assets/logo3.png';
import LogoGdgoc from './assets/gdgoc.png';
import { Link } from 'react-router-dom';
export default function OverviewPage() {
  const [tracks, setTracks] = useState([]);
  const [loadingTracks, setLoadingTracks] = useState(true);
  
  // 1. STATE activeTrack diletakkan di sini (di luar fungsi lain, sejajar dengan state utama)
  const [activeTrack, setActiveTrack] = useState(null);
  // Mengambil data tracks dari API
  useEffect(() => {
    async function ambilDataTracks() {
      try {
        const response = await fetch('https://gdgoc-ugm-api.vercel.app/api/tracks');
        const hasil = await response.json();
        setTracks(hasil.data || []);
      } catch (error) {
        console.error("Gagal mengambil data tracks:", error);
      } finally {
        setLoadingTracks(false);
      }
    }
    ambilDataTracks();
  }, []);

  const learningFormats = [
    {
      title: "Study groups",
      desc: "Build foundations with peers. Work through a topic, compare approaches, and make space for questions.",
      bestFor: "Best for • Learning the fundamentals",
      icon: "📖"
    },
    {
      title: "Hands-on workshops",
      desc: "Get introduced to a tool or method, follow a practical exercise, and take away something to keep exploring.",
      bestFor: "Best for • Trying something new",
      icon: "💻"
    },
    {
      title: "Project circles",
      desc: "Connect research, design, and development around a shared problem. Learn through making and feedback.",
      bestFor: "Best for • Putting skills into practice",
      icon: "👥"
    },
    {
      title: "Knowledge sharing",
      desc: "Walk through an idea, share a lesson from your process, and discover how other students approach their work.",
      bestFor: "Best for • Exchanging perspectives",
      icon: "💡"
    }
  ];

  const journeySteps = [
    { number: "01", title: "Discover", desc: "Explore a topic and find the questions you want to answer." },
    { number: "02", title: "Practice", desc: "Try an exercise, work through a challenge, and ask for help." },
    { number: "03", title: "Build", desc: "Apply your learning to a small idea with a clear purpose." },
    { number: "04", title: "Share", desc: "Show your process, gather feedback, and help someone else." }
  ];

  return (
    <div style={{ backgroundColor: '#FFFFFF', fontFamily: 'sans-serif', textAlign: 'left', width: '100%', boxSizing: 'border-box' }}>
      
      {/* --- 1. OVERVIEW INTRODUCTION SECTION --- */}
      <section style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '64px 96px 56px 96px',
        maxWidth: '1440px',
        margin: '0 auto',
        boxSizing: 'border-box',
        gap: '64px'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '920px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '7px', height: '7px', backgroundColor: '#4284F4', borderRadius: '50%' }}></div>
            <span style={{ fontSize: '12px', fontWeight: '500', textTransform: 'uppercase', color: '#5F6368', letterSpacing: '0.5px' }}>
              OVERVIEW • PROGRAMS & LEARNING TRACKS
            </span>
          </div>

          <h1 style={{ fontSize: '72px', fontWeight: '700', lineHeight: '108%', color: '#242424', margin: 0 }}>
            Find your spark. <br />
            <span style={{ color: '#4284F4' }}>Build your own path.</span>
          </h1>

          <p style={{ fontSize: '21px', lineHeight: '155%', color: '#5F6368', margin: 0 }}>
            Explore how research, creativity, and development connect. Start with one interest. Grow through practice and the people around you.
          </p>
        </div>

        {/* Ilustrasi Artwork Overview */}
        <div style={{
          width: '280px',
          height: '280px',
          backgroundColor: '#EAF2FF',
          borderRadius: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}>
          <span style={{ color: '#4284F4', fontWeight: 'bold' }}>
            <img
            src={Logo3} 
            alt="Logo3"
            style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'fill' // Membuat gambar merata memenuhi seluruh kotak tanpa menyisakan ruang hitam
            
        }}
        /> 
          </span>
        </div>
      </section>

      {/* --- 2. SUB-NAVIGATION BAR (Anchor links) --- */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: '24px 96px',
        gap: '48px',
        maxWidth: '1440px',
        margin: '0 auto',
        borderTop: '1px solid #DADCE0',
        borderBottom: '1px solid #DADCE0',
        boxSizing: 'border-box'
      }}>
        <a href="#tracks" style={{ fontSize: '15px', fontWeight: '700', color: '#1967D2', textDecoration: 'none' }}>Learning tracks &darr;</a>
        <a href="#formats" style={{ fontSize: '15px', fontWeight: '400', color: '#5F6368', textDecoration: 'none' }}>Learning formats &darr;</a>
        <a href="#journey" style={{ fontSize: '15px', fontWeight: '400', color: '#5F6368', textDecoration: 'none' }}>Your learning journey &darr;</a>
        <a href="#starting-point" style={{ fontSize: '15px', fontWeight: '400', color: '#5F6368', textDecoration: 'none' }}>Find a starting point &darr;</a>
      </div>

      {/* --- 3. LEARNING TRACK OVERVIEW (API Tracks & Comparison Table) --- */}
      <section id="overview" style={{ padding: '16px 96px 88px', maxWidth: '1440px', margin: '0 auto', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '36px' }}>
          <div style={{ textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
              <div style={{ width: '7px', height: '7px', backgroundColor: '#4284F4', borderRadius: '50%' }}></div>
              <span style={{ fontSize: '12px', fontWeight: '500', textTransform: 'uppercase', color: '#5F6368' }}>Find your starting point</span>
            </div>
            <h2 style={{ fontSize: '48px', fontWeight: '700', lineHeight: '112%', color: '#242424', margin: 0 }}>
              Many interests. One shared journey.
            </h2>
          </div>
        </div>

        {loadingTracks ? (
          <div style={{ textAlign: 'center', color: '#5f6368', padding: '40px' }}>Sedang memuat data Learning Track...</div>
        ) : (
          <div style={{ display: 'flex', gap: '24px', alignItems: 'stretch', width: '100%', transition: 'all 0.4s ease' }}>
            {tracks.map((item, index) => {
              const trackKey = item.id || index;
              const isSelected = activeTrack === trackKey;

              // Kamus teks deskripsi khusus yang berbeda-beda untuk tiap track
              const customDetails = {
                'research-discovery': 'A deep focus on user research, interviews, needs analysis, and data-driven problem-solving methodologies to validate ideas before moving into the development phase.',
                'design-creativity': 'Learning modern UI/UX principles, creating interactive wireframes and design systems, and prototyping applications using Figma in a collaborative manner.',
                'development': 'Hands-on practice in building responsive web and mobile applications using React, state management, and REST API integration, following industry standards.'
              };

              // Ambil teks unik berdasarkan id item, atau fallback ke teks bawaan API
              const detailText = customDetails[item.id] || item.detail || '';

              return (
                <div 
                  key={trackKey} 
                  onClick={() => setActiveTrack(isSelected ? null : trackKey)}
                  style={{ 
                    flex: activeTrack === null ? '1' : (isSelected ? '2' : '1'),
                    border: isSelected ? '2px solid #1967D2' : '1px solid #DADCE0',
                    borderRadius: '24px', 
                    backgroundColor: isSelected ? '#FFFFFF' : '#F8F9FA', 
                    padding: '36px', 
                    textAlign: 'left', 
                    display: 'flex', 
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    boxShadow: isSelected ? '0 12px 32px rgba(25, 103, 210, 0.12)' : 'none',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  <div>
                    {/* Header Warna Kartu */}
                    <div style={{ 
                      height: isSelected ? '140px' : '90px', 
                      backgroundColor: index === 0 ? '#EAF2FF' : index === 1 ? '#FFF7DF' : '#EAF5ED', 
                      borderRadius: '16px',
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      marginBottom: '24px',
                      transition: 'all 0.4s ease'
                    }}>
                      <span style={{ color: '#5F6368', fontWeight: 'bold', fontSize: '14px' }}>{item.category}</span>
                    </div>

                    <span style={{ fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', color: '#1967D2' }}>
                      {isSelected ? 'ACTIVE TRACK (CLICK TO CLOSE)' : 'CLICK TO EXPAND'}
                    </span>
                    
                    <h3 style={{ fontSize: isSelected ? '32px' : '24px', fontWeight: '700', color: '#242424', margin: '12px 0 16px 0', transition: 'font-size 0.3s ease' }}>
                      {item.name}
                    </h3>
                    
                    <p style={{ fontSize: '16px', lineHeight: '160%', color: '#5F6368', margin: 0, textAlign: 'justify' }}>
                      {item.description}
                    </p>

                    {/* Deskripsi Tambahan yang Berbeda-beda Tiap Kartu Saat Dipilih */}
                    {isSelected && (
                      <div style={{ 
                        marginTop: '30px', 
                        padding: '25px', 
                        backgroundColor: '#F1F3F4', 
                        borderRadius: '12px',
                        animation: 'fadeIn 0.6s ease-in-out'
                      }}>
                        <h4 style={{ fontSize: '15px', color: '#202124', margin: '0 0 8px 0' }}>What you'll learn in this track:</h4>
                        <p style={{ fontSize: '15px', color: '#5F6368', lineHeight: '155%', margin: 0, textAlign: 'justify' }}>
                          {detailText}
                        </p>
                      </div>
                    )}
                  </div>

                  <div style={{ marginTop: '32px' }}>
                    <div style={{ height: '1px', backgroundColor: '#DADCE0', width: '100%', marginBottom: '20px' }}></div>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: '#1967D2', fontWeight: '600', fontSize: '15px' }}>
                        {isSelected ? 'Click again to close ' : 'Explore this track →'}
                      </span>
                      

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* --- 5. WAYS TO LEARN SECTION --- */}
      <section id="formats" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '80px 96px',
        gap: '40px',
        maxWidth: '1440px',
        margin: '0 auto',
        boxSizing: 'border-box',
        backgroundColor: '#F1F3F4',
        width: '100%'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', maxWidth: '800px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '7px', height: '7px', backgroundColor: '#4284F4', borderRadius: '50%' }}></div>
            <span style={{ fontSize: '12px', fontWeight: '500', textTransform: 'uppercase', color: '#5F6368' }}>
              WAYS TO LEARN
            </span>
          </div>
          <h2 style={{ fontSize: '48px', fontWeight: '700', lineHeight: '112%', color: '#242424', margin: 0 }}>
            The format changes. The curiosity stays.
          </h2>
          <p style={{ fontSize: '18px', lineHeight: '155%', color: '#5F6368', margin: 0 }}>
            Explore the kinds of experiences that help you move from understanding to doing.
          </p>
        </div>

        {/* 4 Format Belajar (Grid 2x2) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', width: '100%' }}>
          {learningFormats.map((fmt, i) => (
            <div key={i} style={{ border: '1px solid #DADCE0', borderRadius: '24px', padding: '32px', backgroundColor: '#FFFFFF', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#EAF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>
                {fmt.icon}
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#242424', margin: 0 }}>{fmt.title}</h3>
              <p style={{ fontSize: '16px', lineHeight: '155%', color: '#5F6368', margin: 0 }}>{fmt.desc}</p>
              <span style={{ fontSize: '13px', fontWeight: '500', color: '#1967D2', marginTop: '8px' }}>{fmt.bestFor}</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- 6. YOUR LEARNING JOURNEY (01 - 04 Steps) --- */}
      <section id="journey" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '88px 96px',
        gap: '40px',
        maxWidth: '1440px',
        margin: '0 auto',
        boxSizing: 'border-box',
        width: '100%'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', maxWidth: '800px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '7px', height: '7px', backgroundColor: '#4284F4', borderRadius: '50%' }}></div>
            <span style={{ fontSize: '12px', fontWeight: '500', textTransform: 'uppercase', color: '#5F6368' }}>
              PROGRESS, NOT PERFECTION
            </span>
          </div>
          <h2 style={{ fontSize: '48px', fontWeight: '700', lineHeight: '112%', color: '#242424', margin: 0 }}>
            A journey you can keep building on.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', width: '100%' }}>
          {journeySteps.map((step, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '16px', borderTop: '2px solid #1967D2', paddingTop: '20px' }}>
              <span style={{ fontSize: '32px', fontWeight: '700', color: '#1967D2' }}>{step.number}</span>
              <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#242424', margin: 0 }}>{step.title}</h3>
              <p style={{ fontSize: '15px', lineHeight: '155%', color: '#5F6368', margin: 0 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- 7. START WHERE YOU LIKE (Banner Kuning) --- */}
      <section id="starting-point" style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '48px 64px',
        maxWidth: '1248px',
        margin: '0 auto 88px auto',
        backgroundColor: '#FFF7DF',
        borderRadius: '24px',
        boxSizing: 'border-box',
        width: 'calc(100% - 192px)'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '500px' }}>
          <span style={{ fontSize: '12px', fontWeight: '500', textTransform: 'uppercase', color: '#B06000' }}>START WHERE YOU LIKE</span>
          <h3 style={{ fontSize: '36px', fontWeight: '700', color: '#242424', margin: 0 }}>New to tech? That’s a starting point, too.</h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '500px' }}>
          <p style={{ fontSize: '16px', lineHeight: '155%', color: '#5F6368', margin: 0 }}>
            You don’t need a finished portfolio or the perfect track choice. Pick a topic you’re curious about. If you’re unsure, tell us what interests you and we can start a conversation.
          </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <span style={{ fontWeight: '700', fontSize: '16px', color: '#000000' }}>Explore</span>
              <Link to="/about" style={{ color: '#0010eb', textDecoration: 'none', fontSize: '15px' }}>Ask about getting started</Link>
            </div>

        </div>
      </section>
{/* --- FOOTER HALAMAN HOME --- */}
      <footer style={{
        backgroundColor: '#F1F3F4',
        padding: '56px 96px 28px',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        boxSizing: 'border-box',
        width: '100%'
      }}>
        {/* Top Footer Content */}
        <div style={{
          maxWidth: '1248px',
          width: '100%',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          textAlign: 'left',
          flexWrap: 'wrap',
          gap: '40px'
        }}>
          {/* 1. Community Identity (Kiri) */}

          {/* 2. Menu Kanan (Dibungkus Flex Row agar Explore & Keep in the Loop Berjajar) */}
         {/* Top Footer Content */}
        <div style={{
          maxWidth: '1248px',
          width: '100%',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          textAlign: 'left',
          gap: '64px'
        }}>
          
          {/* 1. Kolom Kiri: Logo & Deskripsi GDGoC */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '420px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
           
              <div style={{ 
                width: '40px', 
                height: '40px', 
                backgroundColor: '#FFFFFF', 
                borderRadius: '8px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
              }}>
                <span style={{ fontWeight: 'bold', color: '#1a73e8', fontSize: '20px' }}>  
                  <img 
                           src={LogoGdgoc} 
                           alt="Logo GDGoC UGM" 
                           style={{ width: '100px', height: '50px', objectFit: 'contain' }} 
                         /></span>
              </div>
              <div>
                <span style={{ fontWeight: 'bold', color: '#202124', fontSize: '15px', display: 'block', lineHeight: '1.2' }}>Google Developer Groups</span>
                <span style={{ fontSize: '12px', color: '#5f6368' }}>On Campus • Universitas Gadjah Mada</span>
              </div>
            </div>
            <p style={{ fontSize: '16px', color: '#5F6368', lineHeight: '155%', margin: 0 }}>
              A student community for curious minds, shared learning, and technology with purpose.
            </p>
          </div>

          {/* 2. Kolom Kanan: Berisi Explore & Keep in the loop yang sejajar */}
          <div style={{ display: 'flex', gap: '96px', alignItems: 'flex-start' }}>
            
            {/* Bagian Explore */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <span style={{ fontWeight: '700', fontSize: '16px', color: '#000000' }}>Explore</span>
              <Link to="/" style={{ color: '#5F6368', textDecoration: 'none', fontSize: '15px' }}>Home</Link>
              <Link to="/about" style={{ color: '#5F6368', textDecoration: 'none', fontSize: '15px' }}>About</Link>
              <Link to="/overview" style={{ color: '#5F6368', textDecoration: 'none', fontSize: '15px' }}>Overview</Link>
            </div>

            {/* Bagian Keep in the loop */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span style={{ fontWeight: '700', fontSize: '16px', color: '#000000' }}>Keep in the loop</span>
              
              {/* Link Instagram dengan Ikon SVG */}
              <a href="https://instagram.com/gdgoc.ugm" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#5F6368', textDecoration: 'none', fontSize: '15px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                Instagram
              </a>

              {/* Link YouTube dengan Ikon SVG */}
              <a href="https://youtube.com/@gdgocugm" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#5F6368', textDecoration: 'none', fontSize: '15px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"></path>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor"></polygon>
                </svg>
                YouTube
              </a>

              <span style={{ fontSize: '14px', color: '#5F6368', marginTop: '4px' }}>Learn together. Build together.</span>
            </div>

          </div>
        </div>
        </div>
        {/* Divider Line */}
        <div style={{ maxWidth: '1248px', width: '100%', margin: '0 auto', height: '1px', backgroundColor: '#DADCE0' }}></div>

        {/* Footer Note & Copyright */}
        <div style={{
          maxWidth: '1248px',
          width: '100%',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '12px',
          color: '#5F6368',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <span>© GDGoC Universitas Gadjah Mada • 2026/2027</span>
          <span>Made for the campus. Open to possibilities.</span>
        </div>

        {/* Brand Signature Colors Bar */}
        <div style={{ maxWidth: '160px', width: '100%', height: '4px', display: 'flex' }}>
          <div style={{ flex: 1, backgroundColor: '#4284F4' }}></div>
          <div style={{ flex: 1, backgroundColor: '#EA4335' }}></div>
          <div style={{ flex: 1, backgroundColor: '#F9AB00' }}></div>
          <div style={{ flex: 1, backgroundColor: '#34A853' }}></div>
        </div>
      </footer>
    </div>
  );
}
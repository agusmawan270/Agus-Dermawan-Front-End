import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import LogoGdgoc from './assets/gdgoc.png';
export default function MoreAboutPage() {
  const { id } = useParams();
  const trackId = id || 'research-discovery'; 
  
  const [track, setTrack] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function ambilDetailTrack() {
      try {
        const response = await fetch(`https://gdgoc-ugm-api.vercel.app/api/tracks/${trackId}`);
        const hasil = await response.json();
        setTrack(hasil.data || null);
      } catch (error) {
        console.error("Gagal mengambil detail track:", error);
      } finally {
        setLoading(false);
      }
    }

    ambilDetailTrack();
  }, [trackId]);

  if (loading) {
    return (
      <div style={{ padding: '120px 96px', textAlign: 'center', fontFamily: 'sans-serif', color: '#5F6368' }}>
        Memuat detail halaman...
      </div>
    );
  }

  if (!track) {
    return (
      <div style={{ padding: '120px 96px', textAlign: 'center', fontFamily: 'sans-serif' }}>
        <h2>Halaman tidak ditemukan</h2>
        <Link to="/" style={{ color: '#1967D2', textDecoration: 'none' }}>&larr; Kembali ke Home</Link>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#FFFFFF', fontFamily: 'sans-serif', textAlign: 'left',width: '100%', margin: '0 auto', boxSizing: 'border-box' }}>
      
      {/* Konten Utama */}
      <div style={{ padding: '64px 96px 100px', maxWidth: '1248px', margin: '0 auto', boxSizing: 'border-box' }}>
        
        {/* Tombol Kembali */}
        <Link 
        to="/" 
        style={{ 
          display: 'inline-block', 
          backgroundColor: '#1967D2', 
          color: '#ffffff', 
          padding: '12px 24px', 
          borderRadius: '8px', 
          textDecoration: 'none', 
          fontWeight: '500',
          marginBottom: '20px'
        }}
      >
        &larr; Back to Home
      </Link>

        {/* Paragraf 1 */}
        <p style={{ fontSize: '18px', lineHeight: '160%', color: '#5F6368', margin: '0 0 32px 0', textAlign: 'justify' }}>
          GDGoC, which stands for Google Developer Groups on Campus (formerly known as GDSC or Google Developer Student Clubs), is a global, university-based community program supported directly by Google for students interested in developer technologies. The core mission of this organization is to bridge the persistent gap between the theoretical concepts students learn in university classrooms and the practical skills demanded by the modern tech industry. Unlike exclusive academic clubs, GDGoC is deliberately open to undergraduate and graduate students from all academic backgrounds—not just computer science or engineering—who share a curiosity for software development, UI/UX design, product management, and Google's broader ecosystem of tools.
        </p>

        {/* Paragraf 2 */}
        <p style={{ fontSize: '18px', lineHeight: '160%', color: '#5F6368', margin: '0 0 32px 0', textAlign: 'justify' }}>
          Within a peer-to-peer learning environment, members come together to grow their technical and professional capabilities through a variety of structured initiatives. Chapters regularly host hands-on workshops, intensive study jams, and tech talks featuring industry practitioners, covering high-demand fields such as web and mobile development, cloud computing, artificial intelligence, machine learning, and Flutter. Beyond technical training, GDGoC emphasizes real-world impact by encouraging students to collaborate on open-source projects, participate in hackathons, and build tangible technological solutions for local businesses and surrounding communities, often culminating in global competitions like the Google Solution Challenge.
        </p>

        {/* Paragraf 3 */}
        <p style={{ fontSize: '18px', lineHeight: '160%', color: '#5F6368', margin: 0, textAlign: 'justify' }}>
          In mid-2024, Google officially rebranded the program from GDSC to GDGoC to establish a unified identity and create a seamless transition pathway into the broader professional Google Developer Groups (GDG) network after graduation. Today, GDGoC has a massive presence across hundreds of universities worldwide, including dozens of top campuses across Indonesia. Each local chapter is spearheaded by a selected student representative known as the GDGoC Lead, who works alongside a core team to organize events, mentor peers, and foster an inclusive, collaborative tech ecosystem on campus.
        </p>

      </div>

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
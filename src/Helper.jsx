import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Setiap kali URL/path berubah, paksa window scroll ke koordinat (0,0) paling atas
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
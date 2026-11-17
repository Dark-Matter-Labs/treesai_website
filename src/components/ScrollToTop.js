import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 'instant' so a route change does not animate under the global smooth scrolling.
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

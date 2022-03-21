import { useEffect } from 'react';
import { navigate } from '@gatsbyjs/reach-router';

export default function RedirectToHomepage() {
  useEffect(() => {
    navigate('/');
  }, []);
  return null;
}

import { useRef } from 'react';
import { useInView } from 'framer-motion';

export function useScrollReveal(options = { once: true, margin: "0px 0px -50px 0px" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, options);
  
  return { ref, isInView };
}
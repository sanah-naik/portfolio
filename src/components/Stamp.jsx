import { motion } from 'framer-motion'

/* Rubber stamp that slams down when scrolled into view — starts big and
   crooked, springs to rest like it was actually stamped on the page. */
export default function Stamp({ children, className = '', delay = 0 }) {
  return (
    <motion.span
      className={`stamp ${className}`}
      initial={{ opacity: 0, scale: 2.4, rotate: 10 }}
      whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ type: 'spring', stiffness: 520, damping: 26, delay }}
    >
      {children}
    </motion.span>
  )
}

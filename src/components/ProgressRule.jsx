import { motion, useScroll } from 'framer-motion'

/* Thin printed-rule progress bar along the top edge. */
export default function ProgressRule() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-signal origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  )
}

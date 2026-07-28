import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up'
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
      x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

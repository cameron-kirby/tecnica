import { motion } from 'framer-motion'

const top = {
    initial: {opacity: 0, x: 0, y: -100},
    animate: {opacity: 1, x: 0, y: 0},
    exit: {opacity: 0, x: 0, y: -100}
}

const side = {
    initial: {opacity: 0, x: -200, y: 0},
    animate: {opacity: 1, x: 0, y: 0},
    exit: {opacity: 0, x: 0, y: -100}
}

const AnimatedPage = ({children, variation}) => {
    return (
        <motion.div variants={(variation === 'top') ? top : side} initial='initial' animate="animate" exit='exit'>
            {children}
        </motion.div>
    )
}

export default AnimatedPage
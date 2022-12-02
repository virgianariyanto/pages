import './../App.css' 
import Button from './Button'
import Footer from './Footer'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

export default function Hero() {
    return(
        <div className="w-full h-full flex items-center justify-center">
            <div className="w-5/6 h-4/5 flex flex-wrap items-center py-6">
                <motion.div initial={{y:"100%", opacity:0}} animate={{y:"0%", opacity:1}} transition={{duration:1, ease:"easeInOut"}} className="w-full md:w-4/6 pb-10 md:pb-0">
                    <h1 className="font-semibold text-xl">Virgian Jaya Ariyanto</h1>
                    <h2 className="text-sm text-slate-600">Front End Developer | Grapich Designer</h2>
                    <motion.p initial={{y: "100%"}} animate={{y: "0"}} transition={{delay:0.5, duration:1}} className="text-4xl font-extralight py-4 text-slate-700">I <span className="text-pink-600 font-semibold">love</span> to create <span className="text-violet-800 font-semibold">meaningful</span> brands.
                    </motion.p>
                    <p className="text-base font-normal pb-4 text-slate-500 xl:w-4/6">Going forward I would like to talk to your 
                    team about how I can apply my various creative skills to your upcoming project.</p>
                    <NavLink to="/Contact">
                        <Button>Contact</Button>
                    </NavLink>    
                </motion.div>
                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1, ease:"easeInOut"}} className="w-full md:w-2/6 pb-10 md:pb-0">
                    <img className="" src="./../img/pro.png" alt="" />
                </motion.div>
            <Footer />
            </div>
        </div>
    )
}
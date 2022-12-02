import { motion } from 'framer-motion'
import './../App.css'
import Button from './Button'
import Footer from './Footer'
import Input from './Input.jsx'

export default function Contact() {
    return(
        <div className="w-full h-full flex items-center justify-center">
            <div className="w-5/6 h-4/5 flex flex-wrap items-center">
                <motion.div initial={{y: "100%", opacity:0}} animate={{y: "0%", opacity:1}} transition={{duration: 1, ease: 'easeInOut'}} className="w-full md:w-4/6">
                    <p className="py-6 pr-10 text-3xl font-bold">Let's talk about your <span className="text-pink-600">project.</span> Send me a message and I will be in touch within one business day</p>
                    <h1 className="font-semibold text-xl">Virgian Jaya Ariyanto</h1>
                    <h2 className="text-sm">Grapich Designer</h2>
                    <p className="text-base pt-4 text-slate-500">Jakarta</p>
                    <p className="text-base text-slate-500">virgian.ariyanto@gmail.com</p>
                </motion.div>

                <div className="w-full md:w-2/6 mt-4 py-4">
                    <p className="py-4 text-lg font-semibold">Contact Me</p>
                    <form action="">
                        <div className="pb-4">
                            <Input.Label htmlFor="name">Name</Input.Label>
                            <Input id="name" />
                        </div>
                        <div className="pb-4">
                            <Input.Label htmlFor="email">Email</Input.Label>
                            <Input id="email" />
                        </div>
                        <div className="pb-4">
                            <Input.Label htmlFor="message">Message</Input.Label>
                            <Input.TextArea id="message"></Input.TextArea>
                        </div>
                        <Button>Send</Button>
                    </form>
                </div>
                <Footer />
            </div>
        </div>
    )
}
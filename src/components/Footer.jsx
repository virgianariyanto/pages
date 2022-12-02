import './../App.css'
import {IconBrandInstagram, IconBrandGithub, IconBrandBehance} from '@tabler/icons'

export default function Footer() {
    return(
        <div className="w-5/6 h-16 flex flex-wrap items-center justify-between md:absolute md:bottom-0 mt-6">
            <div className="flex gap-x-2">
                <a href="https://www.instagram.com/sm.ariyanto/" className="border border-slate-200 rounded-full w-9 h-9 flex items-center justify-center hover:bg-gradient-to-b from-pink-500 to-red-500 hover:text-white"><IconBrandInstagram /></a>
                <a href="https://github.com/virgianariyanto" className="border border-slate-200 rounded-full w-9 h-9 flex items-center justify-center hover:bg-slate-900 hover:text-white"><IconBrandGithub /></a>
                <a href="" className="border border-slate-200 rounded-full w-9 h-9 flex items-center justify-center hover:bg-blue-600 hover:text-white"><IconBrandBehance /></a>
            </div>
            <div>
                <p className="text-xs text-slate-400 py-4">Copyright © 2022 by Virgian Jaya Ariyanto | All right reserved</p>
            </div>
        </div>
    )
}
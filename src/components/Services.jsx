import Card from "./Card"
import './../App.css' 
import Footer from "./Footer"

export default function Services() {
    return(
        <div className="w-full h-full flex flex-wrap justify-center items-center mx-auto py-20">
            <div className="w-5/6 flex flex-wrap justify-center gap-6 xl:gap-10">
                <p className="w-full text-center text-2xl text-slate-700 font-semibold">My Services
                </p>
                <Card>
                    <Card.Body><img src="./../Public/img/web-designer.jpg" className=""/></Card.Body>
                    <Card.Footer>
                        <p className="text-slate-800 text-base group-hover:text-white md:text-md font-bold text-center">Front End Web Development</p>
                        <p className="text-sm text-slate-400 group-hover:text-white md:text-xs text-center py-2">Web page design services</p>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body><img src="./../Public/img/graphic-designer.jpg" className="" /></Card.Body>
                    <Card.Footer>
                        <p className="text-slate-800 text-base group-hover:text-white md:text-md font-bold text-center">Logo Designer & Brand Identity</p>
                        <p className="text-sm text-slate-400 group-hover:text-white md:text-xs text-center py-2">Offering graphic design and full brand services</p>
                    </Card.Footer>
                </Card>
                <div className="w-full text-center text-xs text-slate-200">
                    <a href="https://www.vecteezy.com/free-vector/designer">Designer Vectors by Vecteezy</a>
                </div>
                <Footer />
            </div>
        </div>
    )
}
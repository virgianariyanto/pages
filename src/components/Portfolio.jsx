import Card from "./Card"
import './../App.css' 
import Footer from "./Footer"

export default function Portfolio() {
    return(
        <div className="w-full h-full flex flex-wrap justify-center items-center mx-auto py-20">
            <div className="w-5/6 flex flex-wrap justify-center gap-6 xl:gap-10">
                <p className="w-full text-center text-2xl text-slate-700 font-semibold">Logo & Brand Identity</p>
                <Card>
                    <Card.Body><img src="./../Public/img/Barber.jpg" className=""/></Card.Body>
                    <Card.Footer>
                        <p className="text-slate-800 text-base group-hover:text-white md:text-xs font-medium">Richard Shaves & Cuts</p>
                        <p className="text-sm text-slate-400 group-hover:text-white md:text-xs">8 Augusts 2022</p>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body><img src="./../Public/img/cc.jpg" className="" /></Card.Body>
                    <Card.Footer>
                        <p className="ext-slate-800 text-base group-hover:text-white md:text-xs font-medium">The Cat Cafe</p>
                        <p className="text-sm text-slate-400 group-hover:text-white md:text-xs">22 July 2022</p>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body><img src="./../Public/img/goat.jpg" className="" /></Card.Body>
                    <Card.Footer>
                        <p className="ext-slate-800 text-base group-hover:text-white md:text-xs font-medium">Goat Farm</p>
                        <p className="text-sm text-slate-400 group-hover:text-white md:text-xs">22 June 2022</p>
                    </Card.Footer>   
                </Card>
                <Card>
                    <Card.Body><img src="./../Public/img/Century.jpg" className="" /></Card.Body>
                    <Card.Footer>
                        <p className="ext-slate-800 text-base group-hover:text-white md:text-xs font-medium">Century</p>
                        <p className="text-sm text-slate-400 group-hover:text-white md:text-xs">1 Mei 2022</p>
                    </Card.Footer>                   
                </Card>
                
                <Footer />
            </div>
        </div>
    )
}
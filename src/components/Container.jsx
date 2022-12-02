import './../App.css' 

export default function Container ({children}) {
    return(
        <div className="bg-white w-5/6 md:w-11/12 h-5/6 rounded-lg efek-shadow relative overflow-scroll overflow-x-hidden md:overflow-y-hidden">{children}</div>
    )
}
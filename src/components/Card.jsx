function Card ({children}) {
    return(
        <div className="shadow-lg rounded-lg overflow-hidden w-5/6 md:w-[23%] lg:w-[21%] group hover:bg-pink-600 relative hover:cursor-pointer">{children}</div>
    )
  }

  function Title ({children}) {
    return(
        <h1 className="font-semibold text-xl pt-6 pb-2 px-6 border-b-2 border-slate-100">{children}</h1>
    )
  }

  function Body ({children}) {
    return (
        <div className="">{children}</div>
    )
  }

  function Footer ({children}) {
    return(
      <div className="py-2 px-4">{children}</div>
    )
  }

  Card.Title = Title;
  Card.Body = Body;
  Card.Footer = Footer;

  export default Card;
export default function Button (props) {
    const {className = "px-4 py-2 text-white bg-pink-500 hover:bg-pink-600 transition-all rounded", text, children} = props;
    return(
      <button {...props} className={`${className}`}>
        {text || children}
      </button>
    )
  }

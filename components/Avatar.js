function Avatar ({url, className}) {
    return <img  
        loading="lazy" 
        className={`h-10 rounded-full cursor-pointer transition duration-200 transform hover:scale-110 ${className}`} 
        src={url} alt="Avatar" />
}

export default Avatar;
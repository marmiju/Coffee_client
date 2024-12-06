

const Button = ({onclick,children,}) => {
    return (
        <button className="text-sm px-4 py-2 bg-[#E3B577] text-[#331A15] flex justify-center rounded">
            <img src="/src/assets/images/icons/1.png" className="h-4 w-4 mx-2"></img>
            <p>{children}</p>   
        </button>
    );
};

export default Button;
import { Children } from "react";

const Button = ({onclick,Children}) => {
    return (
        <button className="text-sm border p-4 bg-black">
            <p>{Children}</p>   
        </button>
    );
};

export default Button;
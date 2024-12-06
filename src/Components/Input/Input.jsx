
const Input = ({label, type , palceholder, name,onclick}) => {


    return (
       <div className="grid grid-cols-1 text-start gap-2 mt-5">
        <label>{label}</label>
        <input onClick={onclick} type={type} placeholder={palceholder} name={name} className="input w-full " />
       </div>
    );
};

export default Input;
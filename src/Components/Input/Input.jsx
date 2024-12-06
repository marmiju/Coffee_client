
const Input = ({label, type , palceholder, name}) => {


    return (
        <div>
            <label>{label}</label>
                <input type={type} name={name} className="input" placeholder={palceholder}></input>
        </div>
    );
};

export default Input;
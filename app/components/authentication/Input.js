

const Input = ({
    type,
    name,
    style,
    onChange,
    disabled,
    value,
    id,
    required,
    placeholder,
}) => {
    return (
        <input
            type={type}
            required={required}
            name={name}
            id={id}
            disabled={disabled}
            onChange={onChange}
            placeholder={placeholder}
            defaultValue={value}
            className={`
        w-full p-4 
        text-[white]
        appearance-none 
        text-lg border-b-2 
        bg-[#00555576]
        border-2
        border-[#005555] 
        disabled:text-black 
        focus:border-b-[#005555]  outline-none
        disabled:bg-neutral-300 
         transition 
         rounded-md duration-300 ease-in-out
          focus:ring-[5px] focus:ring-primary-300
         placeholder:text-white
        disabled:cursor-not-allowed 
        disabled:opacity-30 ${style} `}
        />
    );
};

export default Input;

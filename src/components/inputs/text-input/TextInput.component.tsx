import "./textInput.style.scss";

interface props {
  label: string;
  value: string;
  setValue: Function;
  type?: "text" | "email";
}

const TextInput = ({ label, value, setValue, type = "text" }: props) => {
  return (
    <div className="text-input flex flex-fd-c">
      <label className="fs-subtitle" htmlFor={label}>
        {`${label} =>`}
      </label>
      <input
        className="fs-subtitle"
        type={type}
        id={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default TextInput;

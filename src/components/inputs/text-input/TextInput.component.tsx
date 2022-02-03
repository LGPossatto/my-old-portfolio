import "./textInput.style.scss";

interface props {
  id: string;
  label: string;
  value: string;
  setValue: Function;
  type?: "text" | "email";
}

const TextInput = ({ id, label, value, setValue, type = "text" }: props) => {
  return (
    <div className="text-input flex flex-fd-c">
      <label className="fs-subtitle" htmlFor={id}>
        {`${label} =>`}
      </label>
      <input
        className="fs-subtitle"
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default TextInput;

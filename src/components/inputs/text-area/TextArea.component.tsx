import "./textArea.style.scss";

interface props {
  label: string;
  value: string;
  setValue: Function;
}

const TextArea = ({ label, value, setValue }: props) => {
  return (
    <div className="text-area flex flex-fd-c">
      <label className="fs-subtitle" htmlFor={label}>
        {`${label} =>`}
      </label>
      <textarea
        className="fs-subtitle"
        id={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default TextArea;

import "./textArea.style.scss";

interface props {
  id: string;
  label: string;
  value: string;
  setValue: Function;
}

const TextArea = ({ id, label, value, setValue }: props) => {
  return (
    <div className="text-area flex flex-fd-c">
      <label className="fs-subtitle" htmlFor={id}>
        {`${label} =>`}
      </label>
      <textarea
        className="fs-subtitle"
        id={id}
        name={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default TextArea;

import "./ctaBtn.style.scss";

interface props {
  text: string;
  onClick?: Function;
  type?: "button" | "submit";
}

const CtaBtn = ({ text, type = "button", onClick }: props) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className="cta-btn fs-subtitle fc-reverse"
      type={type}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default CtaBtn;

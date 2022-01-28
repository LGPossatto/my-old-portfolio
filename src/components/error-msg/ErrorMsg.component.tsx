import "./errorMsg.style.scss";

interface props {
  msg: string;
}

const ErrorMsg = ({ msg }: props) => {
  return <span className="error-msg fs-text fc-danger">{msg}</span>;
};

export default ErrorMsg;

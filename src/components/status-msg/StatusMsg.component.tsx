import "./statusMsg.style.scss";

interface props {
  msg: string;
  success?: boolean;
}

const StatusMsg = ({ msg, success = false }: props) => {
  return (
    <span
      className={`status-msg fs-text ${success ? "fc-success" : "fc-danger"}`}
    >
      {msg ? `*${msg}` : ""}
    </span>
  );
};

export default StatusMsg;

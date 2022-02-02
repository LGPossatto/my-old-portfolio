import { encode } from "querystring";
import { emailExp } from "../../assets/utils/emailExp";

export const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  name: string,
  setName: React.Dispatch<React.SetStateAction<string>>,
  email: string,
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  message: string,
  setMessage: React.Dispatch<React.SetStateAction<string>>,
  setStatusMessage: React.Dispatch<React.SetStateAction<string>>,
  setStatus: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    e.preventDefault();

    // clean up
    var setSuccessMsg;
    clearTimeout(setSuccessMsg);
    setStatusMessage("");

    // check if every input is not enpty
    if (name && email && message) {
      // check if email is valid
      if (!emailExp.test(email)) {
        throw new Error("Por favor, utilize um Email valido!");
      }

      // try to submit form via netlify form submission
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          name,
          email,
          message,
        }),
      });

      if (!res) {
        throw new Error("Algo deu errado, tente novamente!");
      }

      // show success message and reset inputs
      setStatus(true);
      setStatusMessage("Obrigado por entrar em contato!");

      setSuccessMsg = setTimeout(() => setStatusMessage(""), 3000);

      setName("");
      setEmail("");
      setMessage("");
    } else {
      throw new Error("Preencha todos os campos antes de confirmar!");
    }
  } catch (err) {
    setStatus(false);
    setStatusMessage((err as { message: string }).message);
  }
};

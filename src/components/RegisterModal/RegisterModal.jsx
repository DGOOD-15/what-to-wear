import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function RegisterModal({
  isOpen,
  onClose,
  handleRegistrationSubmit,
  handleLoginLinkClick,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleAvatarUrlChange = (e) => {
    setAvatar(e.target.value);
  };

  const onRegister = (e) => {
    e.preventDefault();
    handleRegistrationSubmit({ email, password, name, avatar });
  };

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
      setName("");
      setAvatar("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Sign Up"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onRegister}
    >
      <label className="modal__label">
        Email*{" "}
        <input
          type="email"
          className="modal__input"
          id="email-register"
          placeholder="Email"
          required
          onChange={handleEmailChange}
          value={email}
        />
      </label>
      <label className="modal__label">
        Password*{" "}
        <input
          type="password"
          className="modal__input"
          id="password-register"
          placeholder="Password"
          required
          onChange={handlePasswordChange}
          value={password}
        />
      </label>
      <label className="modal__label">
        Name{" "}
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
          required
          minLength="1"
          maxLength="30"
          onChange={handleNameChange}
          value={name}
        />
      </label>
      <label className="modal__label">
        Avatar URL{" "}
        <input
          type="url"
          className="modal__input"
          id="avatarUrl"
          placeholder="Avatar URL"
          required
          onChange={handleAvatarUrlChange}
          value={avatar}
        />
      </label>
      <button
        type="button"
        className="modal__button-secondary"
        onClick={handleLoginLinkClick}
      >
        or Log in
      </button>
    </ModalWithForm>
  );
}

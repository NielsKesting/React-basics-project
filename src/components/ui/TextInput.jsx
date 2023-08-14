import "./TextInputStyle/TextInput.css";

export const TextInput = ({ onChange }) => (
  <input
    className="textInput"
    placeholder="Search recipes"
    onChange={onChange}
  ></input>
);

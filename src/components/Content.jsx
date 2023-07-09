import { useState } from "react";

const Content = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setText(event.target.text.value);
  };
  return (
    <div>
      <form onSubmit={handleChange}>
        <textarea className="textArea" name="text"></textarea>
        <br />
        <button type="submit" className="btn">Display Text</button>
      </form>
      {text}
    </div>
  );
};

export default Content;

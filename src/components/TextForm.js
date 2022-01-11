import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
  };

  const reset = () => {
    setText("");
  };

  const handleFirstChar = () => {
    let words = text.split(" ").map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    let newText = words.join(" ");
    setText(newText);
  };

  return (
    <>
      <div className="mb-3">
        <label className="form-label">
          <h1 style={{ color: props.mode === "dark" ? "#fff" : "#000" }}>
            {props.heading}
          </h1>
        </label>
        <textarea
          className="form-control"
          id="textBox"
          rows="8"
          value={text}
          style={{
            backgroundColor: props.mode === "dark" ? "#000" : "#fff",
            color: props.mode === "dark" ? "#fff" : "#000",
          }}
          onChange={handleChange}
        ></textarea>
        <button
          className="btn btn-primary mt-3"
          onClick={handleUpClick}
          disabled={text.length === 0}
        >
          UpperCase
        </button>
        <button
          className="btn btn-primary mt-3 mx-1"
          onClick={handleLoClick}
          disabled={text.length === 0}
        >
          LowerCase
        </button>
        <button
          className="btn btn-primary mt-3 mx-1 "
          onClick={handleFirstChar}
          disabled={text.length === 0}
        >
          Capitalize First Letter
        </button>
        <button
          className="btn btn-primary mt-3 "
          onClick={reset}
          disabled={text.length === 0}
        >
          Reset
        </button>
      </div>

      <div className="container">
        <h6>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-header">Details</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Words{" "}
                <span className="rightSide">
                  {" "}
                  {
                    text.split(" ").filter((el) => {
                      return el.length !== 0;
                    }).length
                  }
                </span>
              </li>
              <li className="list-group-item">
                Characters <span className="rightSide">{text.length} </span>
              </li>
              <li className="list-group-item">
                Sentences{" "}
                <span className="rightSide">
                  {" "}
                  {text.split(/[\\.!\?]/).length - 1}
                </span>
              </li>
            </ul>
          </div>
        </h6>
      </div>
    </>
  );
}

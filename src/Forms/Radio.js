import React from "react";

const Radio = ({ pergunta, options, id, onChange, value ,active}) => {
  if(active===false) return null
  return (
    <>
      <fieldset
        style={{
          marginBottom: "1rem",
          padding: "2rem",
          border: "2px solid black",
          borderRadius: "0.5rem",
        }}
      >
        <legend style={{ fontWeight: "bold", fontFamily: "monospace" }}>
          {pergunta}
        </legend>

        {options.map((option) => (
          <label
            key={option}
            style={{ marginBottom: "1rem", fontFamily: "monospace" }}
          >
            <input
              type="radio"
              id={id}
              value={option}
              onChange={onChange}
              checked={value === option}
            />
            {option}
          </label>
        ))}
      </fieldset>
    </>
  );
};

export default Radio;

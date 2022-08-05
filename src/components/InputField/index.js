import React from "react";

const InputField = (props) => {
  const {
    type,
    name,
    placeholder,
    tabIndex,
    value,
    onChange = () => {},
  } = props;
  return (
    <div>
      {type == "textarea" ? (
        <fieldset>
          <textarea
            {...props}
            name={name}
            placeholder={placeholder}
            tabIndex={tabIndex}
            required
          ></textarea>
        </fieldset>
      ) : (
        <fieldset>
          <input
            {...props}
            name={name}
            placeholder={placeholder}
            type={type}
            value={value}
            tabIndex={tabIndex}
            required
            onChange={onChange}
            autoFocus
          />
        </fieldset>
      )}
    </div>
  );
};

export default InputField;

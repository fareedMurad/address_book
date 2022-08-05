import React from "react";

const Button = (props) => {
  const { name, type, id, dataSubmit, value } = props;
  return (
    <fieldset>
      <button name={name} type={type} id={id} data-submit={dataSubmit}>
        {value}
      </button>
    </fieldset>
  );
};
export default Button;

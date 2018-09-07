import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const TextAreaFieldGroup = ({
  name,
  placeholder,
  value,
  errors,
  info,
  onChange
}) => {
  return (
    <div className="form-group">
      <textarea
        className={classnames("form-control form-control-lg", {
          "is-invalid": errors
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {errors && <div className="invalid-feedback">{errors}</div>}
    </div>
  );
};

TextAreaFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  info: PropTypes.string,
  errors: PropTypes.string
};

export default TextAreaFieldGroup;

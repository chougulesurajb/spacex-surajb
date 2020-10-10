import React from "react";
import PropTypes from "prop-types";

const Button = ({ type, selected, label, click, value }) => (
  <div className="fbtn-wrap">
    <button
      type="button"
      className={`fbtn-btn fbtn-btn-${selected ? "s" : "ns"}`}
      onClick={() => click(type, value)}
    >
      {label}
      {selected && <span className="fbtn-cross"> x </span>}
    </button>
  </div>
);

Button.defaultProps = {
  type: "",
  selected: false,
  label: "",
  click: () => {},
  value: "",
};

Button.propTypes = {
  type: PropTypes.string,
  selected: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  click: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Button;

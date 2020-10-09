import React from "react";

function Button({ type, selected, label, click, value }) {
  return (
    <div className="fbtn-wrap">
      <button
        className={`fbtn-btn fbtn-btn-${selected ? "s" : "ns"}`}
        onClick={() => click(type, value)}
      >
        {label}
        {selected && <span className="fbtn-cross"> x </span>}
      </button>
    </div>
  );
}

export default Button;

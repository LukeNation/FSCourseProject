import React from "react";

export const VisibilityCrontol = props => {
  return (
    <div className="form-check">
      <input
        type="checkbox"
        className="form-check"
        checked={props.isChecked}
        onChange={ e => props.callback(e.target.checked)}
      />
      <label htmlFor="form-check-label">
        { props.description }
      </label>
    </div>
  );
};
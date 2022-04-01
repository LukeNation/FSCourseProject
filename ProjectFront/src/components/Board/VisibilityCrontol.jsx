import React from "react";

export const VisibilityCrontol = props => {
  return (
    <div className="form-check m-2">
      <input
        type="checkbox"
        className="form-check-input"
        id="flexCheckDefault"
        checked={props.isChecked}
        onChange={ e => props.callback(e.target.checked)}
      />
      <label className="form-check-label text-white">
         { props.description }
      </label>
    </div>
  );
};
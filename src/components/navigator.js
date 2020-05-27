import React from "react";

import "./navigator.scss";

const Navigator = () => {
  return (
    <div className="navigator">
      <div class="prev sc-form-button sc-md">
        <button type="button">
          <i class="sc-icon-cross"></i>

          <span>Cancel</span>
        </button>
      </div>

      <div class="next sc-form-button sc-md">
        <button type="button">
          <i class="sc-icon-right"></i>

          <span>Next step</span>
        </button>
      </div>
    </div>
  );
};

export default Navigator;

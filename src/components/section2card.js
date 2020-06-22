import React from "react";

export default function section2card({ Icon, content, title }) {
  return (
    <div className="column mb-sm-1	 ">
      <div class="columns is-multiline card main-card pr-3 ">
        <div class="card-content">
          <div className="columns mr-0 is-mobile">
            <div className="column d-flex justify-content-center ">
              <Icon />
            </div>
            <div className="column is-four-fifths">
              <h1
                style={{ color: "#082d52", fontWeight: "500" }}
                className="is-size-4"
              >
                {title}
              </h1>
              <p className="subtitle">{content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

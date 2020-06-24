import React from "react";
import { Gitlab, Twitter, LinkedIn, Telegram } from "./social";
function footer() {
  return (
    <footer className="footer">
      <div className="colums">
        <div className="column content has-text-centered">
          <p className="is-size-4 ">
            You can say{" "}
            <a
              href="mailto:certel@hotmail.com"
              target="_blank"
              className="box-shadow-red say-hello"
            >
              hello
            </a>{" "}
            to me below or you can{" "}
            <span className="box-shadow-green">hire me.</span>
          </p>
        </div>
        <div className="colum ">
          <div className="footer-social">
            <a target="_blank" href="https://gitlab.com/itoldyou/">
              <Gitlab />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/mcertel/">
              <LinkedIn />
            </a>{" "}
            <a href="https://twitter.com/certel1st" target="_blank">
              <Twitter />
            </a>
            <a href="https://t.me/mcertel" target="_blank">
              <Telegram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer;

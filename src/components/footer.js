import React from "react"

function footer() {
  return (
    <footer className="footer">
      <div class="content has-text-centered">
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
          <span className="box-shadow-green">hire me</span>
        </p>
      </div>
    </footer>
  )
}

export default footer

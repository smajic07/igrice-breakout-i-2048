import React from "react";
import Board from "./Board";

export default function IgricaBreakout({ stranica, setStranica }) {
  return (
    <div style={{ color: "white" }}>
      <Board />
      <br />
      <div
        className="link link2"
        onClick={() => {
          setStranica("home");
        }}
      >
        ← Home
      </div>
      <footer className="futer">
        <p>
          <span>
            Copyright © 2021 All Rights Reserved by{" "}
            <a
              className="link"
              href="mailto:smajic.edin.7@gmail.com"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Send me an email"
            >
              Edin Smajić
            </a>
          </span>
          .
        </p>
      </footer>
    </div>
  );
}

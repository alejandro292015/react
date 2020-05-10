import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Cabezera extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">
            Vida Sana
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Actividad fisica
                </a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Rutinas
                </a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">
                 Dieta
                </a>
              </li>
            </ul>
          </div>
        </nav>

      </div>

    );
  }
}

export default Cabezera;

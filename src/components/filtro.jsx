import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Ingredientes extends Component {
  render() {
    return (
      <div>
      <form>
          <div class="form-row" >
            <div class="col">
            <label for="exampleInputEmail1">Edad</label>
 
              <input type="text" class="form-control" placeholder="Pais" />
            </div>
            <div class="col">
            <label for="exampleInputEmail1">Peso</label>
              <input type="text" class="form-control" placeholder="Ciudad" />
            </div>
            <div class="col">
            <label for="exampleInputEmail1">Estatura</label>
              <input type="text" class="form-control" placeholder="Ciudad" />
            </div>
            <div class="col mt-5" >
            <button type="submit" class="btn btn-primary">Buscar rutina </button>
            </div>
          </div>
        </form>
      </div>
      
    );
  }
}

export default Ingredientes;

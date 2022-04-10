import React, { Component } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import axios from "axios";
class App extends Component {
  constructor(props) {
    super(props);
    //Datos iniciales de la API
    this.state = {
      data: []
    };
    axios.get("https://my-json-server.typicode.com/ijrios/prueba/sensores").then(res => {
      //Actualizar la tabla de reacciones
      this.setState({
        posts: res.data,
        data: res.data.slice(0, 2),
        pages: res.data.length / 2,
        loading: false
      });
    });
  }
  render() {
    const columns = [
      {
        Header: "Sensor",
        accessor: "title",
        style: {
          textAlign: "center"
        },
        width: 100,
        maxWidth: 100,
        minWidth: 100
      },
      {
        Header: "Valor",
        accessor: "value",
        style: {
          textAlign: "center"
        },
        width: 100,
        maxWidth: 100,
        minWidth: 100
      },
      {
        Header: "Signo",
        accessor: "signo",
        style: {
          textAlign: "center"
        },
        width: 100,
        maxWidth: 100,
        minWidth: 100
      },{
        Header: "Fecha",
        accessor: "fecha",
        style: {
          textAlign: "center"
        },
        width: 100,
        maxWidth: 100,
        minWidth: 100
      }
    ];
    return (
      <center>
      <ReactTable className="table"
        columns={columns}
        data={this.state.data}
        pages={this.state.pages}
        loading={this.state.loading}
        filterable
        onPageChange={pageIndex => {
          let pagesize = 2;
          let low = pageIndex * pagesize;
          let high = pageIndex * pagesize + pagesize;
          axios.get("https://my-json-server.typicode.com/ijrios/prueba/sensores").then(res => {
            // Actualiza react-table
            this.setState({
              posts: res.data,
              data: res.data.slice(low, high),
              pages: res.data.pages,
              loading: false
            });
          });
        }}
        defaultPageSize={2}
        noDataText={"Loading..."}
        manual //forma a React Table que manejará la clasificación y la paginación del lado del servidor
      />
      </center>
    );
  }
}

export default App;

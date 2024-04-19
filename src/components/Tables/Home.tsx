import React, { Component } from "react";
import { ReactTabulator, ColumnDefinition } from "react-tabulator";
import "react-tabulator/lib/styles.css";
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css";
import DateEditor from "react-tabulator/lib/editors/DateEditor";
import MultiValueFormatter from "react-tabulator/lib/formatters/MultiValueFormatter";

interface PetOption {
  id: string;
  name: string;
}

interface CustomData {
  id: number;
  name: string;
  age: number;
  color: string;
  dob: string;
  pets: string[];
  passed: boolean;
}

interface State {
  data: CustomData[];
}

const colorOptions = {
  "": "&nbsp;",
  red: "red",
  green: "green",
  yellow: "yellow",
};

const petOptions: PetOption[] = [
  { id: "cat", name: "cat" },
  { id: "dog", name: "dog" },
  { id: "fish", name: "fish" },
];

const editableColumns: ColumnDefinition[] = [
  {
    title: "Name",
    field: "name",
    width: 150,
    editor: "input",
    headerFilter: "input",
  },
  {
    title: "Age",
    field: "age",
    hozAlign: "left",
    formatter: "progress",
    // editor: "progress",
  },
  {
    title: "Favourite Color",
    field: "color",
    editor: "select",
    editorParams: {
      allowEmpty: true,
      showListOnEmpty: true,
      values: colorOptions,
    },
    headerFilter: "select",
    headerFilterParams: { values: colorOptions },
  },
  {
    title: "Date Of Birth",
    field: "dob",
    sorter: "date",
    // editor: DateEditor,
    // editorParams: { format: "MM/DD/YYYY" },
  },
  {
    title: "Pets",
    field: "pets",
    sorter: (a, b) => a.toString().localeCompare(b.toString()),
    editorParams: { values: petOptions },
    formatter: MultiValueFormatter,
    formatterParams: { style: "PILL" },
  },
  {
    title: "Passed?",
    field: "passed",
    hozAlign: "center",
    formatter: "tickCross",
    editor: true,
  },
];

class Home extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      data: [],
    };
  }

  setData = () => {
    // Simulate fetching data asynchronously
    setTimeout(() => {
      // Replace this with your actual data fetching logic
      const data: CustomData[] = [
        // Sample data
        {
          id: 1,
          name: "John Doe",
          age: 25,
          color: "red",
          dob: "01/01/1995",
          pets: ["cat", "dog"],
          passed: true,
        },
        // Add more data as needed
      ];
      this.setState({ data });
    }, 1000);
  };

  clearData = () => {
    this.setState({ data: [] });
  };

  render() {
    const options = {
      height: 150,
      movableRows: true,
      movableColumns: true,
    };

    return (
      <div>
        <h3>
          Asynchronous data: (e.g. fetch) -{" "}
          <button onClick={this.setData}>Set Data</button>
          <button onClick={this.clearData}>Clear</button>
        </h3>
        <ReactTabulator columns={editableColumns} data={this.state.data} />
      </div>
    );
  }
}

export default Home;

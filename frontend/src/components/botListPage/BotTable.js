import React from 'react';
import MaterialTable from 'material-table';
export default function BotTable() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Bot Name', field: 'name' },
      { title: 'RunTime', field: 'RunTime', type: 'numeric' },
      { title: 'Category', field: 'Category' ,lookup: { 34: 'Scraper', 63: 'Filler' }},    
    ],
    data: [
      { name: 'Mehmet', Category: 34, RunTime: 24},
      { name: 'Mark', Category: 63, RunTime: 24},
    ],
  });

  return (
    <MaterialTable
      style={{height:"60vh"}}
      title="Bot Tables"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}

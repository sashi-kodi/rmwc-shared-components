import React from 'react';
import {SimpleDataTable}  from "@rmwc/data-table";
import '@rmwc/data-table/data-table.css';

import "../scss/index.scss";

interface TableProps{
    datainfo:any;
}


  const AppTable = (props:TableProps)=>{
      const {datainfo} = props;
    return(
    <SimpleDataTable
        getRowProps={row => {
    return row[1] > 100 ? { activated: true } : {};
  }}
  getCellProps={(cell, index, isHead) => {
    return !isHead && index === 2 && !cell.includes('$')
      ? { style: { color: 'red' } }
      : {};
  }}
  headers={[['Item', 'Quantity', 'Value']]}
  data={datainfo}
/>
    )
  }
  export default AppTable;
import React from 'react';
import {DataTable,DataTableBody,  DataTableContent, DataTableHead, DataTableRow, DataTableHeadCell, DataTableCell }  from "@rmwc/data-table";
import '@rmwc/data-table/data-table.css';

import "../scss/index.scss";

  const AppTable2 = (props)=>{
    const changeSortColumn=(e)=>{
     const newsortcol= e.target.getAttribute('name');
     setSortColumn(newsortcol);
     props.sortData(newsortcol);
    }
      const {datainfo, dataheaders} = props;
      const [sortColumn, setSortColumn]=React.useState("");
    return(
<DataTable>
      <DataTableContent>
        <DataTableHead>
          <DataTableRow>
            {dataheaders.map(el=>(
               <DataTableHeadCell
               key={el}
               name={el}
               onClick={changeSortColumn}
             >
              {el}
             </DataTableHeadCell>
            ))}
          </DataTableRow>
        </DataTableHead>
        <DataTableBody>
            {datainfo.map(row=>(
            <DataTableRow key={row.name}>
              {row.map(cell=>(
                <DataTableCell>{cell}</DataTableCell>
              ))}
              
            </DataTableRow>
            ))}
          
          
        </DataTableBody>
      </DataTableContent>
    </DataTable>

    )
  }
  export default AppTable2;
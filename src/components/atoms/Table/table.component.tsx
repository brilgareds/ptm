import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import tabletStyles from './table.module.css'

export interface TabletComponentProps {
  rows: GridRowsProp
  columns: GridColDef[]
}

export default function TableComponent(props: TabletComponentProps) {
  return (
    <DataGrid
      columns={props.columns} rows={props.rows}
      getRowClassName={() => `${tabletStyles.tableContainer__row}`}
      sx={{
        boxShadow: 0,
        border: 0,
        borderRadius: 0,
        height: props.rows.length > 0 ? '20rem' : '3.125rem',
        '& .MuiDataGrid-columnSeparator': {
          visibility: 'hidden',
        },
      }}
    />
  )
}

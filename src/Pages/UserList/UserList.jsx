import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./userList.css";
import { DeleteOutline } from "@material-ui/icons";
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "user", headerName: "User", width: 160,renderCell:(params)=>{
      return(<div className="userListUser">
      <img className="userListImg" src={params.row.avatar} alt=" "></img>
      {params.row.username}
      </div>)
   }},
  { field: "email", headerName: "Email-ID", width: 160 },
  {
    field: "status",
    headerName: "Status",
     width: 120,
  },
  {
    field: "transaction",
    headerName: "Transaction",
     width: 160,
  },{
      field:"action",
        headerName:"Action",
        width:150,
        renderCell:(params)=>{
            return(
                <>
                <button className="userListEdit">Edit</button>
                <DeleteOutline className="userListDelete"/>
                </>

            )
  }},
  
];

const rows = [
  {
    id: 1,
    username: "Deepak Verma",
    avatar:
      "https://cdn.pixabay.com/photo/2014/10/06/17/30/child-476507_960_720.jpg",
    email: "deepak@gmail.com",
    status: "active",
    transaction: "$120.00",
  },{
    id: 2,
    username: "Deepak Verma",
    avatar:
      "https://cdn.pixabay.com/photo/2014/10/06/17/30/child-476507_960_720.jpg",
    email: "deepak@gmail.com",
    status: "active",
    transaction: "$120.00",
  },{
    id: 3,
    username: "Deepak Verma",
    avatar:
      "https://cdn.pixabay.com/photo/2014/10/06/17/30/child-476507_960_720.jpg",
    email: "deepak@gmail.com",
    status: "active",
    transaction: "$120.00",
  },{
    id: 4,
    username: "Deepak Verma",
    avatar:
      "https://cdn.pixabay.com/photo/2014/10/06/17/30/child-476507_960_720.jpg",
    email: "deepak@gmail.com",
    status: "active",
    transaction: "$120.00",
  },{
    id: 5,
    username: "Deepak Verma",
    avatar:
      "https://cdn.pixabay.com/photo/2014/10/06/17/30/child-476507_960_720.jpg",
    email: "deepak@gmail.com",
    status: "active",
    transaction: "$120.00",
  },{
    id: 6,
    username: "Deepak Verma",
    avatar:
      "https://cdn.pixabay.com/photo/2014/10/06/17/30/child-476507_960_720.jpg",
    email: "deepak@gmail.com",
    status: "active",
    transaction: "$120.00",
  },{
    id: 7,
    username: "Deepak Verma",
    avatar:
      "https://cdn.pixabay.com/photo/2014/10/06/17/30/child-476507_960_720.jpg",
    email: "deepak@gmail.com",
    status: "active",
    transaction: "$120.00",
  },{
    id: 8,
    username: "Deepak Verma",
    avatar:
      "https://cdn.pixabay.com/photo/2014/10/06/17/30/child-476507_960_720.jpg",
    email: "deepak@gmail.com",
    status: "active",
    transaction: "$120.00",
  },{
    id: 9,
    username: "Deepak Verma",
    avatar:
      "https://cdn.pixabay.com/photo/2014/10/06/17/30/child-476507_960_720.jpg",
    email: "deepak@gmail.com",
    status: "active",
    transaction: "$120.00",
  },{
    id: 10,
    username: "Deepak Verma",
    avatar:
      "https://cdn.pixabay.com/photo/2014/10/06/17/30/child-476507_960_720.jpg",
    email: "deepak@gmail.com",
    status: "active",
    transaction: "$120.00",
  },{
    id: 11,
    username: "Deepak Verma",
    avatar:
      "https://cdn.pixabay.com/photo/2014/10/06/17/30/child-476507_960_720.jpg",
    email: "deepak@gmail.com",
    status: "active",
    transaction: "$120.00",
  }
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
      disableSelectionOnClick
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}

// export const userCols = [
//   { field: "id", headerName: "id", width: 70 },
//   // {
//   //   field: "user",
//   //   headerName: "User",
//   //   width: 230,
//   //   renderCell: (params) => {
//   //     return (
//   //       <div className="cellWithImg">
//   //         <img className="cellImg" src={params.row.img} alt="avatar" />
//   //         {params.row.username}
//   //       </div>
//   //     );
//   //   },
//   // },
//   {
//     field: "games",
//     headerName: "games",
//     width: 300,
//   },
//   {
//     field: "username",
//     headerName: "username",
//     width: 300,
//   },
//   // {
//   //   field: "age",
//   //   headerName: "Age",
//   //   width: 100,
//   // },
//   {
//     field: "score",
//     headerName: "score",
//     width: 300,
//   },
//   // {
//   //   field: "status",
//   //   headerName: "Status",
//   //   width: 160,
//   //   renderCell: (params) => {
//   //     return (
//   //       <div className={`cellWithStatus ${params.row.status}`}>
//   //         {params.row.status}
//   //       </div>
//   //     );
//   //   },
//   // },
// ];

export const userCols = [
  // { field: "id", headerName: "ID", width: 90 },
  {
    field: "username",
    headerName: "User name",
    width: 150,
    editable: true,
  },
  {
    field: "games",
    headerName: "Games",
    width: 150,
    editable: true,
  },
  {
    field: "score",
    headerName: "Score",
    type: "number",
    width: 110,
    editable: true,
  },
  //   {
  //     field: "timeStamp",
  //     headerName: "Time Stamp",
  //     description: "This column has a value getter and is not sortable.",
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (params) =>
  //       `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  //   },
  // {
  //   field: "timeStamp",
  //   headerName: "Time Stamp",
  //   type: "number",
  //   width: 500,
  //   editable: true,
  // },
];

export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    age: 65,
  },
];

import { BiTrash } from "react-icons/bi";

export const Headings = [
 " Customer Email",	
 " Amount",
  "Tracking Number",
  "Created",
  "Order Date",
 " Status",
  "Actions" 
];
export const RefundData = [
  {
    email:"faris@faris.com",
    amount:"2500",
    trackingNO:"1122334455ASD",
    created:"12/12/12",
    OrderDate:"10/12/12",
    Status:"APPROVED",
    Action: <BiTrash size={25} color="red"/>
  },
  {
    email:"faris@faris.com",
    amount:"2500",
    trackingNO:"1122334455ASD",
    created:"12/12/12",
    OrderDate:"10/12/12",
    Status: "PENDING",
    Action: <BiTrash size={25} color="red"/>
  },
  {
    email:"faris@faris.com",
    amount:"2500",
    trackingNO:"1122334455ASD",
    created:"12/12/12",
    OrderDate:"10/12/12",
    Status: "ON_HOLD",
    Action: <BiTrash size={25} color="red"/>
  },
  {
    email:"faris@faris.com",
    amount:"2500",
    trackingNO:"1122334455ASD",
    created:"12/12/12",
    OrderDate:"10/12/12",
    Status: "REJECTED",
    Action: <BiTrash size={25} color="red"/>
  },
  {
    email:"faris@faris.com",
    amount:"2500",
    trackingNO:"1122334455ASD",
    created:"12/12/12",
    OrderDate:"10/12/12",
    Status: "PROCESSING",
    Action: <BiTrash size={25} color="red"/>
  },
];

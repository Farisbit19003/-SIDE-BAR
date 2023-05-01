import { BiTrash } from "react-icons/bi";

export const Headings = [
  "Tracking Number",
  "Delivery Fee",
  "Total",
  "Order Date",
  "Status",
  "Shipping Address",
  "Actions",
];
export const OrderData = [
  {
    deliveryFee:500,
    total:"2500",
    trackingNO:"1122334455ASD",
    address:"H#991 st#35 Moh kasmirian Gakhar Gujranwal Punjab Pakistan",
    OrderDate:"10/12/12",
    Status:"Order Pending",
    Action: <BiTrash size={25} color="red"/>
  },
  {
    deliveryFee:500,
    total:"2500",
    trackingNO:"1122334455ASD",
    address:"Gujranwal Punjab Pakistan",
    OrderDate:"10/12/12",
    Status:"Order Processing",
    Action: <BiTrash size={25} color="red"/>
  },
  {
    email:"faris@faris.com",
    amount:"2500",
    trackingNO:"1122334455ASD",
    created:"12/12/12",
    OrderDate:"10/12/12",
    Status: "Order At Local Facility",
    Action: <BiTrash size={25} color="red"/>
  },
  {
    email:"faris@faris.com",
    amount:"2500",
    trackingNO:"1122334455ASD",
    created:"12/12/12",
    OrderDate:"10/12/12",
    Status: "Order Out For Delivery",
    Action: <BiTrash size={25} color="red"/>
  },
  {
    email:"faris@faris.com",
    amount:"2500",
    trackingNO:"1122334455ASD",
    created:"12/12/12",
    OrderDate:"10/12/12",
    Status: "Order Completed",
    Action: <BiTrash size={25} color="red"/>
  },
  {
    email:"faris@faris.com",
    amount:"2500",
    trackingNO:"1122334455ASD",
    created:"12/12/12",
    OrderDate:"10/12/12",
    Status: "Order Cancelled",
    Action: <BiTrash size={25} color="red"/>
  },{
    email:"faris@faris.com",
    amount:"2500",
    trackingNO:"1122334455ASD",
    created:"12/12/12",
    OrderDate:"10/12/12",
    Status: "Order Refund",
    Action: <BiTrash size={25} color="red"/>
  },{
    email:"faris@faris.com",
    amount:"2500",
    trackingNO:"1122334455ASD",
    created:"12/12/12",
    OrderDate:"10/12/12",
    Status: "Order Failed",
    Action: <BiTrash size={25} color="red"/>
  },
];

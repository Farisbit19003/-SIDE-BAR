
import { ManOutlined } from "@ant-design/icons";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";


export const Headings=["ID","Name","Slug", "Icon", "Group", "Action"]; 
export const catTableData=[   
    {
        id:"1",
        Name:"Pants",
        Slug:"Pants",
        Icon: <ManOutlined/>,
        Group: "Clothes",
        Action:[
            <MdDelete size={25} color="red"/> ,<BiEdit size={25} />
            
        ],
      }
    ];

  

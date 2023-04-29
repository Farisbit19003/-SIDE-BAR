import { CheckOutlined, ClockCircleOutlined } from "@ant-design/icons";

export const Headings=["OrderId", "Product", "Payment", "Amount"]; 
export const recentPurchasesData=[   
    {
        orderId: '#6d3wedo5',
        product: 'Premium Shirt For Men',
        payment: {
          status: 'Success',
          icon: <CheckOutlined className="text-[#248F59] align-middle ml-2" />,
          backgroundColor: 'bg-[#DEEEE6]',
          textColor: 'text-[#248F59]'
        },
        amount: 'US$152.25'
      },
      {
        orderId: '#6d3wedo5',
        product: 'Premium Shirt For Men',
        payment: {
          status: 'Pending',
          icon: <ClockCircleOutlined className="text-[#EB5757] align-middle ml-2" />,
          backgroundColor: 'bg-[#EEDEDE]',
          textColor: 'text-[#EB5757]'
        },
        amount: 'US$152.25'
      }
    ];

  

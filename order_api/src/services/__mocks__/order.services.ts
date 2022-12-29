import OrderModel from "../../models/order.models";
import OrderItemsModel from "../../models/orderItems.models";

let orders = [
    {
        "_id": "63ada542ee9b9077f88a1284",
        "orderItems": [
            {
                "_id": "63ada542ee9b9077f88a1281",
                "product": "Orange",
                "quantity": 8
            },
            {
                "_id": "63ada542ee9b9077f88a1282",
                "product": "Banana",
                "quantity": 10
            }
        ],
        "phone": "+420702241333",
        "createdAt": "2022-12-29T14:33:38.703Z",
        "updatedAt": "2022-12-29T14:33:38.703Z"
    },
]

export const  getOrderService = async () => {
    return orders;
};

export const addNewOrderService = async (
    newOrder: any 
  ) => {
    const { orderItems, phone } = newOrder;

    // insert order item
    const orderItemsId = await orderItems.map((i: any) => new OrderItemsModel(i))

    // creating order
    const result =  await new OrderModel({orderItems: orderItemsId, phone});
        
    return  result;
};
import OrderModel from "../models/order.models";
import OrderItemsModel from "../models/orderItems.models";

// Add new order
export const addNewOrderService = async (
    newOrder: any 
  ) => {
    const { orderItems, phone } = newOrder;

    // insert order item
    const data = await OrderItemsModel.insertMany(orderItems);

    // get order item Id for relation
    let orderItemsId: any = [];
    data.map(i => {
        orderItemsId.push(i._id)
    })

    // creating order
    const result =  await OrderModel.create({orderItems: orderItemsId, phone});
        
    return  result;
};

// get order
export const  getOrderService = async () => {
    const result = OrderModel.find().populate('orderItems').select('orderItems phone');
    return result;
};
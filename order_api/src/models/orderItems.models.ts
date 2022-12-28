import mongoose from 'mongoose';

const OrderItemsSchema = new mongoose.Schema(
  {
    product: [{
      type: String,
      required: true,
    }],
  
    quantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

const OrderItemsModel = mongoose.model('OrderItems', OrderItemsSchema);

export default OrderItemsModel;
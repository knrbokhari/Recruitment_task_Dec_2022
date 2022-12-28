import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema(
  {
    orderItems: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "OrderItems",
      required: true,
    }],
  
    phone: {
      type: String,
      required: true,
    },
  },
  { timestamps: true,  versionKey: false },
);

const OrderModel = mongoose.model('Order', OrderSchema);

export default OrderModel;
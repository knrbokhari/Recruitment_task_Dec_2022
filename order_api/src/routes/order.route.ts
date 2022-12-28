import express from 'express';
import { addNewOrder, getOrder } from '../controllers/order.controllers';
const router = express.Router();

// get order
router.get('/', getOrder);

// post order
router.post('/', addNewOrder);


const orderRoutesConfigure = ( app : any) => {
  app.use('/api/v1/order', router);
};
  
export default orderRoutesConfigure;
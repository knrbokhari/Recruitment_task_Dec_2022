import express from 'express';
const router = express.Router();

// get order
router.get('/');

// post order
router.post('/');


const orderRoutesConfigure = ( app : any) => {
  app.use('/api/v1/order', router);
};
  
export default orderRoutesConfigure;
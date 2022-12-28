import { Request, Response } from 'express';
import { asyncHandler } from '../middlewares';

export const addNewOrder = asyncHandler(
    async (req: Request, res: Response) => {
    //   await addNewOrderService(req.body);
  
      res.status(201).json({
        success: true,
        message: 'New order created successfully',
      });
    }
  );
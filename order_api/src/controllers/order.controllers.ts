import { Request, Response } from 'express';
import { asyncHandler } from '../middlewares';
import { addNewOrderService, getOrderService } from '../services/order.services';

export const addNewOrder = asyncHandler( async (req: Request, res: Response) => {
    await addNewOrderService(req.body);

    res.status(201).json({
        success: true,
        message: 'New order created successfully',
    });
});

export const getOrder = asyncHandler( async (req: Request, res: Response) => {
    const result = await getOrderService();
    res.status(200).json({
    success: true,
    data: result,
    });
});
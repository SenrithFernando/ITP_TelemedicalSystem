import PharmacyOrder from '../Model/PharmacyOrderModel.js';

//data select 
export const getPharmacyOrders = async (req, res, next) => {
    let pharmacyOrders;
    try {
        pharmacyOrders = await PharmacyOrder.find();
    } catch (err) {
        const error = new Error('Fetching pharmacy orders failed, please try again later.');
        return next(error);
    }

    //not found oders
    if (!pharmacyOrders) {
        const error = new Error('Could not find pharmacy orders.');
        return next(error);
    }

    return res.status(200).json({ pharmacyOrders});
};

//data add
export const addPharmacyOrder = async (req, res, next) => {
    
    try {
        const addorder=await PharmacyOrder.create(req.body)
        res.status(201).json({
            success: true,
            data:{addorder, } ,
        });
        
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
        })
    }
    
}



export const getByID = async (req, res, next) => {
    try {
      const getbyIDOrder = await PharmacyOrder.findById(req.params.id);
      res.status(200).json({
        success: true,
        data: {
            getbyIDOrder,
        },
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };



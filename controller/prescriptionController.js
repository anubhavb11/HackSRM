const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const multer = require('multer')
const Prescription = require('../models/prescriptionModel');

// const multerStorage = multer.memoryStorage();





exports.uploadFile = catchAsync(async (req,res,next)=>{

    // const prescription = await Prescription.create({
    //     user:req.user._id,
    //     name:req.file.filename
    // })

    res.status(201).json({
        status:'success',
        message:'File has been created'
    })
})

exports.myPrescriptions = catchAsync(async(req,res,next)=>{
    const user = req.user
    const prescriptions = await Prescription.find({user})

    res.status(200).json({
        status:'success',
        data:prescriptions
    })
})
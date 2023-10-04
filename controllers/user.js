import User from '../models/User.js';

//update
export const updateUser = async (req, res, next) => {
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json({ success: true, message: "Updated Sucessfully!", data: updateUser })
    } catch (err) {
        next(err)
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json({ success: true, message: "Deleted Sucessfully!" })
    } catch (err) {
        next(err)
    }
}

export const getUser = async (req, res, next) => {
    try {
        const getUser = await User.findById(req.params.id)
        res.status(200).json({ success: true, message: "Sucessfully!", data: getUser })
    } catch (err) {
        next(err)
    }
}

export const getallUsers = async (req, res, next) => {
    try {
        const getallUser = await User.find()
        res.status(200).json({ success: true, message: "Sucessfully!", data: getallUser })
    } catch (err) {
        next(err)
    }
}

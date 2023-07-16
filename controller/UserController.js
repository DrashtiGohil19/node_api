var userModel = require('../Model/UserModel');

const register = async (req, res) => {

    var data = await userModel.create(req.body);

    res.status(200).json({
        status: "Success",
        data
    })

}

const getinsert = async (req, res) => {

    var data = await userModel.find(req.body);

    res.status(200).json({
        status: "Success",
        data
    })
}

const getbyid = async (req, res) => {
    var id = req.params.id;
    var data = await userModel.findById(id);

    res.status(200).json({
        status: "Success",
        data
    })
}

const getfirstone = async (req, res) => {
    var data = await userModel.findOne();
    res.status(200).json({
        status: "Success",
        data
    })
}

const getuser = async (req, res) => {
    var name = req.body.name;
    var data = await userModel.find({ "name": name });
    res.status(200).json({
        status: "Success",
        data
    })
}

const deletebyid = async (req, res) => {
    var id = req.params.id;
    var data = await userModel.findByIdAndDelete(id);

    res.status(200).json({
        status: "Success",
        data
    })
}

module.exports = {
    register, getinsert, getbyid, getfirstone, getuser, deletebyid
}
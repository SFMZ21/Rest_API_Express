const {storageModel}= require("../models");
/**
 * obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    const data = await storageModel.find({});
    res.send({ data });
};

/**
 * obtener un detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem=(req, res) =>{};


/**
 * insertar un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem= async (req, res) =>{
    const{ body,file }= req
    console.log(file)
    const fileData ={
        filename: file.filename
    }
    const data = await storageModel.create(body)
    res.send({file})
};


/**
 * actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem=(req, res) =>{};


/**
 * eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem=(req, res) =>{};

module.exports ={getItems, getItem, createItem, updateItem,deleteItem};
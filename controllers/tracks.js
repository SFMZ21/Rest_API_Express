/**
 * obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems=(req, res) =>{
    const data=["hola","mundo"]
    res.send({data})
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
const createItem=(req, res) =>{};


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
const express = require("express");
const router= express.Router();
const authMiddleware= require("../middleware/session");
const {validatorCreateItem, validatorGetItem}=require("../validators/tracks");
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/tracks");
const checkRol = require("../middleware/rol");

/***
 * Lista de los items
 */
router.get("/",authMiddleware,getItems);

/***
 * obtener detalle de  item
 */
 router.get("/:id",authMiddleware,validatorGetItem,getItem);

/**
 * crear un registro/item
 */
router.post("/",
authMiddleware,
checkRol(["admin","user"]),
validatorCreateItem,
createItem);

/**
 * actualizar registro
 */
 router.put("/:id",authMiddleware,validatorGetItem ,validatorCreateItem,updateItem);

 /***
 * Lista de los items
 */
router.delete("/:id",authMiddleware,validatorGetItem,deleteItem);

module.exports= router;
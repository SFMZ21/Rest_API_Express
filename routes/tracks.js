const express = require("express");
const router= express.Router();
const authMiddleware= require("../middleware/session");
const {validatorCreateItem, validatorGetItem}=require("../validators/tracks");
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/tracks");

/***
 * Lista de los items
 */
router.get("/",authMiddleware,getItems);

/***
 * obtener detalle de  item
 */
 router.get("/:id",validatorGetItem,getItem);

/**
 * crear un registro/item
 */
router.post("/", validatorCreateItem,createItem);

/**
 * actualizar registro
 */
 router.put("/:id",validatorGetItem ,validatorCreateItem,updateItem);

 /***
 * Lista de los items
 */
router.delete("/:id",validatorGetItem,deleteItem);

module.exports= router;
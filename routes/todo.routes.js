const router = require("express").Router();
const todoControllers = require("../controllers/todo.controllers");
const verifyToken = require('../utils/verifyToken')
router.get("/", todoControllers.getTodos);
router.get("/:todoId", todoControllers.getTodo);
router.post("/create",verifyToken, todoControllers.createTodo);
router.put("/:todoId/update",verifyToken, todoControllers.updateTodo);
router.delete("/:todoId/delete",verifyToken, todoControllers.deleteTodo);
module.exports = router;

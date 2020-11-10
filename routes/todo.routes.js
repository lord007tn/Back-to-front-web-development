const router = require("express").Router();
const todoControllers = require("../controllers/todo.controllers");

router.get("/", todoControllers.getTodos);
router.get("/:todoId", todoControllers.getTodo);
router.post("/create", todoControllers.createTodo);
router.put("/:todoId/update", todoControllers.updateTodo);
router.delete("/:todoId/delete", todoControllers.deleteTodo);
module.exports = router;

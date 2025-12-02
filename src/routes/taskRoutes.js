// src/routes/taskRoutes.js
const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");
const authMiddleware = require("../middleware/authMiddleware");

// All task routes require authentication
router.use(authMiddleware.protect);

router.route("/").post(taskController.createTask).get(taskController.getTasks);

router.route("/stats").get(taskController.getTaskStats);

router
  .route("/:id")
  .put(taskController.updateTask)
  .delete(taskController.deleteTask);

module.exports = router;

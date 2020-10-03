const express = require("express");
const router = express.Router();
const Todo = require("../../models/todo");

// @route GET /todos
// @desc  Get all Todos
router.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).send(todos);
  } catch (error) {
    res.status(500).send(error);
  }
});

// @route GET /todos/:id
// @desc  Get Todo based on Id
router.get("/todos/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const todo = await Todo.findById(_id);
    if (!todo) {
      return res.status(404).send("Todo Not Found");
    }
    res.status(200).send(todo);
  } catch (error) {
    res.status(500).send(error);
  }
});

// @route POST /todos
// @desc  Add a Todo
router.post("/todos", async (req, res) => {
  try {
    const todo = new Todo(req.body);
    todo.save();
    res.status(201).send(todo);
  } catch (error) {
    res.status(400).send(error);
  }
});

// @route PUT /todos/:id
// @desc  Update Todo based on ID
router.put("/todos/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "description", "tasks"];
  const isValidUpdate = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidUpdate) {
    return res.status(400).send({ error: "Invalid Update Request" });
  }
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!todo) {
      return res.status(404).send();
    }
    res.status(200).send(todo);
  } catch (error) {
    res.status(400).send(error);
  }
});

// @route DELETE /todos/:id
// @desc  Delete Todo based on Id
router.delete("/todos/:id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) {
      return res.status(404).send("Todo Not Found");
    }
    res.status(200).send(todo);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;

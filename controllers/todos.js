const todoRouter = require("express").Router();
const Todo = require("../models/todo");

todoRouter.get("/", async (request, response) => {
  const getTodos = await Todo.find({});
  response.status(200).json(getTodos);
});

todoRouter.get("/:id", async (request, response) => {
  const getTodo = await Todo.findById(request.params.id);
  response.status(200).json(getTodo);
});

todoRouter.post("/", async (request, response) => {
  const body = request.body;
  if (!body) return response.status(400).json(body);

  const todo = new Todo({
    content: body.content,
  });

  const savedTodo = await todo.save();
  console.log(savedTodo);
  response.status(201).json(savedTodo);
});

todoRouter.delete("/:id", async (request, response) => {
  const todo = await Todo.findById(request.params.id);
  console.log(request.params.id);
  console.log(todo);

  if (todo === null) {
    return response.status(400).json({ error: "no todo for this id" });
  }
  await Todo.findByIdAndRemove(request.params.id);
  response.status(200).end();
});

module.exports = todoRouter;

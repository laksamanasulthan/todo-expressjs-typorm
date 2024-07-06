import { Router } from "express";
import { TodoController } from "../app/controllers/todoController";
import { idValidator } from "../app/validation/paramsValidator";
import {
    storeTodoValidator,
    updateTodoValidator,
} from "../app/validation/todoValidator";

const todoRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Todo
 *   description: Todo endpoints
 */

/**
 * @swagger
 * /api/todo/:
 *   get:
 *     summary: Get Data
 *     tags: [Todo]
 *     responses:
 *       200:
 *         description: Data Fetched successfully
 *       400:
 *         description: Invalid credentials
 */
todoRouter.get("/", TodoController.index);

/**
 * @swagger
 * /api/todo/insert/:
 *   post:
 *     summary: Insert Data
 *     tags: [Todo]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - status
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               status:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Invalid input
 */
todoRouter.post("/insert", storeTodoValidator, TodoController.store);

/**
 * @swagger
 * /api/todo/{id}:
 *   get:
 *     summary: Get Data by ID
 *     tags: [Todo]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the data to get
 *     responses:
 *       200:
 *         description: Successfully retrieved data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "1"
 *                 title:
 *                   type: string
 *                   example: "Kegiatan Hari ini"
 *                 description:
 *                   type: string
 *                   example: "Di Malang, Study Tour"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Data not found
 */
todoRouter.get("/:id", idValidator, TodoController.show);

/**
 * @swagger
 * /api/todo/{id}/update:
 *   put:
 *     summary: Update Data by ID
 *     tags: [Todo]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the data to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - status
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               status:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Data updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Data not found
 */
todoRouter.put(
    "/:id/update",
    idValidator,
    updateTodoValidator,
    TodoController.update
);

/**
 * @swagger
 * /api/todo/{id}/delete:
 *   delete:
 *     summary: Delete Data by ID
 *     tags: [Todo]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the data to delete
 *     responses:
 *       204:
 *         description: Data deleted successfully
 *       404:
 *         description: Data not found
 */
todoRouter.delete("/:id/delete", idValidator, TodoController.delete);

/**
 * @swagger
 * /api/todo/{id}/status:
 *   put:
 *     summary: Change Todo Status by ID
 *     tags: [Todo]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the data to Change the Status
 *     responses:
 *       204:
 *         description: Data updated successfully
 *       404:
 *         description: Data not found
 */
todoRouter.put("/:id/status", idValidator, TodoController.status);

export default todoRouter;

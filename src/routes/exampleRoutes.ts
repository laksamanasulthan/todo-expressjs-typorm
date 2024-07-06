import { Router } from "express";
import { ExampleController } from "../app/controllers/exampleController";
import { exampleMiddleware } from "../app/middlewares/exampleMiddleware";
import { exampleValidator } from "../app/validation/exampleValidator";
import { idValidator } from "../app/validation/paramsValidator";

const exampleRouter = Router();
/**
 * @swagger
 * tags:
 *   name: Example
 *   description: Example endpoints
 */

/**
 * @swagger
 * /api/example/:
 *   get:
 *     summary: Get Data
 *     tags: [Example]
 *     responses:
 *       200:
 *         description: Data Fetched successfully
 *       400:
 *         description: Invalid credentials
 */
exampleRouter.get("/", exampleMiddleware, ExampleController.index);

/**
 * @swagger
 * /api/example/insert/:
 *   post:
 *     summary: Insert Data
 *     tags: [Example]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - field
 *               - field2
 *             properties:
 *               field:
 *                 type: string
 *               field2:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Invalid input
 */
exampleRouter.post(
    "/insert",
    exampleValidator,
    exampleMiddleware,
    ExampleController.store
);

/**
 * @swagger
 * /api/example/{id}:
 *   get:
 *     summary: Get Data by ID
 *     tags: [Example]
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
 *                 field:
 *                   type: string
 *                   example: "value"
 *                 field2:
 *                   type: string
 *                   example: "value2"
 *       404:
 *         description: Data not found
 */
exampleRouter.get(
    "/:id",
    idValidator,
    exampleMiddleware,
    ExampleController.show
);

/**
 * @swagger
 * /api/example/{id}/update:
 *   put:
 *     summary: Update Data by ID
 *     tags: [Example]
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
 *               - field
 *               - field2
 *             properties:
 *               field:
 *                 type: string
 *               field2:
 *                 type: string
 *     responses:
 *       200:
 *         description: Data updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Data not found
 */
exampleRouter.put(
    "/:id/update",
    idValidator,
    exampleValidator,
    exampleMiddleware,
    ExampleController.update
);

/**
 * @swagger
 * /api/example/{id}/delete:
 *   delete:
 *     summary: Delete Data by ID
 *     tags: [Example]
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
exampleRouter.delete(
    "/:id/delete",
    idValidator,
    exampleMiddleware,
    ExampleController.delete
);

export default exampleRouter;

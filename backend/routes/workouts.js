const express = require('express')
const {
    createWorkout,
    getWorkouts,
    getAWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')
const router = express.Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     Workout:
 *       type: object
 *       required:
 *         - title
 *         - reps
 *         - load
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the workout
 *         title:
 *           type: string
 *           description: The title of the workout
 *         reps:
 *           type: integer
 *           description: Number of reps
 *         load:
 *           type: integer
 *           description: Weight for the workout
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date and time the workout was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date and time the workout was last updated
 *       example:
 *         id: d5fE_asz
 *         title: Push-ups
 *         reps: 20
 *         load: 0
 *         createdAt: 2024-06-12T14:13:36.674Z
 *         updatedAt: 2024-06-13T07:50:30.805Z
 */

/**
 * @swagger
 * tags:
 *   name: Workouts
 *   description: Workout management
 */

/**
 * @swagger
 * /api/workouts:
 *   get:
 *     summary: Get all workouts
 *     tags: [Workouts]
 *     responses:
 *       200:
 *         description: A list of workouts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Workout'
 */
router.get('/', getWorkouts)

/**
 * @swagger
 * /api/workouts/{id}:
 *   get:
 *     summary: Get a single workout by ID
 *     tags: [Workouts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The workout ID
 *     responses:
 *       200:
 *         description: A single workout
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Workout'
 *       404:
 *         description: Workout not found
 */
router.get('/:id', getAWorkout)

/**
 * @swagger
 * /api/workouts:
 *   post:
 *     summary: Create a new workout
 *     tags: [Workouts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Workout'
 *     responses:
 *       201:
 *         description: The workout was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Workout'
 *       400:
 *         description: Invalid input
 */
router.post('/', createWorkout)

/**
 * @swagger
 * /api/workouts/{id}:
 *   delete:
 *     summary: Delete a workout by ID
 *     tags: [Workouts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The workout ID
 *     responses:
 *       200:
 *         description: The workout was successfully deleted
 *       404:
 *         description: Workout not found
 */
router.delete('/:id', deleteWorkout)

/**
 * @swagger
 * /api/workouts/{id}:
 *   patch:
 *     summary: Update a workout by ID
 *     tags: [Workouts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The workout ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Workout'
 *     responses:
 *       200:
 *         description: The workout was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Workout'
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Workout not found
 */
router.patch('/:id', updateWorkout)

module.exports = router

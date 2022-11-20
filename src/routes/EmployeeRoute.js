import express from "express";
import {
    getAllEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
} from "../controllers/EmployeeController.js";

const router = express.Router();

router.get('/employee/all', getAllEmployees);
router.get('/employee/:id', getEmployeeById);
router.post('/employee/add', createEmployee);
router.patch('/employee/:id', updateEmployee);
router.delete('/employee/:id', deleteEmployee);

export default router;
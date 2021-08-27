import express from 'express';
import {v4 as uuidv4} from 'uuid';
import Router from 'express-promise-router'; 
import { dbQueryStudents, dbQueryStudent,dbInsertStudent, dbDeleteStudent, dbUpdateStudent } from '../models/dbHelper.js';

const router = Router();

let students = [];
const queryStudents = async (request, response) => {
    students = await dbQueryStudents();
    response.json( {'data' : students})
}
const queryStudent = async (request, response) => {
    let {id} = request.params
    let student = await dbQueryStudent(id);
    response.json( {'data' : student})
}
const insertStudent = async (request, response) => {
    const { fname, lname, grade} = request.body;
    let id = uuidv4()
    let student = {'id': id, 'fname': fname, 'lname': lname, 'grade': grade}
    let count = await dbInsertStudent(student);
    response.json( {'data' : count})
}
const deleteStudent = async (request, response) => {
    let {id} = request.params
    let count = await dbDeleteStudent(id);
    response.json( {'data' : count})
}
const updateStudent = async (request, response) => {
    let {id} = request.params
    const {fname, lname, grade} = request.body;
    let student = {'id': id, 'fname': fname, 'lname': lname, 'grade': grade}
    let count = await dbUpdateStudent(student);
    response.json( {'data' : count})
}
router.get( '/', queryStudents)
router.get( '/:id', queryStudent)
router.post( '/', insertStudent)
router.delete( '/:id', deleteStudent)
router.patch( '/:id', updateStudent)

export default router

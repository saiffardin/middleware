const {readData, writeData} = require('../utils/db.utils');

const getStudents = async (req, res) => {
    try {
        const students = await readData();
        return res.status(200).send(students);
    }
    catch (error) {
        return res.status(500).send({error});
    }
}


const createStudent = async (req, res) => {

    try {
        const students = await readData();
        students.push(req.body);

        const response = await writeData({data: students});

        if (response === 'success') {
            res.status(201).send({
                message: 'student created successfully',
                data: req.body
            })
        }

    } catch (error) {
        return res.status(500).send({error});
    }

    res.end();
}


const updateStudentById = async (req, res) => {

    const {id} = req.params;

    try {
        const students = await readData();

        const student = students.filter(item => item.id === id)[0];

        if (student) {

            const newStudents = students.map(student => {
                if (student.id === id) {
                    return {
                        ...student,
                        ...req.body
                    }
                }
                return student;
            })

            console.log('newStudents:', newStudents);

            let response = null
            response = await writeData({data: newStudents});

            console.log('response:', response)

            if (response === 'success') {
                let students = await readData();

                let updatedStudent = students.filter(student => student.id === id)[0];

                console.log('updatedStudent:', updatedStudent);

                return res.status(200).send({
                    message: 'student updated successfully',
                    data: updatedStudent
                });
            }

        } else {
            res.status(404).send('The requested resource was not found.');
        }

    }
    catch (error) {
        return res.status(500).send({error});
    }
}


const deleteStudentById = async (req, res) => {
    const {id} = req.params;

    const students = await readData();
    const student = students.filter(item => item.id === id)[0];

    if (student) {
        const newStudents = students.filter(item => item.id !== id);
        console.log('newStudents:', newStudents);

        let result = null;
        result = await writeData({data: newStudents});

        if (result) {
            res.status(200).send('Successfully deleted')
        } else {
            res.status(404).send('Failed to write in DB.');
        }

    } else {
        res.status(404).send('The requested resource was not found.');
    }
}


module.exports = {
    getStudents,
    createStudent,
    updateStudentById,
    deleteStudentById
}
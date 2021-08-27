import mysql from 'mysql'

    const getConnection = async() => {
        var conn = mysql.createConnection( {
            "host": "localhost",
            "port": "3306",
            "user": "root",
            "password": "Shinkle0619!",
            "database": "studentdb"
        });
        await conn.connect( err => {
            if (err) {
                console.log('getCOnnection: connection error: ' + err);
                return;
            }
            console.log('getConnection: connection successful');
        })
        return conn;
    }
    export const dbQueryStudents = async () => {
        var students = [];
        var conn = await getConnection();
        const resultHandler = (err, result, fields, resolve) => {
            if (err) {
                console.log('dbQueryStudents: query error');
                return;
            }
            console.log('dbQueryStudents: query sucessful');
            for (let i=0; i< result.length; i++) {
                let row = result[i];
                let student = { 'id': row['id'], 'fname': row['fname'], 'lname': row['lname'],'grade': row['grade'] }
                console.log( JSON.stringify(student));
                students = [...students, student];
            }
            resolve( students);
        }
        try {
            return new Promise( (resolve, reject) => {
                let sql = 'SELECT * FROM Students';
                console.log('dbQueryStudents: sql='+sql);
                conn.query( sql, (err, result, fields) => {
                    resultHandler( err, result, fields, resolve)
                })
            })
        }
        catch (err) {
            console.log('dbQueryStudents: caught error: ' + err);
        }
        finally {
            if (conn) conn.end();
        }
        return new Promise( (resolve, reject) => {resolve([])})
    }
    export const dbQueryStudent = async (id) => {
       
        var conn = await getConnection();
        const resultHandler = (err, result, fields, resolve) => {
            if (err) {
                console.log('dbQueryStudents: query error');
                return;
            }
            console.log('dbQueryStudents: query sucessful');
                
            let row = result[0];
            let student = { 'id': row['id'], 'fname': row['fname'], 'lname': row['lname'],'grade': row['grade'] }
            console.log( JSON.stringify(student));
               
            resolve( student);
        }
        try {
            return new Promise( (resolve, reject) => {
                let sql = 'SELECT * FROM Students where id = ' + id;
                console.log('dbQueryStudents: sql='+sql);
                conn.query( sql, (err, result, fields) => {
                    resultHandler( err, result, fields, resolve)
                })
            })
        }
        catch (err) {
            console.log('dbQueryStudents: caught error: ' + err);
        }
        finally {
            if (conn) conn.end();
        }
        return new Promise( (resolve, reject) => {resolve([])})
    }
    export const dbInsertStudent = async (student) => {
        var conn = await getConnection();
        const resultHandler = (err, result, fields, resolve) => {
            if (err) {
                console.log('dbInsertStudents: insert error');
                return;
            }
            console.log('dbInsertStudents: query sucessful');                
            resolve( 1);
        }
        try {
            return new Promise( (resolve, reject) => {
                let sql = `INSERT INTO Students VALUES ('${student.id}', '${student.fname}', '${student.lname}', '${student.grade}' )`
                console.log('dbInsertStudents: sql='+sql);
                conn.query( sql, (err, result, fields) => {
                    resultHandler( err, result, fields, resolve)
                })
            })
        }
        catch (err) {
            console.log('dbInsertStudents: caught error: ' + err);
        }
        finally {
            if (conn) conn.end();
        }
        return new Promise( (resolve, reject) => {resolve(0)})
    }
    export const dbDeleteStudent = async (id) => {
       
        var conn = await getConnection();
        const resultHandler = (err, result, fields, resolve) => {
            if (err) {
                console.log('dbDeleteStudent: delete error');
                return;
            }
            console.log('dbDeleteStudent: delete sucessful');
                
               
            resolve(1);
        }
        try {
            return new Promise( (resolve, reject) => {
                let sql = `DELETE FROM Students where id =  '${id}'`;
                console.log('dbDeleteStudent: sql='+ sql);
                conn.query( sql, (err, result, fields) => {
                    resultHandler( err, result, fields, resolve)
                })
            })
        }
        catch (err) {
            console.log('dbDeleteStudent: caught error: ' + err);
        }
        finally {
            if (conn) conn.end();
        }
        return new Promise( (resolve, reject) => {resolve(0)})
    }
    export const dbUpdateStudent = async (student) => {
        var conn = await getConnection();
        const resultHandler = (err, result, fields, resolve) => {
            if (err) {
                console.log('dbUpdateStudents: Update error');
                return;
            }
            console.log('dbUpdateStudents: Update sucessful');                
            resolve( 1);
        }
        try {
            return new Promise( (resolve, reject) => {
                let sql = `UPDATE Students SET FNAME='${student.fname}', LNAME='${student.lname}', GRADE='${student.grade}' WHERE ID='${student.id}'`
                console.log('dbUpdateStudents: sql='+sql);
                conn.query( sql, (err, result, fields) => {
                    resultHandler( err, result, fields, resolve)
                })
            })
        }
        catch (err) {
            console.log('dbUpdatetStudents: caught error: ' + err);
        }
        finally {
            if (conn) conn.end();
        }
        return new Promise( (resolve, reject) => {resolve(0)})
    }


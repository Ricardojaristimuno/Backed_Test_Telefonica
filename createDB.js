const mysql = require('mysql2');

// Configuración de conexión
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',        
    password: '' 
  });
  
  
  //* Crear base de datos */
  
  const createDatabaseAndTables = async () => {
  
  
    const query = (sql) => {
      return new Promise((resolve, reject) => {
        connection.query(sql, (err, results) => {
          if (err) reject(err);
          else resolve(results);
        });
      });
    };
  
    try {
//* Conectar al servidor MySQL */
      connection.connect();
  
//* Crear la base de datos
      await query('CREATE DATABASE IF NOT EXISTS telefonica');
  
      console.log('Base de datos creada exitosamente.');
    } finally {
//* Cerrar la conexión */
      connection.end();
    }
  };
  
//**  Ejecutar la función */
  createDatabaseAndTables();
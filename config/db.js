const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'bskfmtsmctpulje6jaet-mysql.services.clever-cloud.com',
  user: 'ugb3v3m8mp3x28yr',
  password: '1bMatujDD3J1qnRFg6Dv',
  database: 'bskfmtsmctpulje6jaet',
});

connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados');
});

module.exports = connection;
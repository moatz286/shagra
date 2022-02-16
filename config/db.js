import { createConnection } from 'mysql';
const db = createConnection({
host: "localhost",
user: "root",
password: "",
database:"shagra" 
})

export default db;

const sqllist = {
  selectList : "select * from customers",
  selectById : "select * from customers where id=?",
  insertInfo : "insert customers (name, email, phone, created_date) values (?,?,?,now())",
  updateInfo : "update customers set ? where id = ?",
  deleteInfo : "delete customers where id = ?",
}

module.exports = sqllist;
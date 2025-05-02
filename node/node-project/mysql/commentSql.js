const sqllist = {
  selectList : "select * from comment where bid=?",
  // selectById : "select * from comment where id=?",
  insertInfo : "insert comment (writer, content, created_date) values (?,?,now())",
  updateInfo : "update comment set ? where id = ?",
  deleteInfo : "delete comment where id = ?",
}

module.exports = sqllist;
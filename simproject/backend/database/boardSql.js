const sqllist = {
  selectList : "select * from board",
  selectById : "select * from board where id=?",
  insertInfo : "insert board (title, writer, content) values (?,?,?)",
  updateInfo : "update board set ? where id = ?",
  deleteInfo : "delete board where id = ?",
}

module.exports = sqllist;
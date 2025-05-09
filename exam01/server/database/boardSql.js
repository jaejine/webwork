const sqllist = {
  selectList : "select * from t_board_board",
  selectById : "select * from t_board_board where no=?",
  insertInfo : "insert board (title, writer, content) values (?,?,?)",
  updateInfo : "update board set ? where id = ?",
  deleteInfo : "delete board where id = ?",
}

module.exports = sqllist;
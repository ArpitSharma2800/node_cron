const pool = require("./db");

module.exports = {
  getSingleDetail: (data, callBack) => {
    console.log(data);
    pool.query(
      `SELECT id,name,username,profileImage,joinDate,gender FROM user WHERE id NOT IN (SELECT initiatorId from connection WHERE facerId='${data.id}' AND isblocked=1) AND username='${data.username}'`,
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

"use strict";
const dotenv = require("dotenv");
const { getSingleDetail } = require("./service");
module.exports.run = async (event, context) => {
  const data = {
    id: "7a52410f-0713-42ac-b837-4d44b472c8c3",
    username: "chirag_artistBanda",
  };
  getSingleDetail(data, (err, results) => {
    // console.log(results);
    if (err) {
      return res.status(500).json({
        success: 0,
        message: err,
      });
    }
    if (results[0] == null) {
      console.log("no user found");
    } else {
      console.log(results);
    }
  });
};

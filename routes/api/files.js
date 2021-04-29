const express = require("express");
const router = express.Router();
const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1024 * 1024;
const fs = require("fs");
const baseUrl = "http://localhost:8080/files/";

const uploadController = require("../../controllers/upload");


const getListFiles = (req, res) => {
  const directoryPath = __basedir + "/resources/static/assets/uploads/";

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }

    let fileInfos = [];

    files.forEach((file) => {
      fileInfos.push({
        name: file,
        url: baseUrl + file,
      });
    });

    res.status(200).send(fileInfos);
  });
};

const download = (req, res) => {
  const fileName = req.params.name;
  const directoryPath = __basedir + "/resources/static/assets/uploads/";

  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
};

router.post("/upload", uploadController.uploadFile);
router.get("/files", getListFiles);
router.get("/files/:name", download);

module.exports = router;
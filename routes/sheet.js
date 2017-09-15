var express = require('express');
var router = express.Router();
var Sheet = require('../models').Sheet;

router.get('/', function (req, res, next) {
  Sheet.findAll().then(function (sheets) {
    res.render('sheet',
      {
        title: '歌单管理',
        sheets: sheets
      });
  })
});

router.get('/show/:id', function (req, res, next) {
  Sheet.findOne({
    where: {
      id: req.params.id
    }
  }).then(function (sheet) {
    res.render('sheet-detail',
      {
        title: '歌单管理',
        sheet: sheet
      });
  });
});

router.get('/add', function (req, res, next) {
  res.render('sheet-add', {title: '歌单管理'});
});

router.post('/add_sheet', function (req, res, next) {
  var wid = req.body.wid;
  var seq = req.body.seq;
  var type = req.body.type;
  var name = req.body.name;
  var cover = req.body.cover;
  var description = req.body.description;
  var song_ids = req.body.song_ids;

  var sheet = {
    wid: wid,
    seq: seq,
    type: type,
    name: name,
    cover: cover,
    description: description,
    song_ids: song_ids
  };
  Sheet.create(sheet).then(function () {
    return res.json({code: 0, message: '录入成功'});
  });
});

router.get('/remove/:id', function (req, res, next) {
  Sheet.destroy({
    where: {
      id: req.params.id
    }
  }).then(function () {
    return res.json({code: 0, message: '删除成功'});
  });
});

router.post('/update/:id', function (req, res, next) {
  var id = req.params.id;
  var wid = req.body.wid;
  var seq = req.body.seq;
  var type = req.body.type;
  var name = req.body.name;
  var cover = req.body.cover;
  var description = req.body.description;
  var song_ids = req.body.song_ids;

  var sheet = {
    wid: wid,
    seq: seq,
    type: type,
    name: name,
    cover: cover,
    description: description,
    song_ids: song_ids
  };
  Sheet.update(sheet, {
    where: {
      id: id
    }
  }).then(function () {
    return res.json({code: 0, message: '更新成功'});
  });
});

module.exports = router;

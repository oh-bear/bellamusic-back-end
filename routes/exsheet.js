var express = require('express');
var router = express.Router();
var ExSheet = require('../models').ExSheet;

router.get('/', function (req, res, next) {
  ExSheet.findAll().then(function (exsheets) {
    res.render('exsheet',
      {
        title: '扩展歌单管理',
        exsheets: exsheets
      });
  })
});

router.get('/recommend', function (req, res, next) {
  ExSheet.findAll({
    where: {
      type: 1
    }
  }).then(function (exsheets) {
    res.render('exsheet',
      {
        title: '扩展歌单管理-推荐歌单',
        exsheets: exsheets
      });
  })
});

router.get('/radio', function (req, res, next) {
  ExSheet.findAll({
    where: {
      type: 2
    }
  }).then(function (exsheets) {
    res.render('exsheet',
      {
        title: '扩展歌单管理-电台播客',
        exsheets: exsheets
      });
  })
});

router.get('/cover', function (req, res, next) {
  ExSheet.findAll({
    where: {
      type: 3
    }
  }).then(function (exsheets) {
    res.render('exsheet',
      {
        title: '扩展歌单管理-贝壳翻唱',
        exsheets: exsheets
      });
  })
});


router.get('/show/:id', function (req, res, next) {
  ExSheet.findOne({
    where: {
      id: req.params.id
    }
  }).then(function (exsheet) {
    res.render('exsheet-detail',
      {
        title: '扩展歌单管理',
        exsheet: exsheet
      });
  });
});

router.get('/add', function (req, res, next) {
  res.render('exsheet-add', {title: '扩展歌单管理'});
});

router.post('/add_exsheet', function (req, res, next) {
  var wid = req.body.wid;
  var eid = req.body.eid;
  var seq = req.body.seq;
  var type = req.body.type;
  var name = req.body.name;
  var cover = req.body.cover;
  var description = req.body.description;
  var song_ids = req.body.song_ids;

  var exsheet = {
    wid: wid,
    eid: eid,
    seq: seq,
    type: type,
    name: name,
    cover: cover,
    description: description,
    song_ids: song_ids
  };
  ExSheet.create(exsheet).then(function () {
    return res.json({code: 0, message: '录入成功'});
  });
});

router.get('/remove/:id', function (req, res, next) {
  ExSheet.destroy({
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
  var eid = req.body.eid;
  var seq = req.body.seq;
  var type = req.body.type;
  var name = req.body.name;
  var cover = req.body.cover;
  var description = req.body.description;
  var song_ids = req.body.song_ids;

  var exsheet = {
    wid: wid,
    eid: eid,
    seq: seq,
    type: type,
    name: name,
    cover: cover,
    description: description,
    song_ids: song_ids
  };
  ExSheet.update(exsheet, {
    where: {
      id: id
    }
  }).then(function () {
    return res.json({code: 0, message: '更新成功'});
  });
});

module.exports = router;

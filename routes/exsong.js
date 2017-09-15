var express = require('express');
var router = express.Router();
var ExSong = require('../models').ExSong;

router.get('/', function (req, res, next) {
  ExSong.findAll().then(function (exsongs) {
    res.render('exsong',
      {
        title: '扩展歌曲管理',
        exsongs: exsongs
      });
  })
});

router.get('/show/:id', function (req, res, next) {
  ExSong.findOne({
    where: {
      id: req.params.id
    }
  }).then(function (exsong) {
    res.render('exsong-detail',
      {
        title: '扩展歌曲管理',
        exsong: exsong
      });
  });
});

router.get('/remove/:id', function (req, res, next) {
  ExSong.destroy({
    where: {
      id: req.params.id
    }
  }).then(function () {
    return res.json({code: 0, message: '删除成功'});
  });
});


router.get('/add', function (req, res, next) {
  res.render('exsong-add', {title: '扩展歌曲管理'});
});

router.post('/add_exsong', function (req, res, next) {
  var type = req.body.type;
  var name = req.body.name;
  var singer = req.body.singer;
  var description = req.body.description;
  var lyrics = req.body.lyrics;
  var url = req.body.url;
  var url2 = req.body.url2;

  var exsong = {
    type: type,
    name: name,
    singer: singer,
    description: description,
    lyrics: lyrics,
    url: url,
    url2: url2
  };
  ExSong.create(exsong).then(function () {
    return res.json({code: 0, message: '录入成功'});
  });
});

router.post('/update/:id', function (req, res, next) {
  var id = req.params.id;
  var type = req.body.type;
  var name = req.body.name;
  var singer = req.body.singer;
  var description = req.body.description;
  var lyrics = req.body.lyrics;
  var url = req.body.url;
  var url2 = req.body.url2;
  var exsong = {
    type: type,
    name: name,
    singer: singer,
    description: description,
    lyrics: lyrics,
    url: url,
    url2: url2
  };
  ExSong.update(exsong, {
    where: {
      id: id
    }
  }).then(function () {
    return res.json({code: 0, message: '更新成功'});
  });
});

module.exports = router;

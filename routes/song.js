var express = require('express');
var router = express.Router();
var Song = require('../models').Song;

router.get('/', function (req, res, next) {
  Song.findAll().then(function (songs) {
    res.render('song',
      {
        title: '歌曲管理',
        songs: songs
      });
  })
});

router.get('/show/:id', function (req, res, next) {
  Song.findOne({
    where: {
      id: req.params.id
    }
  }).then(function (song) {
    res.render('song-detail',
      {
        title: '歌曲管理',
        song: song
      });
  });
});

router.get('/remove/:id', function (req, res, next) {
  Song.destroy({
    where: {
      id: req.params.id
    }
  }).then(function () {
    return res.json({code: 0, message: '删除成功'});
  });
});

router.post('/update/:id', function (req, res, next) {
  var id = req.params.id;
  var name = req.body.name;
  var lyrics = req.body.lyrics;
  var url = req.body.url;
  var url2 = req.body.url2;
  var song = {
    name: name,
    lyrics: lyrics,
    url: url,
    url2: url2
  };
  Song.update(song, {
    where: {
      id: id
    }
  }).then(function () {
    return res.json({code: 0, message: '更新成功'});
  });
});

module.exports = router;

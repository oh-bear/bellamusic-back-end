var express = require('express');
var router = express.Router();
var Banner = require('../models').Banner;

router.get('/', function (req, res, next) {
  Banner.findAll().then(function (banners) {
    res.render('banner',
      {
        title: '首页横幅',
        banners: banners
      });
  })
});

router.get('/show/:id', function (req, res, next) {
  Banner.findOne({
    where: {
      id: req.params.id
    }
  }).then(function (banner) {
    res.render('banner-detail',
      {
        title: '首页横幅',
        banner: banner
      });
  });
});

router.get('/remove/:id', function (req, res, next) {
  Banner.destroy({
    where: {
      id: req.params.id
    }
  }).then(function () {
    return res.json({code: 0, message: '删除成功'});
  });
});


router.get('/add', function (req, res, next) {
  res.render('banner-add', {title: '首页横幅'});
});

router.post('/add_banner', function (req, res, next) {
  var title = req.body.title;
  var seq = req.body.seq;
  var url = req.body.url;
  var banner = {
    title: title,
    seq: seq,
    url: url
  };
  Banner.create(banner).then(function () {
    return res.json({code: 0, message: '录入成功'});
  });
});

router.post('/update/:id', function (req, res, next) {
  var id = req.params.id;
  var title = req.body.title;
  var seq = req.body.seq;
  var url = req.body.url;
  var banner = {
    id: id,
    title: title,
    seq: seq,
    url: url
  };
  Banner.update(banner, {
    where: {
      id: id
    }
  }).then(function () {
    return res.json({code: 0, message: '更新成功'});
  });
});

module.exports = router;

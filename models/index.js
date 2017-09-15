var sequelize = require('../config').sequelize();
var Banner = sequelize.import('./banner');
var Song = sequelize.import('./song');
var ExSong = sequelize.import('./song_extend');
var Sheet = sequelize.import('./sheet');
var ExSheet = sequelize.import('./sheet_extend');

sequelize.sync();

exports.Banner = Banner;
exports.Song = Song;
exports.ExSong = ExSong;
exports.Sheet = Sheet;
exports.ExSheet = ExSheet;

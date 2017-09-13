var sequelize = require('../config').sequelize();
var Banner = sequelize.import('./banner');
var Song = sequelize.import('./song');
var SongInfo = sequelize.import('./songInfo');
var Sheet = sequelize.import('./sheet');
var SheetInfo = sequelize.import('./sheetInfo');

Song.hasOne(SongInfo);
SongInfo.belongsTo(Song);
Sheet.hasOne(SheetInfo);
SheetInfo.belongsTo(Sheet);

sequelize.sync();

exports.Banner = Banner;
exports.Song = Song;
exports.SongInfo = SongInfo;
exports.Sheet = Sheet;
exports.SheetInfo = SheetInfo;

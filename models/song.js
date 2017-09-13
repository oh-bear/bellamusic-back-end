module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'song',
    {
      'wid': {
        'type': DataTypes.INTEGER,
        'allowNull': true
      },
      'nid': {
        'type': DataTypes.INTEGER,
        'allowNull': true
      },
      'name': {
        'type': DataTypes.STRING(125),
        'allowNull': true
      },
      'cover': {
        'type': DataTypes.STRING(125),
        'allowNull': true
      },
      'poster': {
        'type': DataTypes.STRING(125),
        'allowNull': true
      },
      'lyricist': {
        'type': DataTypes.STRING(45),
        'allowNull': true
      },
      'composer': {
        'type': DataTypes.STRING(45),
        'allowNull': true
      },
      'original': {
        'type': DataTypes.STRING(45),
        'allowNull': true
      },
      'premiere': {
        'type': DataTypes.STRING(45),
        'allowNull': true
      },
      'album': {
        'type': DataTypes.STRING(45),
        'allowNull': true
      },
      'style': {
        'type': DataTypes.STRING(45),
        'allowNull': true
      },
      'language': {
        'type': DataTypes.STRING(45),
        'allowNull': true
      },
      'duration': {
        'type': DataTypes.STRING(45),
        'allowNull': true
      },
      'tag': {
        'type': DataTypes.STRING(45),
        'allowNull': true
      },
      'lyrics': {
        'type': DataTypes.TEXT,
        'allowNull': true
      },
      'song_bg': {
        'type': DataTypes.STRING(125),
        'allowNull': true
      },
      'sing_bg': {
        'type': DataTypes.STRING(125),
        'allowNull': true
      },
      'summary': {
        'type': DataTypes.TEXT,
        'allowNull': true
      },
      'mv_url': {
        'type': DataTypes.STRING(125),
        'allowNull': true
      },
      'live_url': {
        'type': DataTypes.STRING(125),
        'allowNull': true
      },
      'ktv_url': {
        'type': DataTypes.STRING(125),
        'allowNull': true
      },
      'url': {
        'type': DataTypes.STRING(125),
        'allowNull': true
      },
      'url2': {
        'type': DataTypes.STRING(125),
        'allowNull': true
      },
      'timestamp': {
        'type': DataTypes.DOUBLE,
        'allowNull': true
      }
    }
  );
};

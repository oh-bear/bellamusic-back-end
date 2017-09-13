module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'sheet',
    {
      'wid': {
        'type': DataTypes.INTEGER,
        'allowNull': true
      },
      'seq': {
        'type': DataTypes.INTEGER,
        'allowNull': true
      },
      'type': {
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
      'description': {
        'type': DataTypes.TEXT,
        'allowNull': true
      },
      'song_ids': {
        'type': DataTypes.TEXT,
        'allowNull': true
      },
      'timestamp': {
        'type': DataTypes.DOUBLE,
        'allowNull': true
      }
    }
  );
};

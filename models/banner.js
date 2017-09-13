module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'banner',
    {
      'seq': {
        'type': DataTypes.INTEGER,
        'allowNull': false
      },
      'title': {
        'type': DataTypes.STRING(45),
        'allowNull': false
      },
      'image': {
        'type': DataTypes.STRING(45),
        'allowNull': false
      },
      'url': {
        'type': DataTypes.INTEGER,
        'allowNull': false
      }
    }
  );
};

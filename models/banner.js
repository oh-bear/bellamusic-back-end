module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'banner',
    {
      'seq': {
        'type': DataTypes.INTEGER,
        'allowNull': true
      },
      'title': {
        'type': DataTypes.STRING(45),
        'allowNull': true
      },
      'image': {
        'type': DataTypes.STRING(125),
        'allowNull': true
      },
      'url': {
        'type': DataTypes.STRING(125),
        'allowNull': true
      }
    }
  );
};

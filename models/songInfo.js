module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'song_info',
    {
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
      'singer': {
        'type': DataTypes.STRING(125),
        'allowNull': true
      },
      'description': {
        'type': DataTypes.TEXT,
        'allowNull': true
      },
      'lyrics': {
        'type': DataTypes.TEXT,
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
      },
      'songId': {
        type: DataTypes.BIGINT(11),
        field: 'song_id',
        unique: true,
        references: {
          model: 'song',
          key: 'id'
        }
      }
    },{
      indexes: [{
        name: 'songInfo_songId',
        method: 'BTREE',
        fields: ['song_id']
      }]
    }
  );
};

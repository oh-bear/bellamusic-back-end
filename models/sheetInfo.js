module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'sheet_info',
    {
      'wid': {
        'type': DataTypes.INTEGER,
        'allowNull': true
      },
      'eid': {
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
      },
      'sheetId': {
        type: DataTypes.BIGINT(11),
        field: 'sheet_id',
        unique: true,
        references: {
          model: 'sheet',
          key: 'id'
        }
      }
    }, {
      indexes: [{
        name: 'sheetInfo_sheetId',
        method: 'BTREE',
        fields: ['sheet_id']
      }]
    }
  );
};

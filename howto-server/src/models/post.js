module.exports = (sequelize, DataTypes) => {
  return sequelize.define('post', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    author_seq: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    group:{
      type: DataTypes.STRING(20),
      allowNull: false
    },
    group_seq:{
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    category_seq: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    image:{
      type:DataTypes.TEXT,
      allowNull:true,
    },
    view_count: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    recommend: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    created_at: {
      type: 'TIMESTAMP',
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    },
    updated_at: {
      type: 'TIMESTAMP',
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    },
  }, {
    freezeTableName: true,
    timestamps: true,
  });
};



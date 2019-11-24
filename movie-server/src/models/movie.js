module.exports = (sequelize, DataTypes) => {
  return sequelize.define('movie', {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true
    },
    group_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    group_name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    author_id:{
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    links:{
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    view_count: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    like_count: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    image_large:{
      type:DataTypes.STRING(100),
      allowNull:true,
    },
    image_medium: {
      type: DataTypes.STRING(100),
      defaultValue: 0
    },
    image_small: {
      type: DataTypes.STRING(100),
      defaultValue: 0
    },
    gerne: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    director: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    running_time: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    screen_grade: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    cast: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    comment_count: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    release_date: {
      type: DataTypes.STRING(20),
      allowNull: false,
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



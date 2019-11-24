module.exports = (sequelize, DataTypes) => {
  return sequelize.define('media', {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true
    },
    category: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    category_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    author: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    author_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    links: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    view_count: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: 0
    },
    like_count: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: 0
    },
    image_large: {
      type: DataTypes.STRING(100),
      defaultValue: ''
    },
    image_medium: {
      type: DataTypes.STRING(100),
      defaultValue: ''
    },
    image_small: {
      type: DataTypes.STRING(100),
      defaultValue: ''
    },
    gerne: {
      type: DataTypes.TEXT,
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
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    comment_count: {
      type: DataTypes.INTEGER(11),
      defaultValue: 0
    },
    release_date: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  }, {
    freezeTableName: true,
    timestamps: true,
  });
};



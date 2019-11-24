module.exports = (sequelize, DataTypes) => {
  return sequelize.define('board_category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    group_name:{
      type: DataTypes.STRING,
      allowNull: false
    },
    category_group:{
      type: DataTypes.STRING,
      allowNull: false
    },
    category:{
      type: DataTypes.STRING,
      allowNull: false
    },
    category_en:{
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    freezeTableName:true,
  });
};



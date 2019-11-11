module.exports = (sequelize, DataTypes) => {
  return sequelize.define('person', {
    id:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true,
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,

    },
    age: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  }, {
    timestamps: true,
  });
};



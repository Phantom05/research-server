module.exports = (sequelize, DataTypes) => {
  return sequelize.define('board', {
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
    author:{
      type:DataTypes.STRING(20),
      allowNull:false
    },
    author_seq:{
      type:DataTypes.STRING(45),
      allowNull:false
    },
    category:{
      type:DataTypes.STRING(20),
      allowNull:false
    },
    view_count:{
      type:DataTypes.INTEGER,
      defaultValue:0
    },
    recommend:{
      type:DataTypes.INTEGER,
      defaultValue:0
    },
    privacy:{
      type:DataTypes.BOOLEAN,
      allowNull:false
    },
    category_seq:{
      type:DataTypes.STRING(20),
      allowNull:false
    }
    // group_seq:{
    //   type:DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true
    // },
  }, {
    freezeTableName:true,
    timestamps: true,
  });
};



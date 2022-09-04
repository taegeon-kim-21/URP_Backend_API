const dbConfig = require("../config/dbConfig.js");

module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("" + dbConfig.TABLE, {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            //autoIncrement: true
        },
        title: {
            type: DataTypes.TEXT
        },
        market: {
            type: DataTypes.TEXT
        },
        data: {
            type: DataTypes.TEXT
        },
        topic: {
            type: DataTypes.TEXT
        },
        is_annotated: {
            type: DataTypes.INTEGER
        },
    },
    // sequalize table 생성 시 복수형으로 s가 붙는 문제 해결
    {   underscored: true,
        freezeTableName: true,
        tableName: "corpus_1"
    });
    
    return Product;
}


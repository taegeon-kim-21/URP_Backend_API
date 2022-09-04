module.exports = {
    HOST: "jasonchoi.dev",
    PORT: 10004,
    USER: "idcurp",
    PASSWORD: "IDC4urp!",
    DB: "idclab",
    TABLE: "corpus_1",
    //TABLE: "final_dataset",
    //Table 변경시 productModel.js에서 tableName도 같이 변경해줘야함 ... (뒤에 s가 붙는 문제 해결)
    dialect: "mariadb",

    //can skip
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }

}
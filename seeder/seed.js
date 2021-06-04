import seeder from "mongoose-seed";

const db = "mongodb://localhost:3001/mindmanaged";

seeder.connect(db, function () {
    seeder.loadModels(modelPaths, [
        "./prescriptions"
    ]);
    seeder.clearModels(models, ['prescriptions']);
    seeder.populateModels(data, cb, function (err, done) {
        if (err) {
            return console.log("seed err", err)
        }
        if (done) {
            return console.log("seed done", done);
        }
        seeder.disconnect()
    })
})

const data = [
    {
        brand_name: "Lamictal",
        dosage: "150 MG",
        product_number: "002",
        user_id: null
    },
    {
        brand_name: "Lithium carbonate",
        dosage: "600 MG",
        product_number: "001",
        user_id: null
    }
];
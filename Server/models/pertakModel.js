const mongoose = require("mongoose");

const pertakSchema = new mongoose.Schema(
  {
    //Personel İsmi
    workerName: {
      type: String,
      required: true,
      //unique aynı isimle tek işçi oluşturulabilir
      unique: true,
    },
    //bölümü
    department: {
      type: String,
      required: true,
    },
    //İş Sayısı
    quantity: {
      type: Number,
      required: true,
    },
    //İsin Adı
    jobName: {
      type: String,
      required: true,
    },
    comments: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("pertakStore", pertakSchema);

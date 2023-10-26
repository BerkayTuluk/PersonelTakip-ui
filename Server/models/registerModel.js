const mongoose=require("mongoose");

const UserDetailsSchema = new mongoose.Schema({
  fname: String,
  email: {type: String, unique: true},
  phoneNo: String,
  password: String,
},
{
  collation:"UserInfo",
}
);

mongoose.model("UserInfo",UserDetailsSchema);

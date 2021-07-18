const mongoose = require('mongoose');
const bcrypt  = require('bcrypt');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
},

{ timestamps: true }); // need it! this is the options of the Schema, required
    
//need to compare password and confirm password and fail if do not match
//we will get the confirm password in the request body and need to have virtual space to hold while comparing
UserSchema.virtual("confirmPassword")
    .get(() => this._confirmPassword)
    .set((value) => this._confirmPassword = value);

UserSchema.pre("validate", function(next){
    if(this.password !== this.confirmPassword) {
    this.invalidate("confirmPassword", "Passwords didn't match. Please retype them.")
    }

//if the passwords match we can continue onto the normal validate steps, done by calling next funct
next();
})

//must encrypt password BEFORE sending to DB to make sure no one has access to users actual pswd

UserSchema.pre("save", function(next) {
    bcrypt.hash(this.password, 10)
        .then((hashedPassword) => {
            console.log("password" + this.password);
            console.log("hashed:" + hashedPassword);
            this.password = hashedPassword;
            next();
        })
})
const User = mongoose.model("User", UserSchema);

module.exports = User;

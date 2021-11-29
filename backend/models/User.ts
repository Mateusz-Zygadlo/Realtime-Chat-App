import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: 'string',
    require: true
  },
  password: {
    type: 'string',
    require: true,
  },
  nickname: {
    type: 'string',
    require: true
  }
})

module.exports = mongoose.model('Users', UserSchema);
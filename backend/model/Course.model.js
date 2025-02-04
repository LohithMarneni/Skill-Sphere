const mongoose = require('mongoose');
const CourseSchema = new mongoose.Schema({
  courseName: { type: String, required: true },
  resources: [
    {
      link: { type: String },
      description: { type: String }
    }
  ],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Course', CourseSchema);
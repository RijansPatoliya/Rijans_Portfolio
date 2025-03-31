import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Project description is required']
  },
  category: {
    type: String,
    required: [true, 'Project category is required'],
    enum: ['mern', 'html-css', 'figma'],
    lowercase: true
  },
  mediaType: {
    type: String,
    enum: ['image', 'video'], // तय करता है कि image दिखेगी या video
    required: true
  },
  mediaUrl: {
    type: String,
    required: [true, 'Media URL is required']
  },
  thumbnail: {
    type: String,
    required: function () {
      return this.mediaType === 'video'; // अगर video है तो thumbnail जरूरी होगा
    }
  },
  liveUrl: {
    type: String
  },
  codeUrl: {
    type: String
  },
  technologies: [{
    type: String,
    required: true
  }],
  featured: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Project  = mongoose.model('Project', projectSchema);
export default Project;
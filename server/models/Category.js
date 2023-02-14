const { Schema } = require('mongoose');

// This is a subdocument schema, 
const categorySchema = new Schema({
  categoryName: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  
  categoryId: {
    type: String,
    required: true,
  },
  
});

module.exports = categorySchema;
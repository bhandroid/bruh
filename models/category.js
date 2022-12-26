const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-updater");

mongoose.plugin(slug);

const categorySchema = Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    unique: true,
    slug: "title",
  },
  Subcategories:[{    
    Parent_Subcategory:{
      type: mongoose.Schema.Types.ObjectId,
       ref: "SubCategoryParent"
      },
      Child_Subcategory:[{
        type: mongoose.Schema.Types.ObjectId,
       ref: "SubCategoryChild"
      }]
    }]
});

module.exports = mongoose.model("Category", categorySchema);
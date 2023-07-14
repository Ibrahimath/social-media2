'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post.init({
    post_id: DataTypes.UUID,
    user_id: DataTypes.UUID,
    post: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};
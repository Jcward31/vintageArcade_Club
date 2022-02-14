const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// creating a Post model
class Post extends Model {
   upvote (body, models) {
    return models.Favorites.create({
      
      user_id: body.user_id
      ,post_id: body. post_id
    


    }).then(() => {
      return Post.findOne({
        where: {
          id: body.post_id
        },
        attributes: [
          'gameTitle',
          'created_at',
          [
            sequelize.literal('(SELECT COUNT(*) FROM Favorites WHERE post.id = Favorite.post_id)'),
            'Favorties_count'
          ]
        ],
        include: [
          {
            model: models.Favorites,
            attributes: [ 'Gametitle', 'created_at'],
            include: {
              model: models.User,
              attributes: ['username']
            }
          }
        ]
      });
    });
  }
}

// create fields/columns for Post model
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    gameTitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    post_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isURL: true
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
  }
);

module.exports = Post;
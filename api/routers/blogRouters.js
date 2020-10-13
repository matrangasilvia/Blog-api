'use strict';
module.exports = function(app) {
  var articles = require('../controllers/blogController');

  // articles Routes
  app.route('/articles')
    .get(articles.list_all_articles)
    .post(articles.create_a_article);


  app.route('/articles/:articleId')
    .get(articles.read_a_article)
    .put(articles.update_a_article)
    .delete(articles.delete_a_article)
	.patch(articles.patch_an_article);
	
};
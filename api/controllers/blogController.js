'use strict';

var mongoose = require('mongoose'),
  article = mongoose.model('articles');

exports.list_all_articles = function(req, res) {
  var query = req.query;
  query.draft=false;
  article.find(query,null,{sort: {'featured': -1}},function(err,article){
    if (err)
      res.send(err);
    res.json(article);
  });
};


exports.create_a_article = function(req, res) {
  var new_article = new article(req.body);
  new_article.save(function(err, article) {
    if (err)
      res.send(err);
    res.json(article);
  });
};


exports.read_a_article= function(req, res) {
  article.findById(req.params.articleId, function(err,article) {
    if (err)
      res.send(err);
    res.json(article);
  });
};


exports.update_a_article = function(req, res) {
  article.findOneAndUpdate({_id: req.params.articleId}, req.body, {new: true}, function(err, article) {
    if (err)
      res.send(err);
    res.json(article);
  });
};
exports.patch_an_article = function(req,res){
  Article.findOneAndUpdate({_id: req.params.articleId}, {$set: req.body}, function(err, article) {
    if (err)
      res.send(err);
    res.json(article);
  });
};

exports.delete_a_article = function(req, res) {


  article.remove({
    _id: req.params.articleId
  }, function(err, article) {
    if (err)
      res.send(err);
    res.json({ message: 'articolo cancellato con successo' });
  });
};

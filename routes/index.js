
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index.html', { title: 'Cloudant Boiler Plate' });
};
exports.home = function(req, res){
  res.render('home.html', { title: 'home page' });
};
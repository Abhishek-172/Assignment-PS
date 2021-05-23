//Handling the '/' Route and Rendering the Home Page via home.ejs file

module.exports.home = function(req, res)
{
    return res.render('home');
}
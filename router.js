const Authentication = require('./controllers/auth');
const passportService = require('./config/passport');
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', {session: false});
const requireSignIn = passport.authenticate('local', {session: false});
const usersController = require('./controllers/users');
const wineriesController = require('./controllers/wineries');

module.exports = function (app){

app.get('/', requireAuth, function(req, res) {
	res.send('Server is working...');
});

app.post('/signup', Authentication.signup);
app.post('/signin', requireSignIn, Authentication.signin);

//show all users
app.get('/users', usersController.index);
//show one user
app.get('/users/:id', usersController.show);
//update a user
app.put('/users/:id', usersController.update);
//delete a user
app.delete('/users/:id', usersController.destroy);
//see all users posts

app.get('/users/:id/wineries', wineriesController.index);
//show all wineries 
app.post('/users/:id/wineries', wineriesController.create);
//create a winery
app.get('/users/:id/wineries/winery_id', wineriesController.show);
//show one winery
app.put('/users/:id/wineries/winery_id', wineriesController.update);
//update a winery
app.delete('/users/:id/wineries/winery_id', wineriesController.destroy);
//delete a winery


}
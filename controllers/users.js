const User = require('../models/User');

function index(req, res){
    console.log('User Index: GET all Users');
    User.find({}, function(err, users){
        if (err){
            res.send(err);
        }
        return res.json(users);
    });
}

function show(req, res){
    console.log('User Show: GET one User');
    User.findById(req.params.user_id, function(err, foundUser){
        if(err){
            res.send('show err: ', err);
        }
        return res.json(foundUser);
    });
}

function update(req, res){
    console.log('Updating a user')
    User.findByIdAndUpdate(req.params.user_id, function(err, updatedUser){
        if(err){
            res.send('update err: ', err);
        }else{
            updatedUser.name = req.body.name;
			updatedUser.email = req.body.email;
            updatedUser.password = req.body.password;
            updatedUser.current_city = req.body.current_city;
            res.json(updatedUser);
         }
    });
   
}

function destroy(req, res){
    console.log('deleting a user');
    User.findByIdAndRemove(req.params.user_id, function(err, deleteUser){
        if (err){
            console.log('delete user err:', err);
            res.send("Error deleting User.");
        }
		res.send("User successfully deleted");
	});
}

module.exports={
    index: index,
    show: show,
    update: update,
    destroy: destroy

}
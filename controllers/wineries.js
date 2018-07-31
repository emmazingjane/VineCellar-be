const Winery = require('../models/Winery');

function index(req, res){
    console.log('Winery Index: GET all Wineries');
    Winery.find({}, function(err, wineries){
        if (err){
            res.send(err);
        }
        return res.json(wineries);
    });
}

function create(req, res){
    console.log("Winery Creation in Process");
    Winery.create(req.body, function(err, newWinery){
        if(err){
            res.send('error with creation ', err);
        } else{
           res.json(newWinery);
        }
    });
}

function show(req, res){
    console.log('User Show: GET one User');
    Winery.findById(req.params.id, function(err, foundWinery){
        if(err){
            res.send('show err: ', err);
        }
        return res.json(foundWinery);
    });
}

function update(req, res){
    console.log('Updating a Winery')
    Winery.findByIdAndUpdate(req.params.winery_id, function(err, updatedWinery){
        if(err){
            res.send('update err: ', err);
        }else{
            updatedWinery.name = req.body.name;
			updatedWinery.address = req.body.address;
            updatedWinery.website = req.body.website;
            updatedWinery.your_rating = req.body.your_rating;
            updatedWinery.photo = req.body.photo;
            updatedWinery.tasting_info = req.body.tasting_info;
            updatedWinery.wine_list = req.body.wine_list;
            updatedWinery.reservation = req.body.reservation;
            res.json(updatedWinery);
         }
    });
   
}

function destroy(req, res){
    console.log('deleting a winery');
    Winery.findByIdAndRemove(req.params.winery_id, function(err, deleteWinery){
        if (err){
            console.log('delete winery err:', err);
            res.send("Error deleting winery.");
        }
		res.send("Winery successfully deleted");
	});
}

module.exports={
    create: create,
    index: index,
    show: show,
    update: update,
    destroy: destroy

}
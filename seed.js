const Winery = require('./models/Winery');

let wineryList = [
    { name:"Stag's Leap",
    address: "5766 Silverado Trl, Napa, CA 94558-9413",
    website: "https://www.cask23.com/visit/tours-and-tastings",
    your_rating: "5",
    photo: "https://www.tripadvisor.com/Attraction_Review-g32766-d3662691-Reviews-Stag_s_Leap_Wine_Cellars-Napa_Napa_Valley_California.html#photos;geo=32766&detail=3662691&ff=320380723&albumViewMode=hero&aggregationId=101&albumid=101&baseMediaId=320380723&thumbnailMinWidth=50&cnt=30&offset=-1&filter=7&autoplay=",
    tasting_info: [{"Hours": "Monday, Tuesday, Thursday and Friday at 12:00 pm, April 2nd - December 31st, 2018."},{"price": "Starting at $75"}],
    wiine_list: ["2015 CASK 23 Cabernet Sauvignon", "2015 FAY Cabernet Sauvignon", "2015 SLV Cabernet Sauvignon"],
    reservation: "True",
  }
]


Winery.remove({}, function(err, removedWinery){
    Winery.create(wineryList, function (err, createdWinery) {
        console.log('You created a Winery!', createdWinery);
        
    });
})




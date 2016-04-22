var db = require('../controller/Connection');
var user= new Object();

var users ={
"users":[
    {"firstName":"John", "lastName":"Doe"}, 
    {"firstName":"Anna",	"lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
]
};

user.GetUser =function ()
{
    return users;
}

user.addUser = function(req)
{
    var requestObject= req.body;
    db(function (err,db)
    {
        collection = db.collection('users');
        collection.insert(
            {
                userName:requestObject.userName,
                firstName:requestObject.firstName,
                lastName:requestObject.lastName,
                email:requestObject.email,
                phone:requestObject.phone,
                mob:requestObject.mobile,
                addressline1:requestObject.addressline1,
                addressline2:requestObject.addressline2,
                city:requestObject.city,
                state:requestObject.state,
                country:requestObject.country,
                pin:requestObject.pin,
            });
       });
}
module.exports= user;
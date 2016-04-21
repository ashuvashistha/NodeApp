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

user.test =function ()
{
 return 'y';
}

module.exports= user;

var jwt = require('jsonwebtoken');


const LoginUser=(req,res)=>
{
console.log('its here');
const User={
    name:'wisdom',
    password:12345
}
console.log(req.body.username,User.name);
console.log(req.body.password,User.password);
if(req.body.username===User.name&&req.body.password==User.password)
{
    console.log('eiorguhnes');
    console.log(User);
    const accessToken =jwt.sign(User,process.env.accessToken,{expiresIn:'30d'})

console.log(accessToken);
    res.json({accessToken,User})
}
else
{
    console.log('login failed');
    res.status(401).json(false)
}
}
module.exports={LoginUser}
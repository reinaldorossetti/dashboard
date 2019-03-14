
//---------------------------------------------signup page call------------------------------------------------------
var bcrypt = require('bcryptjs');

exports.signup = function(req, res){

    message = '';
    if(req.method == "POST"){

        var post = req.body;
        var fname = post.first_name;
        var lname = post.last_name;
        var mob = post.mob_no;
        var email = post.email;

        bcrypt.hash(post.password, 8, function(err, hash) {
            var sql = "INSERT INTO `users`(`first_name`,`last_name`,`email`,`mob_no`,`password`) VALUES ('" + fname + "','" + lname + "','" + email + "','" + mob + "','" + hash + "')";
            db.query(sql, function(err, result) {
                message = "Succesfully! Your account has been created.";
                res.render('signup.ejs',{message: message});
            });
        });
    } else {
      res.render('signup');
   }
};
 
//-----------------------------------------------login page call------------------------------------------------------
exports.login = function(req, res){
   var message = '';
   var sess = req.session; 

   if(req.method == "POST"){
      var post  = req.body;
      var email= post.email;
      var pass= post.password;

        var sql="SELECT id, first_name, last_name, password FROM `users` WHERE `email`='"+email+"'";

        db.query(sql, function(err, results){
            //console.log(results[0].password);
            bcrypt.compare(pass, results[0].password, function(err, result) {
                // console.log("result:" + result);
                if(result){
                    // console.log("dashboard:" + result);
                    req.session.userId = results[0].id;
                    req.session.user = results[0].first_name + " " + results[0].last_name;
                    // console.log(results[0].id);
                    res.redirect('/home/dashboard');
                 }
                 else{
                    message = 'Wrong Credentials.';
                    res.render('index.ejs',{message: message});
                 }  

            });


        });

   } else {
      res.render('index.ejs',{message: message});
   }
           
};

//------------------------------------logout functionality----------------------------------------------
exports.logout=function(req,res){
   req.session.destroy(function(err) {
      res.redirect("/login");
   })
};
//--------------------------------render user details after login--------------------------------
exports.profile = function(req, res){

   var userId = req.session.userId;
   if(userId == null){
      res.redirect("/login");
      return;
   }

   var sql="SELECT * FROM `users` WHERE `id`='"+userId+"'";          
   db.query(sql, function(err, result){  
      res.render('profile.ejs',{data:result});
   });
};
//---------------------------------edit users details after login----------------------------------
exports.editprofile=function(req,res){
   var userId = req.session.userId;
   if(userId == null){
      res.redirect("/login");
      return;
   }

   var sql="SELECT * FROM `users` WHERE `id`='"+userId+"'";
   db.query(sql, function(err, results){
      res.render('edit_profile.ejs',{data:results});
   });
};

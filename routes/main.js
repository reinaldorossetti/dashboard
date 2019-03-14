//-----------------------------------------------dashboard page functionality----------------------------------------------
           
exports.dashboard = function(req, res, next){
           
    var user =  req.session.user,
    userId = req.session.userId;
    console.log('id='+userId);
    if(userId == null){
       res.redirect("/login");
       return;
    }
 
    // var sql="SELECT * FROM `monitor_chamados`";
    res.render('dashboard.ejs');   
    // db.query(sql, function(err, result){
    //  //console.log(result);
        
    // });
       
 };


exports.dia = function(req, res, next){
           
  var user =  req.session.user,
  userId = req.session.userId;
  console.log('id='+userId);
  if(userId == null){
     res.redirect("/login");
     return;
  }

  var sql="SELECT * FROM `monitor_chamados` where  DAY(created) =  DAY(now())";

  db.query(sql, function(err, result){
   //console.log(result);
     res.render('filtropordia.ejs', {dataf:result});    
  });
     
};

exports.mes = function(req, res, next){
           
  var user =  req.session.user,
  userId = req.session.userId;
  console.log('id='+userId);
  if(userId == null){
     res.redirect("/login");
     return;
  }

  var sql="SELECT * FROM `monitor_chamados` where  MONTH(created) =  MONTH(now())";

  db.query(sql, function(err, result){
   //console.log(result);
     res.render('filtropormes.ejs', {dataf:result});    
  });
     
};

exports.semana = function(req, res, next){
           
  var user =  req.session.user,
  userId = req.session.userId;
  console.log('id='+userId);
  if(userId == null){
     res.redirect("/login");
     return;
  }

  var sql="SELECT * FROM `monitor_chamados` where  WEEK(created) =  WEEK(now())";

  db.query(sql, function(err, result){
   //console.log(result);
     res.render('filtroporsemana.ejs', {dataf:result});    
  });
     
};

exports.tudo = function(req, res, next){
           
  var user =  req.session.user,
  userId = req.session.userId;
  console.log('id='+userId);
  if(userId == null){
     res.redirect("/login");
     return;
  }

  var sql="SELECT * FROM `monitor_chamados`";

  db.query(sql, function(err, result){
   //console.log(result);
     res.render('completo.ejs', {dataf:result});    
  });
     
};
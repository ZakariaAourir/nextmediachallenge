const express = require("express");
const mongodb = require("mongodb");
const router = express.Router();
/*const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;



router.get('/register', (req, res, next) => {
  res.render('register');
});
// login page - get method -
router.get('/login', (req, res, next) => {
  res.render('login');
});


// logout -
router.get('/logout', (req, res, next) => {
  req.logout();
  req.flash('success_msg', 'you are logged out');
  res.redirect('/login');
});

//register post
router.post('/register', (req, res, next) => {
  const name = req.body.name ;
  const username = req.body.username ;
  const password = req.body.password ;
  const password2 = req.body.password2 ;

  req.checkBody('name', 'First Name field is required').notEmpty();
  req.checkBody('username', 'Username field is required').notEmpty();
  req.checkBody('password', 'Password field is required').notEmpty();
  req.checkBody('password2', 'Password does not match').equals(req.body.password);

  let errors = req.validationErrors();

  if(errors){
    res.render('register', {
      errors: errors
    });
  } else {
    const newUser = new User({
      name: name,
      username: username,
      password: password
    });

    User.registerUser(newUser, (err, user) => {
      if(err) throw err;
      req.flash('success_msg', 'You are registered and you can login');
      res.redirect('/login');
      console.log('succed');
    });
  }
});
// local Strategy

passport.use(new LocalStrategy((username, password, done) => {
  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user){
      return done(null, false, {message: 'User Not Found'});
    }
    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        return done(null, user);
      } else {
        return done(null, false, {message: 'wrong Password'});
      }
    });
  });
}));

//serialise

passport.serializeUser((user, done) => {
  done(null, user.id);
});
// deserialise

passport.deserializeUser((id, done) => {
  User.getUserById(id, (err, user) => {
    done(err, user);
  });
});

// login process - post method
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect:'/',
    failureRedirect:'/login',
    failureFlash:true
  })(req, res, next);
  console.log('you r logged in');
});

// acces controle
function isLoggedIn(req, res, next) {
  console.log(req.isAuthenticated());
  if(req.isAuthenticated()){
    return next();
  } else{
    res.redirect('/homepage');
  }
  req.flash('error_msg', 'you are not autorized');
}
*/
//get methode
router.get('/', async (req, res, next) => {
  const posts = await loadPostCollection();
  res.send(await posts.find({}).toArray());
});
// post method -add posts-
router.post('/', async (req, res, next) => {
  const posts = await loadPostCollection();
  await posts.insertOne({
    text: req.body.text,
    createdAt: new Date()
  });
  res.status(201).send();
});
//delete posts
router.delete('/:id', async (req, res, next) => {
  const posts = await loadPostCollection();
  await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
  res.status(201).send();
});

// get database collection
async function loadPostCollection() {
  const client = await mongodb.MongoClient.connect('mongodb://localhost/post', {
    useNewUrlParser: true
  })
  return client.db('Post').collection('post');
}

module.exports = router;

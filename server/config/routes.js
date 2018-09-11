var mongoose = require('mongoose');
var e = require('../controllers/maincontroller.js');
var u = require('../controllers/usercontroller.js');
module.exports = function(app) {
    app.get('/api/exercises/:muscle', e.allExercise),
    app.post('/api/exercise/new', e.newExercise),
    app.get('/api/exercise/remove/:id',e.removeExercise),
    app.get('/api/exercise/:id', e.showExercise),
    app.post('/api/exercise/edit/:id',e.editExercise),
    app.post('/api/user/new',u.newUser),
    app.post('/api/user/login',u.loginUser),
    app.post('/api/workout/new/:email',e.newWorkout),
    app.get('/api/user/workout/',e.getWorkouts),
    app.get('/api/user/workoutplan/:id',e.showWorkout),
    app.post('/api/user/workout/update/:id',e.updateWorkout)
};
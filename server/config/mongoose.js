const mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
mongoose.connect('mongodb://localhost/workout');
var models_path = (path.join(__dirname,'./../models'));
//reads all fo teh files in the models_path and require(run) each of the javascript files
fs. readdirSync(models_path).forEach((file)=>{
    if(file.indexOf('.js') >= 0){
        require(models_path + '/' + file);
        //requires the fiel (this runs the nmodel file which registers the schema)
    }
});
mongoose.Promise = global.Promise;
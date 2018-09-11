var mongoose = require('mongoose');


let ExerciseSchema = new mongoose.Schema({
    name:{type:String, required:true},
    muscle_group:[String],
    push_pull:{type:String},
});

let WorkoutSchema = new mongoose.Schema({
    name:{type:String},
    set:{type:Number, default:0},
    rep:{type:Number,default:0},
    pounds:{type:Number,default:0},
})
let WorkoutPlanSchema =  new mongoose.Schema({
    workout:[WorkoutSchema],
    date:{type:Date, default:Date.now}},
    {timestamps:true});

let UserSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String, required:true,unique:true},
    password:{type:String,required:true},
    workout_plan:[WorkoutPlanSchema]
});

mongoose.model('User',UserSchema);
mongoose.model('Exercise',ExerciseSchema);
mongoose.model('WorkoutPlan',WorkoutPlanSchema);
mongoose.model('Workout',WorkoutSchema)


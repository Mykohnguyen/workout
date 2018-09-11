var mongoose=require('mongoose');
var E = mongoose.model('Exercise');
var W = mongoose.model('Workout')
var WP = mongoose.model('WorkoutPlan')
var U = mongoose.model('User')

module.exports = {
    allExercise: (req, res)=>{
        E.find({muscle_group:{$all:[req.params.muscle]}} ,(err, results)=>{
            res.json(results);
        }).sort({name:1});
    },
    newExercise : (req, res)=>{
       var temp = new E(req.body);
       temp.save((err,result)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(result);
            }
        });
    },
    removeExercise: (req, res)=> {
        E.remove({_id: req.params.id}, (err)=> {
            res.json({sucess:true});
        });
    },
    showExercise:(req, res) =>{
        E.findOne({_id: req.params.id}, (err, results) =>{
            res.json(results);
        });
    },
    editExercise :(req,res) =>{
        E.updateOne({_id: req.params.id},req.body,{new:true}, (err) =>{
            res.json({success:true});
        })
    },
    newWorkout: (req,res) =>{
        var wp = new WP({title:"",workout:req.body});
        console.log(wp,'wtf!',req.body)
        wp.save((err,result)=>{
            if(err){
                res.json(err)
            }
            else{
                // U.findOneAndUpdate({email:req.params.email},{$push:{workout_plan:result}},((test)=>{
                //     res.json(test)
                // }))
                res.json(result);
            }
        })
        // U.findOneAndUpdate({email:req.params.email},{$push:{workout_plan:wp}},(err,result)=>{
        //     if(err){
        //         res.json(err);
        //     }
        //     else{
        //         console.log("hi","json",result)
        //         res.json(result)
        //     }
        // })
    },
    getWorkouts:(req,res)=>{
        WP.find({},(err,result)=>{
            if(err){
                res.json(err)
            }
            else{
                res.json(result)
            }
        })
    },
    showWorkout:(req,res) =>{
        WP.findOne({_id:req.params.id},(err,result)=>{
            if(err){
                res.json(err)
            }
            else{
                res.json(result)
            }
        })
        // U.find({"workout_plan._id":req.params.id},{"workout_plan.$":1}, (err,result)=>{
        //     if(err){
        //         res.json(err)
        //     }
        //     else{
        //         res.json(result)
        //         console.log(result,"workout plan exists")
        //     }
        // })
    },
    updateWorkout:(req,res)=>{
        WP.updateOne({_id:req.params.id},{$set:{workout:req.body}},(err,result) =>{
            if(err){
                res.json(err)
            }
            else{
                res.json(result);
            }
        })
    //    U.updateOne({"name":"Michael","workout_plan._id":req.params.id},{$set:{"workout_plan.$.workout.0":req.body}},(err,result)=>{
    //        if(err){
    //            res.json(err)
    //        }
    //        else{
    //            res.json(result)
    //        }
    //    })
    }
}
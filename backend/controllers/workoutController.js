const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')
// get all workouts
const getWorkouts = async (req,res)=>{
    try{
        //如果要find reps为20的就写在find里面
        // -1降序排列
        const workouts = await Workout.find({}).sort({createdAt:-1})
        res.status(200).json(workouts)
    }catch(err){
        res.status(400).json({error:err.message})
    }
}
// get a single workout
const getAWorkout = async (req,res)=>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message:'Workout not found'})
    }
    const workout = await Workout.findById(id)
    if (!workout){
        return res.status(404).json({message:'No such workout'})
    }
    res.status(200).json(workout)
}
// create a new workout
const createWorkout = async (req,res)=>{
    const {title,reps,load} = req.body
    let emptyFields = []

    if(!title){
        emptyFields.push('title')
    }
    if(!load){
        emptyFields.push('load')
    }
    if(!reps){
        emptyFields.push('reps')
    }
    if(emptyFields.length>0){
        return res.status(400).json({error:'Please fill in all the fields',emptyFields})
    }
    try{
        const workout = await Workout.create({title,reps,load})
        res.status(200).json(workout)
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

// delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params;
    // 验证传入的 ID 是否有效
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'Workout not found' });
    }
    // 执行删除操作，返回被删除的 workout
    const workout = await Workout.findOneAndDelete({ _id: id });
    if (!workout) {
        return res.status(404).json({ message: 'No such workout' });
    }
    // 返回被删除的 workout 详情，而不仅仅是一个消息
    res.status(200).json(workout);
}


//update a workout
const updateWorkout = async (req,res)=>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message:'Workout not found'})
    }
    const workout = await Workout.findOneAndUpdate(
        {_id:id},
        {...req.body},
        {new: true}
    )
    if (!workout){
        return res.status(400).json({message:'No such workout'})
    }
    res.status(200).json(workout)

}


module.exports = {
    createWorkout,
    getAWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
}
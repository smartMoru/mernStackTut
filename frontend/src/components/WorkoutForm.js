import { useState } from 'react';

const WorkoutForm = () => {
	// useState后面是空字符串 如果想添加一个新的 就不需要重置他的状态
	const [title, setTitle] = useState('')
	const [load, setLoad] = useState('')
	const [reps, setReps] = useState('')
	const [error, setError] = useState(null)

	const handleSubmit = async (e) => {
		// 防止自动刷新
		e.preventDefault()
		const newWorkout = { title, load, reps }

		const response = await fetch('/api/workouts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newWorkout)
		})
		const json = await response.json()
		
		if (!response.ok) {
			setError(json.error)
		}
		if (response.ok) {
			setTitle('')
			setLoad('')
			setReps('')
			setError(null)
			console.log('Workout added',json)
		}
	
	}
	return (
		<form className='create' onSubmit={handleSubmit}>
			<h3>Add a new workout</h3>
			<label>Title:</label>
			<input 
				type='text'
			 	onChange={(e) => setTitle(e.target.value)}
				value={title}
			 />
			<label>Load (in kg):</label>
			<input 
				type='number'
			 	onChange={(e) => setLoad(e.target.value)}
				value={load}
			 />
			<label>Reps:</label>
			<input 
				type='number'
			 	onChange={(e) => setReps(e.target.value)}
				value={reps}
			 />
			<button>add workout</button>
			{error && <div className='error'>{error}</div>}
		</form>

	)
}
export default WorkoutForm
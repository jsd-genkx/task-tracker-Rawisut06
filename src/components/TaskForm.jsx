import { useState } from "react";

export default function TaskForm({onAddTask}) {
	const [text, setText] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		if (text.trim()) {
			onAddTask({
				id: Date.now(),
				text,
			});
			setText("");
		}
	}

	return (
		<form className="flex gap-4" onSubmit={handleSubmit}>
			<input
				type="text"
				value={text}
				onChange={e => setText(e.target.value)}
				placeholder="Add new task"
				className="border-black"
			/>
			<button
				type="submit"
				className="px-2 py-1 text-white border-black rounded-sm bg-slate-800"
				>Add</button>
		</form>
	);
}
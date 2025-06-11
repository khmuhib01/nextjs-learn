'use client'; // Add this if you're using App Router

import {useState} from 'react';
import RichTextEditor from './../../components/RichTextEditor'; // adjust path if needed

export default function EditorPage() {
	const [content, setContent] = useState('');

	const handleSubmit = () => {
		console.log('Submitted content:', content);
		// You can also send this HTML to an API or store in database
	};

	return (
		<div className="max-w-4xl mx-auto py-8 px-4">
			<h1 className="text-2xl font-bold mb-4">Write a Blog Post</h1>
			<RichTextEditor value={content} onChange={setContent} />
			<button onClick={handleSubmit} className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
				Publish
			</button>
		</div>
	);
}

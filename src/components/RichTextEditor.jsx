'use client';

import dynamic from 'next/dynamic';
import {useEffect, useState} from 'react';

// Dynamically import ReactQuill to disable SSR
const ReactQuill = dynamic(() => import('react-quill'), {ssr: false});

const modules = {
	toolbar: [
		[{header: [1, 2, 3, false]}],
		['bold', 'italic', 'underline', 'strike'],
		['blockquote', 'code-block'],
		[{list: 'ordered'}, {list: 'bullet'}],
		['link', 'image'],
		['clean'],
	],
};

const formats = [
	'header',
	'bold',
	'italic',
	'underline',
	'strike',
	'blockquote',
	'code-block',
	'list',
	'bullet',
	'link',
	'image',
];

export default function RichTextEditor({value, onChange}) {
	const [editorLoaded, setEditorLoaded] = useState(false);

	useEffect(() => {
		setEditorLoaded(true);
	}, []);

	if (!editorLoaded) return <p>Loading editor...</p>;

	return (
		<div className="my-4">
			<ReactQuill
				theme="snow"
				value={value}
				onChange={onChange}
				modules={modules}
				formats={formats}
				placeholder="Write your code blog post here..."
				style={{height: '300px', marginBottom: '2rem'}}
			/>
		</div>
	);
}

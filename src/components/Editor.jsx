'use client';
// components/Editor.jsx
import {useEditor, EditorContent} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import {lowlight} from 'lowlight/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

lowlight.registerLanguage('javascript', javascript);

const Editor = () => {
	const editor = useEditor({
		extensions: [
			StarterKit,
			CodeBlockLowlight.configure({
				lowlight,
			}),
		],
		content: '<p>Hello Code!</p>',
	});

	return <EditorContent editor={editor} />;
};

export default Editor;

import { Editor, MarkdownView, Plugin } from 'obsidian';

// Remember to rename these classes and interfaces!

export default class MoveByWord extends Plugin {
	async onload() {
		this.addCommand({
			id: 'forward-word',
			name: 'Forward word',
			editorCallback: (editor: Editor, _: MarkdownView) => {
				editor.exec("goWordRight");
			}
		});

		this.addCommand({
			id: 'backward-word',
			name: 'Backward word',
			editorCallback: (editor: Editor, _: MarkdownView) => {
				editor.exec("goWordLeft");
			}
		});

		this.addCommand({
			id: "delete-word-forward",
			name: "Delete word forward",
			editorCallback: (editor: Editor, _: MarkdownView) => {
				const cursorBefore = editor.getCursor();
				editor.exec("goWordRight");
				editor.exec("goRight");
				const cursorAfter = editor.getCursor();
				editor.setSelection(cursorBefore, cursorAfter);
				editor.replaceSelection("");
			},
		});
	}
}


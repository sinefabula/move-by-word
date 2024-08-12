import { App, Editor, MarkdownView, Modal, Plugin } from 'obsidian';

// Remember to rename these classes and interfaces!

export default class MyPlugin extends Plugin {
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
			id: "kill-word",
			name: "Kill word",
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

	onunload() {

	}
}

class SampleModal extends Modal {
	constructor(app: App) {
		super(app);
	}

	onOpen() {
		const { contentEl } = this;
		contentEl.setText('Woah!');
	}

	onClose() {
		const { contentEl } = this;
		contentEl.empty();
	}
}


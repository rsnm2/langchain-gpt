// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "langchain-gpt-vscode" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('langchain-gpt-vscode.langchainGPT', async () => {
		const inputOptions: vscode.InputBoxOptions = {
			prompt: "Type a description of what you would like to do in LangChain:",
		  };
		
		const value = await vscode.window.showInputBox(inputOptions);
		if (value !== undefined) {
			vscode.window.showInformationMessage(value);
		}
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
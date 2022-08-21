const vscode = require('vscode');
const axios = require('axios');
// const { toEditorSettings } = require('typescript');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

  const url = vscode.workspace.getConfiguration().get('improviz.url');

	let disposable1 = vscode.commands.registerTextEditorCommand('improviz.runInImproviz', editor => {

    // maybe a hack since I couldn't figure out if/how I could add an "improviz" language to vscode
    if (editor.document.fileName.split('.').pop() !== 'pz') {
      return
    }

    const data = editor.document.getText();
    axios.post(`${url}/read`, data)
      .then((res) => {
        console.log(`/read Status: ${res.status}`);
      }).catch((err) => {
        console.error(err);
      });
  });

  let disposable2 = vscode.commands.registerTextEditorCommand('improviz.toggleText', editor => {
    
    // maybe a hack since I couldn't figure out if/how I could add an "improviz" language to vscode
    if (editor.document.fileName.split('.').pop() !== 'pz') {
      return
    }

    axios.post(`${url}/toggle/text`)
      .then((res) => {
        console.log(`/toggle/text Status: ${res.status}`);
      }).catch((err) => {
        console.error(err);
      });
  });

	context.subscriptions.push(disposable1,disposable2);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}

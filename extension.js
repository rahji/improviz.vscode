const vscode = require('vscode');
const axios = require('axios');
// const { toEditorSettings } = require('typescript');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	let disposable1 = vscode.commands.registerTextEditorCommand('improviz.runInImproviz', editor => {
    // to do: 
    // - get host and port from settings
    // - set up keyboard shortcuts (send entire buffer)
    // x add special command for interface control (/toggle/text)
    // x only work for .pz extension

    // maybe a hack since I couldn't figure out if/how I could add an "improviz" language to vscode
    if (editor.document.fileName.split('.').pop() !== 'pz') {
      return
    }

    const data = editor.document.getText();
    axios.post('http://localhost:3000/read', data)
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

    axios.post('http://localhost:3000/toggle/text')
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

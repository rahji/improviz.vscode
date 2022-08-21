const vscode = require('vscode');
const axios = require('axios');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	let disposable1 = vscode.commands.registerCommand('improviz.runInImproviz', function () {
    // to do: 
    // - get host and port from settings
    // - set up keyboard shortcuts (send entire buffer)
    // x add special command for interface control (/toggle/text)
    // - only work for .pz extension

    const data = "cube()";
    axios.post('http://localhost:3000/read', data)
      .then((res) => {
        console.log(`/read Status: ${res.status}`);
      }).catch((err) => {
        console.error(err);
      });
  });

  let disposable2 = vscode.commands.registerCommand('improviz.toggleText', function () {
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

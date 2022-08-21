# Improviz VSCode Extension

This Visual Studio Code Extension allows interacting with [Improviz](https://improviz.rumblesan.com/) by sending it code to run.

## Features

The extension has minimal features:

* It lets you send the current editor buffer to Improviz by running the "Run In Improviz" command from VSCode
* You can toggle the visibility of the code in the Improviz output window, using the "Toggle Improviz Text" command
* It allows you to configure keyboard shortcuts for each of those commands
* It lets you change the hostname and port that those commands send to, in your VSCode settings

The default key binding for sending the on-screen code to Improviz is Ctrl+Enter (or CMD+Enter on Mac)

In case you're new to VSCode, you can use the commands described above by using Ctrl+Shift+P (or CMD+Shift+P) to show the Command Pallete. Then just start typing part of the command name (eg: "improviz").

## Requirements

This extension requires [Improviz](https://improviz.rumblesan.com/)

## Extension Settings

This extension contributes one setting:

* `improviz.url`: The default is `https://localhost:3000`

## Release Notes

### 1.0.0
Initial release of the extension

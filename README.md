# Improviz VSCode Extension

This Visual Studio Code Extension allows interacting with [Improviz](https://improviz.rumblesan.com/) by sending it code to run.

## Features

The extension has minimal features:

* It lets you send the current editor buffer to Improviz by running the "Run In Improviz" command from VSCode
* You can toggle the visibility of the code in the Improviz output window, using the "Toggle Improviz Text" command
* It allows you to configure keyboard shortcuts for each of those commands
* It lets you change the hostname and port that those commands send to, in your VSCode settings

## Requirements

This extension requires [Improviz](https://improviz.rumblesan.com/)

## Extension Settings

This extension contributes one setting:

* `improviz.url`: The default is `https://localhost:3000`

## Release Notes

### 0.0.1
Initial release of the extension

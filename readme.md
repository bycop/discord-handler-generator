# discord-handler-generator
<a href="https://www.npmjs.com/package/discord-handler-generator"><img src="https://img.shields.io/npm/dt/discord-handler-generator.svg?maxAge=3600" alt="NPM downloads" /></a>

## About

A tool to generator command handler easily for Discord.js

## Installation

```sh-session
npm install discord-handler-generator
```

## usage

```js
const dhg = require('discord-handler-generator');

dhg.gen();
```
This command will create :
- Events (Folder)
- Commands (Folder)
- index.js (If you doesn't have already one, be careful to save it before delete)
- Events/event-example.js (File, Example of Event Handler file)
- Commands/command-example.js (File, Example of Command Handler file)

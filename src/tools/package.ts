export default {
	"name": "xernerx-commands",
	"version": "0.0.10",
	"type": "module",
	"description": "An extension for the xernerx framework containing a collection of commands useful for when developing a bot.",
	"main": "dist/main.js",
	"keywords": [
		"xernerx"
	],
	"author": "Dummi",
	"license": "MIT",
	"homepage": "https://thedummi.github.io/xernerx/home.html",
	"packageManager": "npm@8.5.5",
	"scripts": {
		"start": "npm i && npm fund && npm audit fix --force && npm link && tsc -w",
		"build": "node ../../.scripts/rewritePackage.js",
		"patch": " npm run build && tsc && git add . && npm run commit && npm version patch && npm publish && git push",
		"minor": " npm run build && tsc && git add . && npm run commit && npm version minor && npm publish && git push",
		"major": " npm run build && tsc && git add . && npm run commit && npm version major && npm publish && git push",
		"commit": "node ../../.scripts/commit.js"
	},
	"bugs": {
		"url": "https://github.com/TheDummi/xernerx-commands/issues"
	},
	"repository": {
		"type": "git",
		"url": "git+https://github.com/TheDummi/xernerx-commands.git"
	},
	"dependencies": {
		"got": "^12.5.3",
		"xernerx": "^3.3.5"
	},
	"devDependencies": {
		"@types/node": "^18.11.18",
		"typescript": "^4.9.4"
	}
}

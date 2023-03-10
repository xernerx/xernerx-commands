export default {
    "name": "xernerx-commands",
    "version": "0.0.14",
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
    "exports": {
        "import": "./dist/main.js",
        "require": "./dist/main.cjs",
        "types": null,
        "node": null,
        "default": null
    },
    "scripts": {
        "start": "npm i && npm audit fix --force && npm fund && npm link && tsc -w",
        "patch": "npm run write && git add . && npm run commit && npm version patch && npm publish && git push",
        "minor": "npm run write && git add . && npm run commit && npm version minor && npm publish && git push",
        "major": "npm run write && git add . && npm run commit && npm version major && npm publish && git push",
        "site": "git add docs && npm run commit && git push",
        "commit": "node ../../.scripts/commit.js",
        "write": "npm run build && node ../../.scripts/rewritePackage.js ",
        "build": "tsc && npx tsup src/main.ts && npx prettier --write src"
    },
    "bugs": {
        "url": "https://github.com/TheDummi/xernerx-commands/issues"
    },
    "repository": {
        "type": "git",
        "url": "git+https://github.com/TheDummi/xernerx-commands.git"
    },
    "dependencies": {
        "xernerx": "^3.3.5"
    },
    "devDependencies": {
        "@types/node": "^18.11.18",
        "prettier": "^2.8.4",
        "tsup": "^6.6.3",
        "typescript": "^4.9.4"
    }
}

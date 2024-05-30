## Setup

Install Node Version Manager (NVM)
Run:
`nvm use`
`npm install`
`npm run install-git-hooks`

Note, that if you have an M1 mac, you might NOT want to use NVM afterall (until it has native support), because esbuild will complain about platform-specific installation problems. Because (at the time of writing) NVM uses Rosetta 2.
So in this case, just download/install node from the official website.

## Upgrade libs in package.json

Run:
`npx npm-check-updates -u` every once in a while to keep our libs up to date

## Npm scripts

### Build

Developer (includes sourcemaps):  
`npm run build-dev`
<br/>

Production (minified):  
`npm run build-prod`

### Lint, git hooks

`eslint-report` reports lint problems, like "something has been exported from a file, but it's not imported anywhere", and some code formatting stuff

`eslint-fix` also tries to fix these problems automatically (not every problem can be fixed this way, some type of problems need human interaction)

`install-git-hooks` should be run once (after `npm install`). It install some git hooks. In our case, it will prevent you from committing unformatted code, or code with type errors. Essentially it calls typescripts' type check, and `eslint-fix` for the staged files when you try to commit. If there's any errors, it will refuse to continue with the commit command. If, for some reason you need to commit something that has type/lint errors (eg.: when you're in the middle of refactoring something), you can use the `n` (no-verify) flag for git commit. Eg.: `git commit -n -m "Fix login error"`

## Run

You can use any kind of webserver to actually check the build locally (eg.: WAMP, MAMP, apache, etc).
For development, you can run `npm run start-dev`, and visit [localhost:3000](localhost:3000) in your browser.
You can make changes to the sourcefiles, and you'll see the changes immediately.
Note that this feature is only supported by CSS, and functional components. If you make changes to class-based components, and you save your file, you'll get a full-page reload, unfortunately. (This is one more reason why we tend to use functional components in the future - every new component should be a functional component, we shouldn't create any new class-based components)

## General overview

Used technologies, libraries:

- TypeScript
- React
- vite
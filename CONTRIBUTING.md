# bChef contributing guidelines

Thank you for taking the time to contribute to our project. Please take a moment to read the following guidelines before contributing:

- [Code of Conduct](https://github.com/codeboyfriend/bChef/blob/master/CODE_OF_CONDUCT.md)
- [Appending new receipe](#appending-new-receipe)
- [Issues](#issues)
- [New Feature](#new-feature)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Making pull requests](#making-pull-requests)

## Appending new receipe

- You can append recipe of any meal across the world to the list of recipes in the database.
- Don't make duplicate entries.
- Make a proper research on the recipe you want to add
- Ensure that your entries are error-free by double-checking before staging your files.

## Issues

- Always create [issues](https://github.com/codeboyfriend/bChef/issues) before making Pull Requests.
- Always ensure not to recreate an existing issue.
- Always ensure that your Pull Requests are linked to their corresponding Issues.

## Prerequisites

- Open Source Etiquette: If you've never contributed to an open source project before, have a read of [Basic etiquette](https://developer.mozilla.org/en-US/docs/MDN/Contribute/GitHub_beginners) for open source projects.
- Basic familiarity with Git and GitHub: If you are also new to these tools, visit [GitHub for complete beginners](https://developer.mozilla.org/en-US/docs/MDN/Contribute/GitHub_beginners) for a comprehensive introduction to them
- [Node.js](https://nodejs.org/) is installed.

## Setup

Setting up the project and make changes

1. [Fork](https://github.com/codeboyfriend/bChef/fork) this repository.
2. Assuming that your GitHub username is **codeboyfriend**, open your terminal and do the following: 

```sh
cd ~/Desktop
git clone git@github.com:codeboyfriend/bChef.git
```

3. Now, check if your local clone is in origin remote:

```sh
cd bChef
git remote -v
```

if it is in origin remote then skip the next step

4. To add origin remote:

```sh
cd bChef
git remote add origin `<Link of the forked repo in your Github account>`
```

5. Now, you will add uptream remte which will be used in tracking changes and keeping your local clone as well as your fork up-to-date:

```sh
cd Abbreve
git remote add upstream git@github.com:codeboyfriend/bChef.git
```

6. Run `git branch` to confirm that you are on the `master` branch. Then, pull the latest changes and create a new branch (**my-changes** or whatever you want to call it) by doing the following:

```sh
git checkout master
git pull bChef master
git checkout -b my-changes
```

> **Note**: Use a self-descriptive name for your feature branch (e.g `feat-featureName`, `bugFix-bugName`, `readme-grammaticalError`).

Now, you are ready to start making changes.

7. Next, you'll want to start the local preview service to see how the changes you'll make would look in production. Once started, this preview would be available at `http://localhost:3000/` within your browser. To do this, open a **new** terminal and run the following:

```sh
# switch to a new terminal
npm install
npm start
```

8. Make your desired changes to any of db.json, style.scss index.html, etc using your preferred editor. 

> **Note** 
- Never make changes to the package.json, package-lock.json, manifest.json, serviceworker.js and files in the css folder. 
- Try to group your changes into the smallest logical that makes sense, and create a separate pull request for each logical.
- Try to write a reusable code.

9. Once you're good with your changes, commit them to your branch:

```sh 
git commit -m "Add a recipe"
```

10. Now, you can push changes to the branch of your fork repo.

```sh
git push -u origin my-work
```
11. Perform a merge to sync your current branch with the upstream branch.

```bash
git fetch upstream
git merge upstream/main
```

Now, it's time to make your PR

## Making pull requests

1. When you submit a pull request, several tests are automatically run as GitHub Actions. If any of these tests fail, it is your responsibility to try and resolve the underlying issue(s). If you don't know how to resolve the underlying issue(s), you can ask for help.

2. If your pull request has merge conflicts with the `master` branch (GitHub checks for this automatically and notifies you), you are responsible for resolving them. You can do this by merging the `master` branch into your branch (`git pull bChef master`), and then pushing the updated branch to your fork (`git push`).

3. Link the issue you have resolved in the Pull Request Template (e.g Closes/Fixes #392).
4. Use [Conventional commit messages](https://www.conventionalcommits.org/en/v1.0.0/) for your changes.
5. Do not re-open a pull request that a reviewer has closed.
    - Make sure to tick the "Allow edits from maintainers" box. This allows us to directly make minor edits / refactors and saves a lot of time.

> **Note**
- If adding a new feature:
  - Provide a convincing reason to add this feature. Ideally, you should open a suggestion issue first and have it approved before working on it.
  
- If fixing a bug:
  - The name of your PR should be a summary of the changes you are making. (For example fix: fix non-responsive navbar, feat: add prettier for code formatting)
  Provide a detailed description of the bug in the PR. Screenshots are nice.
  

## Remarks

If something is missing here, or you feel something is not well described, either directly create a PR or [create an issue](https://github.com/codeboyfriend/bChef/issues).    

### Thanks for the contribution.
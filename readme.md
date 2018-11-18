# Bowling Score kata
This is a kata for finding the final score of a bowling game, which is described here: https://ronjeffries.com/xprog/articles/acsbowling/.

I used a new approach on this kata called (Test && Commit) || Revert, which you can read about here: https://medium.com/@kentbeck_7670/test-commit-revert-870bbd756864

The basic idea is very simple: every time you run the test suite, you either commit or revert, depending on the success of the tests. If they pass, you commit. If they fail, you revert. This approach guides the developer to make very small incremental changes to the code, and it assures that the code is always in a working state.

#### Setup
Make sure you have the following software installed:
* NodeJS
* Yarn
* Git

#### Running the project
To run the project, start by running `yarn install` at the project root. Then use `yarn tcr` to run the (Test && Commit) || Revert step.
# Day 3: Git Basics

This project demonstrates the basics of Git for version control, including initializing a repository, committing changes, and pushing to GitHub. Follow these steps to set up and manage your project effectively.

---

## Steps to Complete the Task

### 1. Initialize Git in Your Project Folder
1. Open your terminal or command prompt.
2. Navigate to your project folder using the `cd` command:
   ```bash
   cd path/to/your/project-folder
   ```
3. Initialize a Git repository:
   ```bash
   git init
   ```

### 2. Stage and Commit Changes
1. Stage all project files:
   ```bash
   git add .
   ```
2. Create your first commit with a meaningful message:
   ```bash
   git commit -m "Initial commit"
   ```

### 3. Create a GitHub Repository
1. Go to [GitHub](https://github.com/) and log in.
2. Click on the "New" button to create a repository.
3. Provide a repository name (e.g., `html-CSS-profile`) and leave other settings as default.
4. Do **not** initialize the repository with a README file.

### 4. Connect Local Repository to GitHub
1. Copy the repository URL from GitHub (e.g., `https://github.com/username/html-CSS-profile.git`).
2. Link the remote repository to your local project:
   ```bash
   git remote add origin <repository-URL>
   ```
3. Push your local code to GitHub:
   ```bash
   git push -u origin main
   ```
   If your default branch is `master`, use:
   ```bash
   git push -u origin master
   ```

### 5. Experiment with Git Commands
1. Make a small change to your project (e.g., add another list item or change a color in your CSS).
2. Stage and commit the changes:
   ```bash
   git add .
   git commit -m "Updated CSS styling"
   ```
3. Push the changes to GitHub:
   ```bash
   git push
   ```

### 6. Practice Additional Git Commands
- **Pull Changes**: Fetch and merge changes from the remote repository:
  ```bash
  git pull
  ```
- **Rebase**: Reapply commits on top of another base tip:
  ```bash
  git rebase
  ```
- **Revert**: Undo a specific commit by creating a new one:
  ```bash
  git revert <commit-hash>
  ```
- **Reset**: Move the current branch's tip backward to undo commits:
  ```bash
  git reset --hard <commit-hash>
  ```

---

## Summary of Core Git Commands
- `git init` – Initialize a new Git repository.
- `git add` – Stage changes for the next commit.
- `git commit` – Commit changes with a descriptive message.
- `git push` – Upload commits to a remote repository.
- `git pull` – Fetch and merge changes from a remote repository.
- `git rebase` – Reapply commits on top of another base tip.
- `git revert` – Undo a specific commit by creating a new one.
- `git reset` – Move the current branch's tip backward to undo commits.

---

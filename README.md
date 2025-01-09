# Collaborative GitHub Project

## Project Description
This project demonstrates GitHub collaboration using branches, pull requests, and merge conflict resolution. The task includes creating an "About" section and a "Contact" section as part of a small collaborative project.

## Objectives
- Learn to work with Git branches for simultaneous development.
- Create pull requests to review and merge code changes.
- Practice resolving merge conflicts.
- Document collaboration in a structured README file.

## Project Structure
- **About Section:** A webpage describing the project or the team.
- **Contact Section:** A webpage providing contact information.

## Steps Completed
1. **Set Up a Shared Repository:**
   - One partner created a repository and added the other as a collaborator.

2. **Branches Creation:**
   - Partner 1 worked on the `about-section` branch.
   - Partner 2 worked on the `contact-section` branch.

3. **Code Changes and Commit:**
   - Each partner made changes to their respective branches, committed the changes, and pushed to the repository.

4. **Pull Requests:**
   - Each partner created pull requests to merge their branches into the `main` branch.
   - The pull requests were reviewed, approved, and merged.

5. **Merge Conflict Resolution:**
   - Any merge conflicts were resolved manually, with changes committed to the main branch.

6. **Final Merge:**
   - All changes were successfully merged into the `main` branch.

## Merge Conflict Example
During the merge process, we encountered a conflict in the `index.html` file where both partners made changes to the same section. The conflict was resolved by:
1. Identifying the conflicting lines using Git's conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`).
2. Retaining the required code and removing unnecessary lines.
3. Committing the resolved file to the repository.


## Technologies Used
- Git
- GitHub
- HTML
- Markdown

## Lessons Learned
- The importance of branching in collaborative workflows.
- Creating and reviewing pull requests.
- Handling and resolving merge conflicts effectively.

## Extra Challenge
- Added this `README.md` file to document the project details, contributors, and steps followed.

## How to Run the Project
1. Clone the repository:
   ```bash
   git clone <repository-url>

---
title: "Git for Beginners: The Essential Guide"
description: "Learn Git from scratch with this basic guide. Understand the fundamental concepts and how to integrate it with GitHub and VSCode."
tags: ["Learning"]
publishedDate: "2025-04-27 18:00"
coverImage: "/assets/git/miniatura.png"
author: "Miguel Aréjula Aísa"
authorImage: "https://avatars.githubusercontent.com/u/92888725?v=4"
authorUrl: "https://github.com/Arejula11"
draft: false
video: "https://www.youtube.com/embed/qRirdnD5TM4"
videoTitle: "Curso básico de Git: Todo lo que necesitas saber en un solo vídeo [ES]"
language: "en"
keywords: ["Git", "Guide", "Basic guide", "GitHub", "VSCode","Basic concepts"]
---

If you're just stepping into the world of software development, you've probably come across the word Git; maybe in a tutorial, a job post, or a heated discussion on Stack Overflow. But what exactly is Git, and why does everyone swear by it? Whether you're building your first app or collaborating on a team project, understanding Git is a game-changer. In this post, we’ll break it down from the ground up no jargon, no assumptions — just the tools and concepts you actually need to start using Git like a pro.

## What Is Git?

Think of Git as a time machine for your code. It's a distributed version control system that allows you to track changes, collaborate with others without overwriting each other's work, and revert to previous states of your project when needed.

## Why Use Git?

- **Change History**: Keep a detailed record of every modification.
- **Collaboration**: Work seamlessly with teams, merging contributions effortlessly.
- **Experimentation**: Test new features in isolated branches without affecting the main codebase.

## Key Terminology

Before diving in, familiarize yourself with these essential Git terms:

- **Repository (Repo)**: Your project's folder, either local or hosted on platforms like GitHub.
- **Commit**: A snapshot of your changes, accompanied by a descriptive message.
- **Staging Area**: Where you prepare changes before committing.
- **Branch**: A separate line of development, allowing for isolated changes.
- **Merge**: Combining changes from different branches.
- **Push**: Sending your commits to a remote repository.
- **Pull**: Fetching and integrating changes from a remote repository.
- **Clone**: Creating a local copy of a remote repository.
- **.gitignore**: A file specifying which files or directories Git should ignore.

## Getting Started with Git

### Installation

To install Git I re

### Configuration

After installation, set your user information:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Verify your settings:

```bash
git config --list
```

## Essential Git Commands

To really get comfortable with Git, you need to go beyond just memorizing commands it's about understanding what each one *does* and *why* it's useful. Let's walk through a real-world example: creating a basic to-do app.

### 1. Initialize a New Repository

```bash
git init
```

This command turns your current folder into a Git repository. After running this, Git starts tracking changes in your project. You’ll now see a hidden *.git* folder that’s where Git stores all the version history for your code.

Use it right after creating a new project directory.

```bash
mkdir todo-app
cd todo-app
git init
```

Now your "todo-app" folder is ready to use Git.


### 2. Add Files to the Staging Area

When you create or modify files, you need to tell Git to include them in the next commit. For example, if you create a basic HTML file:
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo App</title>
</head>
<body>
    <h1>Welcome Todo App</h1>
</body>
</html>
```
Save it as *index.html* in your project folder. To add this file to the staging area, run:

```bash
git add index.html
```

The *add* command tells Git: *"I want to include this file in the next commit."* It moves changes to the **staging area** think of it like a basket where you collect files you're about to save.

To add **all files** in the directory (new or modified):

```bash
git add .
```
Use this with care especially in bigger projects so you don't accidentally include files you didn’t mean to commit.

### 3. Commit Your Changes

```bash
git commit -m "Add index.html with basic structure"
```

A **commit** is like taking a snapshot of your code at a particular moment. The *-m* flag allows you to attach a message to that snapshot, which should clearly explain what changed and why.

Think of a commit as a checkpoint you can always go back to it later.

### 4. Check the Status of Your Repository

```bash
git status
```
This command shows you the current state of your repository. It tells you which files are staged, which are modified but not staged, and which are untracked (not added to Git yet).
This is super helpful for keeping track of what’s going on in your project.

### 5. Link Your Project to a Remote Repository

```bash
git remote add origin <link-to-your-repo>
```
This connects your local project with a **remote version** hosted on a service like GitHub. The *origin* is just a name (the default one) for that remote location.

You only need to do this once per project.

### 6. Push Changes to GitHub

```bash
git push -u origin main
```

Here, *push* sends your local commits to the remote repository (*origin*). The *-u* flag sets *origin main* as the default, so next time you can just use *git push*.

This is how you back up your work and share it with others.


### 7. Pull the Latest Changes from GitHub

```bash
git pull origin main
```

This command fetches the latest changes from the remote repository and merges them into your local branch. It’s essential for keeping your local code up-to-date with any changes made by collaborators.


### 8. Clone an Existing Repository

```bash
git clone  <link-to-your-repo>
```

Cloning is like downloading a project from GitHub (or any remote repo) and setting it up locally with all the Git tracking already in place. Perfect for jumping into an open-source project or syncing your code on another machine.


### 9. Check Which Remote Is Connected

```bash
git remote -v
```

Need to double-check where your code is being pushed? This command lists all remotes linked to your project and their URLs. Super helpful when working with multiple remotes or collaborators.


### 10. Ignore Unwanted Files

```bash
echo "node_modules/" > .gitignore
```

Some files shouldn't be tracked by Git think temporary files, logs, or huge dependency folders like *node_modules*. The *.gitignore* file tells Git exactly what to skip.

This keeps your repo clean and avoids uploading unnecessary (or sensitive) files.

### 1. See What’s Changed

```bash
git diff
```

Before committing, you might want to review your changes. *git diff* shows the exact lines that were added, modified, or removed since the last commit perfect for double-checking before you make anything official.

## Advanced Concepts
Once you're comfortable with the basics, you can explore more advanced features of Git, here are some concepts to consider:

### Pull Requests (PRs)

A Pull Request (PR) is a feature provided by platforms like GitHub or GitLab to facilitate collaboration in software development. It allows developers to propose changes to a codebase, review those changes, and discuss them before they are merged into the main branch. Here’s a breakdown of its key components:
- **Branching**: In Git, branches are used to develop features or fix bugs in isolation. A PR is typically created from a feature branch to the main branch (or another target branch).
- **Proposing Changes**: When you make changes to a codebase (e.g., fixing a bug, adding a feature), you typically do so in a separate branch. A PR allows you to propose merging these changes into another branch, often the main or develop branch.
- **Code Review**: PRs enable team members to review your code before it is merged. Reviewers can provide feedback, suggest improvements, or point out potential issues. This ensures that the code meets quality standards and aligns with the project's goals.
- **Discussion**: PRs act as a forum for discussing the proposed changes. Team members can leave comments on specific lines of code or on the PR as a whole. This is especially useful for clarifying intentions, resolving misunderstandings, or debating implementation details.
- **Collaboration**: In larger teams, PRs are essential for coordinating work. They help prevent conflicts, ensure everyone is aware of ongoing changes, and maintain a clear history of contributions.
- **Testing and Validation**: Many teams integrate automated tests and checks into the PR process. For example, CI/CD pipelines can run tests, check code style, or ensure compatibility before the PR is approved.
- **Merging**: Once the PR is approved and any requested changes are made, it can be merged into the target branch. This ensures that only reviewed and approved code becomes part of the main codebase.

In summary, PRs are a structured way to introduce, review, and discuss changes in a collaborative environment, ensuring code quality and team alignment.


### Tags
Tags in Git are a way to mark specific points in your repository's history as important. They are often used to denote release versions (like v1.0, v2.0, etc.) or significant milestones in the development process. Tags are similar to branches but are meant to be immutable references to specific commits.
- **Creating a Tag**: You can create a tag using the command:
  ```bash
  git tag -a v1.0 -m "Version 1.0"
  ```
  This creates an annotated tag with a message.
- **Listing Tags**: To see all tags in your repository, use:
  ```bash
  git tag
  ```
- **Pushing Tags**: By default, tags are not pushed to remote repositories. To push a specific tag, use:
  ```bash
  git push origin v1.0
  ```

## Best Practices
After ussing Git for a while, I have learned some best practices that I would like to know earlier. Here are some tips to keep your Git workflow smooth and efficient:
- **Frequent Commits**: Commit often with meaningful messages.
- **Descriptive Messages**: Clearly explain the purpose of each commit.
- **Branch Usage**: Develop new features or fixes in separate branches.
- **Regular Pulls**: Stay updated with the latest changes from the remote repository.
- **Review Changes**: Use *git status* and *git diff* before committing.
- **Clean Up**: Delete merged branches to keep the repository tidy.
- **.gitignore**: Set up early to avoid tracking unnecessary files.

## GitHub Integration

Now that you know how to use Git locally, it's time to connect it with GitHub the platform that brings collaboration, visibility, and project management into the mix.

### So… what exactly is GitHub?

GitHub is a web-based platform built around Git. It allows you to:

- **Store your repositories online** so you can access them from anywhere.
- **Collaborate with other developers**, even across the globe.
- **Showcase your projects** to recruiters, teams, or open-source communities.

In other words, Git is the engine GitHub is the garage, the dashboard, and the community around it.

### Key Features

- **Pull Requests (PRs)**: Propose changes, discuss them, and merge safely into the main branch.
- **Issues**: Keep track of bugs, features, or tasks like a to-do list for your repo.
- **Actions**: Automate workflows like running tests or deploying your app when someone pushes code.
- **Projects**: Organize your work in Kanban-style boards.
- **GitHub Pages**: Instantly publish websites from your repos great for portfolios or documentation.

### Why it matters

Whether you’re working solo or with a team, GitHub makes version control *visible* and *collaborative*. You get review processes, feedback loops, automation, and exposure all in one place.

## Git + VS Code: The Perfect Match

Visual Studio Code (VS Code) is more than just a code editor it’s a Git-powered productivity machine.

### Built-in Git Support

Right out of the box, VS Code includes a **Source Control panel** that integrates directly with Git. This means you can:

- See which files have been changed.
- Stage, unstage, or commit files with a few clicks.
- Switch branches and manage merge conflicts visually.
- Pull and push to GitHub without leaving your editor.

No more context switching between terminal and browser everything’s in one place.

### GitLens: Git Superpowers for VS Code

Want to level up your workflow even more? Install [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens).

It lets you:

- See **who changed what**, when, and why directly in the file.
- View commit history and navigate previous versions.
- Compare branches or file revisions side-by-side.
- Annotate code with detailed blame information.

### Why Use Git Inside VS Code?

- Perfect for beginners who aren’t terminal-first.
- Great for visual learners.
- Speeds up common Git tasks.
- Makes reviewing history and solving conflicts easier.

Whether you’re committing a small change or handling a tricky merge, VS Code’s Git integration makes it smooth and intuitive letting you focus on writing great code.

---

By mastering Git and its associated tools, you'll be well-equipped to manage your code efficiently and collaborate effectively in any development environment.

To see Git in action, check out the video below for a comprehensive guide in Spanish, covering everything from installation to advanced features:

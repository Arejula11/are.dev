---
title: "Your First Jupyter Notebook in VS Code on macOS"
description: "Learn how to install Jupyter Notebooks on macOS, set them up in VS Code and start writing interactive Python code for data analysis and visualization."
tags: ["Setup"]
publishedDate: "2025-10-26 21:00"
coverImage: "/assets/jupyterNotebook.png"
author: "Miguel Aréjula Aísa"
authorImage: "https://avatars.githubusercontent.com/u/92888725?v=4"
authorUrl: "https://github.com/Arejula11"
draft: false
language: "en"
keywords: ["jupyter notebooks", "vscode jupyter", "python macOS setup", "data science", "interactive coding", "jupyter installation guide", "visual studio code jupyter", "macOS", "jupyter"]
---

If you’re starting to learn Python or getting into data analysis, you’ve probably heard about Jupyter Notebooks. They’re a simple yet powerful way to write and run Python code step by step, all while adding notes, explanations and even charts in the same document.

Think of it as an interactive notebook for coding: you can experiment, test ideas and see results instantly without switching between files or terminals.

In this guide, we’ll go through how to install Jupyter on macOS and use it inside Visual Studio Code (VS Code), one of the most popular code editors today. By the end, you’ll have a clean setup ready to explore Python interactively, perfect for learning, experimenting or starting your first data project.


## Setting Up Python and Jupyter on macOS

Before we start writing notebooks, we need to make sure two key tools are installed: Python and Jupyter.
Python is the programming language we’ll use, and Jupyter is what makes notebooks interactive.

### Step 1: Check if You Already Have Python

macOS usually comes with Python preinstalled, but it’s often an outdated version (like Python 2.x).
Let’s check what you have by opening Terminal (you can find it in *Applications > Utilities*) and typing:

```bash
python3 --version
```

If you see a version number starting with 3, you’re good.
If you get an error or see Python 2.x, you’ll need to install the latest version.

### Step 2: Install Python

The easiest and safest way is to download it from the official [Python website](https://www.python.org/downloads/mac-osx/)

Download the latest release for macOS and run the installer. Once the installation finishes, reopen your terminal and check again:

```bash
python3 --version
```

If you now see something like Python 3.12.x, you’re ready to go.

> **Tip:** Installing Python from python.org also gives you *pip*, the Python package manager, which we’ll use to install Jupyter next.

### Step 3: Install Jupyter

Now that Python is set up, let’s install Jupyter using pip:

```bash
pip3 install jupyter
```

This will download and install everything you need to create and run notebooks.
You can verify it worked by running:

```bash
jupyter --version
```

If you see version numbers appear, that means Jupyter is successfully installed.

To make sure everything runs properly, try starting Jupyter with:

```bash
jupyter notebook
```

This will open a new browser window showing the Jupyter interface, a file explorer where you can create or open notebooks.


> **Note:** You might already be able to open and run Jupyter notebooks without installing Jupyter manually.
> This can happen in a few ways:
>
> * **VS Code manages Jupyter automatically:** The Python and Jupyter extensions can install a lightweight Jupyter environment behind the scenes, allowing you to open notebooks without a separate installation.
> * **Using a virtual environment:** If you’ve created a virtual environment with tools like `venv` or `conda`, it might already include Jupyter. When you select that environment in VS Code, your notebooks can run there seamlessly.
> While these options can be convenient, it’s still recommended to install Jupyter locally on your Mac. This way, you have full control over your setup, can work offline, manage Python packages freely, and ensure your notebooks run consistently across projects and environments.


## Using Jupyter in Visual Studio Code

Once Jupyter is ready, we can set it up in VS Code to create and run notebooks directly inside your editor — no browser needed.

### Step 1: Install VS Code

If you don’t already have it, download it from the [official website](https://code.visualstudio.com/)

After installing, open VS Code.

### Step 2: Install the Necessary Extensions

To work with notebooks, you’ll need two extensions:

1. **Python** (by Microsoft)
2. **Jupyter** (by Microsoft)

In VS Code, open the Extensions view by clicking the square icon on the sidebar (or press `⇧⌘X`), search for each one, and click `Install`.

### Step 3: Create or Open a Notebook

Once both extensions are installed:

* Open the Command Palette (**⇧⌘P**).
* Search for **Jupyter: Create New Blank Notebook**.
* A new untitled `.ipynb` file will open.

You can also open an existing notebook by simply opening a `.ipynb` file in VS Code.

### Step 4: Choose Your Python Environment

At the top right of the notebook window, you’ll see a kernel selector. Click it to pick your Python interpreter, this is the environment where your code will run.

If you installed Python and Jupyter globally, it should appear automatically.
If you’re using a virtual environment, select that one instead.

### Step 5: Run Your First Notebook

Each notebook is made up of cells that can contain code or text (Markdown).

* To run a cell, select it and press **Shift + Enter**.
* To add a new one, click **+ Code** or **+ Markdown**.
* To save your notebook, press **⌘S**.

Your notebook is saved as a `.ipynb` file; a format that works everywhere, from VS Code to JupyterLab to Google Colab.

You now have Python and Jupyter fully running on your Mac and integrated with VS Code.
From here, you can start exploring Python interactively, testing code ideas, documenting your learning, or building data analysis projects, all in one place.

## Next Steps: What to Try in Jupyter

Now that your Python and Jupyter environment is ready, it’s time to start experimenting. Here are a few practical steps to help you get comfortable and explore the possibilities:

### 1. Install Useful Python Libraries

Jupyter is most powerful when combined with Python libraries for data analysis, visualization, and general development. Some popular options include:

* **pandas** – for handling and analyzing data
* **numpy** – for numerical computations
* **matplotlib** and **seaborn** – for creating charts and plots
* **scikit-learn** – for machine learning projects

You can install them using pip directly in your terminal or in a notebook cell by adding an exclamation mark before the command:

```python
!pip install pandas numpy matplotlib seaborn scikit-learn
```

### 2. Explore Markdown and Code Cells

Jupyter notebooks support both code and text (Markdown) cells. Use Markdown to add titles, explanations, lists, or even images to your notebook. This makes it perfect for documenting experiments, taking notes, or creating tutorials.

### 3. Practice Running Python Code

Start by running small Python scripts in a notebook cell. Try simple commands like:

```python
print("Hello, Jupyter!")
2 + 2
```

Experiment with variables, loops, and functions to see how notebooks execute code interactively.

### 4. Work with Datasets

Try loading a CSV file with pandas to explore real data:

```python
import pandas as pd

data = pd.read_csv("your_file.csv")
data.head()
```

This will display the first few rows of your dataset and let you start analyzing it immediately.

### 5. Save and Share Your Work

Notebooks are saved as `.ipynb` files. You can share them with colleagues, upload them to GitHub or open them on Google Colab. This makes it easy to collaborate, reproduce experiments, or showcase your learning.

### 6. Explore Extensions and Plugins

VS Code and Jupyter support extensions to make notebooks even more powerful. Some examples:

* **Jupyter Notebook Extensions** – add new features like table of contents, code folding, or variable inspector
* **VS Code Live Share** – collaborate on notebooks in real time
* **nbextensions** – enhance JupyterLab with extra functionalities

By experimenting step by step, you’ll gain confidence with Python and notebooks, and soon you’ll be able to create complex, interactive projects efficiently. Happy coding!


---
title: "Your First Steps in Data Science with Python"
description: "Learn the basics of data science with Python, from loading and exploring datasets to visualizing data and performing simple analyses in Jupyter notebooks."
tags: ["Learn"]
publishedDate: "2025-11-2 19:00"
coverImage: "https://images.unsplash.com/photo-1640158615573-cd28feb1bf4e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
author: "Miguel Aréjula Aísa"
authorImage: "https://avatars.githubusercontent.com/u/92888725?v=4"
authorUrl: "https://github.com/Arejula11"
draft: false
language: "en"
keywords: ["data science tutorial", "beginner data analysis", "jupyter notebooks", "python pandas", "data visualization"]
---

Data science has become one of the most exciting fields for developers and analysts alike. It’s all about extracting insights from data, finding patterns and making informed decisions. If you’re just getting started, Python and Jupyter notebooks are the perfect combination to explore data without feeling overwhelmed.

In this guide, we’ll walk you through the essentials of getting started with data science in Python, from setting up your environment to loading, exploring and visualizing your first dataset. By the end, you’ll be ready to analyze your own data and take your first steps into the world of data science.

## Setting Up Your Environment

Before diving into data analysis, make sure you have Python and Jupyter installed. If you followed our previous guide on [Jupyter notebooks](https://are-dev.es/posts/jupyternotebooks), you should be ready to go.

Next, you’ll need some key Python libraries for data science:

* `pandas` – for handling and analyzing data  
* `numpy` – for numerical operations  
* `matplotlib` – for creating basic plots  
* `seaborn` – for more advanced and beautiful visualizations  

You can install them with the following command:

```bash
pip install pandas numpy matplotlib seaborn
```

Once installed, you’re ready to start exploring data.

## Loading Data

Data can come in many formats: CSV, Excel, JSON or even directly from the web. For beginners, CSV files are the easiest to start with.

Here’s how you can load a CSV file using pandas:

```python
import pandas as pd

data = pd.read_csv("data.csv")
data.head()
```

* `data.head()` shows the first five rows of the dataset
* `data.info()` gives an overview of the dataset, including data types and missing values
* `data.describe()` provides basic statistics for numeric columns

These commands help you quickly understand the structure and contents of your dataset.

## Exploring and Cleaning Data

Once your data is loaded, you’ll often need to clean or inspect it before analyzing it:

* Check for missing values:

```python
data.isnull().sum()
```

* Select specific columns:

```python
data[['column1', 'column2']]
```

* Filter rows based on conditions:

```python
filtered = data[data['column'] > 10]
```

* Rename columns or convert data types as needed

Cleaning data may take time, but it’s a crucial step to ensure accurate analysis.

## Visualizing Data

Visualization is key to understanding patterns in your data. With `matplotlib` and `seaborn`, you can quickly create charts:

```python
import matplotlib.pyplot as plt
import seaborn as sns

# Histogram
sns.histplot(data['column_name'])
plt.show()

# Scatter plot
sns.scatterplot(x='column1', y='column2', data=data)
plt.show()

# Bar chart
data['category_column'].value_counts().plot(kind='bar')
plt.show()
```

Visuals make it easier to spot trends, outliers, or correlations.

## Simple Analysis Examples

Even simple operations can reveal insights:

* Calculating basic statistics:

```python
data['column'].mean()
data['column'].sum()
data['column'].value_counts()
```

* Grouping data for analysis:

```python
grouped = data.groupby('category_column')['numeric_column'].mean()
print(grouped)
```

* Finding correlations:

```python
data.corr()
```

These small steps help you start understanding your dataset and identifying patterns.


## Working with Different Data Formats

Data doesn’t always come in a CSV file — it might be in Excel, JSON, or even hosted online. Pandas makes it easy to load data from many sources.

```python
# Excel
data_excel = pd.read_excel("data.xlsx")

# JSON
data_json = pd.read_json("data.json")

# From a URL
url = "https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv"
data_url = pd.read_csv(url)
```

These commands show how versatile pandas is. You can even connect to databases using `pd.read_sql()` to load tables directly.


## Transforming Data with Pandas

After loading data, you’ll often need to transform it — adding, aggregating, or reshaping columns.

```python
# Create a new column
data['fare_per_age'] = data['fare'] / data['age']

# Group and summarize
avg_fare = data.groupby('class')['fare'].mean()

# Sort and select top entries
top_fares = data.sort_values(by='fare', ascending=False).head(10)
```

These simple transformations form the foundation of data wrangling — getting your dataset ready for analysis.


## Summarizing Data with Pivot Tables

Pivot tables summarize relationships between variables, similar to Excel but much more powerful.

```python
pivot = data.pivot_table(values='fare', index='class', columns='sex', aggfunc='mean')
print(pivot)
```

This creates a quick summary of the average fare by passenger class and gender — one line for a useful insight.


## Correlations and Relationships

Understanding how variables relate helps uncover patterns. Correlation matrices make these relationships visual.

```python
corr_matrix = data.corr(numeric_only=True)
sns.heatmap(corr_matrix, annot=True, cmap='coolwarm')
plt.title("Correlation Matrix")
plt.show()
```

Positive values mean the variables move together, negative ones indicate opposite trends. It’s a fast way to see what matters in your dataset.


## Handling Missing and Outlier Values

Real data is messy, cleaning it is one of the most important steps before analysis.

```python
# Fill missing values with the median
data['age'].fillna(data['age'].median(), inplace=True)

# Visualize outliers
sns.boxplot(x=data['fare'])
plt.show()

# Remove extreme values
data = data[data['fare'] < 300]
```

Fixing missing values and filtering outliers keeps your results accurate and consistent.

## Mini Project: Titanic Survival Analysis

Let’s combine everything with a short example using the famous Titanic dataset.

```python
# Average survival rate by class and gender
survival = data.groupby(['class', 'sex'])['survived'].mean().reset_index()

sns.barplot(x='class', y='survived', hue='sex', data=survival)
plt.title("Survival Rate by Class and Gender")
plt.ylabel("Survival Probability")
plt.show()
```

This brings together grouping, summarizing, and visualization — showing how different features can affect outcomes.
It’s a great small project to finish your first data science exploration.

## Exporting Results and Visualizations

Once you’ve analyzed your data, you’ll want to save your results or share your work. Pandas makes exporting easy.

```python
# Save cleaned data
data.to_csv("cleaned_data.csv", index=False)

# Save a summary table
pivot.to_excel("summary.xlsx")

# Save a plot
plt.savefig("correlation_matrix.png", dpi=300, bbox_inches='tight')
```

You can also export notebooks as HTML or PDF from Jupyter’s menu, making it easy to present your findings.
Sharing clean data and visuals is a key step in any data project — it helps you communicate insights clearly and reproducibly.



## Next Steps

Now that you’ve loaded, explored, and visualized your data, you can begin experimenting with:

* More complex visualizations
* Combining multiple datasets
* Applying basic statistical methods or machine learning
* Sharing your results through Jupyter notebooks or reports

Keep exploring and practicing, the more you interact with data, the more comfortable you’ll become.

## Tips for Beginners

* Start with small datasets to avoid feeling overwhelmed
* Document your code and analysis with Markdown cells in Jupyter
* Experiment with different types of charts to better understand your data
* Revisit your data cleaning steps often, as this is where most insights come from
* Practice regularly and try to replicate small projects or tutorials

Even simple exercises like calculating averages, plotting trends, or grouping data help build your data science intuition.

## Conclusion

Data science may seem intimidating at first, but with Python, Jupyter notebooks, and a few essential libraries, you can quickly start exploring and analyzing your own datasets. The key is to practice, experiment, and gradually build your skills.

To help you get started, I’ve prepared a practical example notebook that walks through the same steps covered in this guide — from loading data to creating visualizations. You can explore it here:
 [Data Science Starter Notebook on GitHub](https://github.com/Arejula11/are.dev/blob/main/public/assets/data-science-starter-guide.ipynb)

Happy coding!

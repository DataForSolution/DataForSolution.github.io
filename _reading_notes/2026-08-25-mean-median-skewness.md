---
layout: reading-note
title: "Mean or Median? Let the Distribution Decide"
date: 2026-08-25
summary: "A practical reading companion on why the shape of a distribution matters when choosing a measure of center."
source_book: "Introductory Statistics 2e"
source_url: "https://openstax.org/books/introductory-statistics-2e/pages/2-6-skewness-and-the-mean-median-and-mode"
source_citation: "Illowsky, B., & Dean, S. (2023). Introductory Statistics 2e, Section 2.6: Skewness and the Mean, Median, and Mode. OpenStax, Rice University."
keywords: [statistics, mean, median, skewness, descriptive statistics, outliers]
---

## The idea to carry into practice

The mean and the median both describe the center of numerical data, but they respond differently when the distribution is asymmetric or contains extreme values. OpenStax explains that in a right-skewed distribution the mean is often greater than the median, while in a left-skewed distribution the mean is often lower. The mean is more sensitive to extreme values because every numerical value contributes directly to it.

That makes the choice of summary statistic a **data-quality and interpretation decision**, not merely a calculation step.

## A simple example

Imagine five service times in minutes:

`8, 9, 10, 11, 47`

The median is **10 minutes**. The mean is **17 minutes**.

Neither number is mathematically wrong. They answer slightly different questions. The mean incorporates the unusually long 47-minute event and therefore shifts upward. The median identifies the middle observed value and is much less affected by that extreme case.

Before reporting an “average,” ask what the distribution looks like and whether unusual values are legitimate observations, data errors, or important events that deserve separate explanation.

## Why this matters in healthcare and analytics

Healthcare, operational, and business data are frequently skewed. Length of stay, waiting time, cost, procedure duration, turnaround time, and utilization can have a small number of very large values. A single average can hide that shape.

A more informative workflow is:

1. inspect the distribution;
2. check for errors and extreme values;
3. report the median when it better represents a typical observation;
4. report the mean when total magnitude or expected value is important;
5. include spread and sample size so the center is not interpreted alone.

## Practice it on DataForSolution

Open the [Descriptive Statistics tool](/toolkits/#evaluation) and enter:

`8, 9, 10, 11, 47`

Compare the mean and median, then remove `47` and calculate again. Notice which statistic changes more.

Next, try a symmetric set such as:

`8, 9, 10, 11, 12`

The mean and median now align. This is the practical relationship between distribution shape and measures of center that the source reading develops.

## Reflection question

When a dashboard reports one “average” value, what information would you want to see before deciding that it represents a typical case?

---
layout: post
title: "Stock Price Prediction Using AI"
date: 2024-07-03
categories: case-studies
author: "Lissan"
tags: [Stock Market, Machine Learning, AI]
---

### AI for Stock Market Prediction
Can AI predict stock prices? In this project, we trained a machine learning model to analyze stock market trends.

#### **Approach**
✅ **Dataset**: Used Yahoo Finance stock data  
✅ **Algorithm**: LSTM (Long Short-Term Memory) Neural Networks  
✅ **Tools**: Python, TensorFlow, Pandas

**Example Code**
```python
import pandas as pd
import yfinance as yf

# Fetch historical stock data
stock_data = yf.download('AAPL', start='2023-01-01', end='2024-01-01')
print(stock_data.head())

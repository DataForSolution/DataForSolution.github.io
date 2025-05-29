
# Import necessary libraries
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
from keras.models import load_model

# Assuming we have a pre-trained CIFAR-10 model and class names available
# Here we use random predictions and fake images for demonstration as a placeholder

# Simulated data for fake images and predictions
# 100 random 32x32x3 images, representing the generated fake CIFAR-10 images
fake_images = np.random.rand(100, 32, 32, 3)

# CIFAR-10 class names
class_names = ['airplane', 'automobile', 'bird', 'cat', 'deer', 'dog', 'frog', 'horse', 'ship', 'truck']

# Random predictions for these images, assuming each row corresponds to the softmax probabilities for one image
fake_predictions = np.random.rand(100, 10)

# 1. Select top 5 most 'realistic' images based on the highest class probability score
# Sort based on the highest probability score (max value across the 10 classes)
top_5_indices = np.argsort(np.max(fake_predictions, axis=1))[-5:]  # Top 5 images

# Display the top 5 images along with their predicted class and score
top_5_images = fake_images[top_5_indices]
top_5_predictions = fake_predictions[top_5_indices]

# Plot the selected images and show their predicted classes and scores
for i, idx in enumerate(top_5_indices):
    plt.imshow(top_5_images[i])
    plt.title(f"Predicted: {class_names[np.argmax(top_5_predictions[i])]} | Score: {np.max(top_5_predictions[i]):.2f}")
    plt.show()

# Comment: Do all 5 images have a class value score larger than 0.5?
# Check if all selected top 5 images have a max class score > 0.5
above_threshold = np.all(np.max(top_5_predictions, axis=1) > 0.5)
# Answer: This returns True, meaning all selected images have scores larger than 0.5.

# 2. Select and plot all instances of 'Deer' and 'Bird' classes, and compute min, avg, and max class scores
# Get the class index for 'deer' and 'bird'
deer_class_idx = class_names.index('deer')
bird_class_idx = class_names.index('bird')

# Select indices of all images where the predicted class is 'Deer' or 'Bird'
deer_indices = np.where(np.argmax(fake_predictions, axis=1) == deer_class_idx)[0]
bird_indices = np.where(np.argmax(fake_predictions, axis=1) == bird_class_idx)[0]

# Extract images and scores for 'Deer' and 'Bird'
deer_images = fake_images[deer_indices]
bird_images = fake_images[bird_indices]
deer_scores = fake_predictions[deer_indices, deer_class_idx]
bird_scores = fake_predictions[bird_indices, bird_class_idx]

# Plot 'Deer' images and their scores
for i in range(len(deer_images)):
    plt.imshow(deer_images[i])
    plt.title(f"Deer Image | Score: {deer_scores[i]:.2f}")
    plt.show()

# Plot 'Bird' images and their scores
for i in range(len(bird_images)):
    plt.imshow(bird_images[i])
    plt.title(f"Bird Image | Score: {bird_scores[i]:.2f}")
    plt.show()

# Compute min, avg, and max scores for 'Deer' and 'Bird'
deer_min, deer_avg, deer_max = deer_scores.min(), deer_scores.mean(), deer_scores.max()
bird_min, bird_avg, bird_max = bird_scores.min(), bird_scores.mean(), bird_scores.max()

# Create a DataFrame to display the statistics
results = {
    'Deer': {'Min': deer_min, 'Avg': deer_avg, 'Max': deer_max},
    'Bird': {'Min': bird_min, 'Avg': bird_avg, 'Max': bird_max}
}

df_results = pd.DataFrame(results)
print(df_results)

# 3. Find and plot the class with the highest average class value
# Calculate average predicted score for each class
avg_class_scores = np.mean(fake_predictions, axis=0)

# Identify the class with the highest average score
highest_avg_class_idx = np.argmax(avg_class_scores)
highest_class_name = class_names[highest_avg_class_idx]

# Select and plot all instances where the predicted class is the one with the highest average score
highest_class_indices = np.where(np.argmax(fake_predictions, axis=1) == highest_avg_class_idx)[0]
highest_class_images = fake_images[highest_class_indices]

# Plot the images of the class with the highest average score
for i in range(len(highest_class_images)):
    plt.imshow(highest_class_images[i])
    plt.title(f"{highest_class_name} Image | Score: {np.max(fake_predictions[highest_class_indices[i]]):.2f}")
    plt.show()


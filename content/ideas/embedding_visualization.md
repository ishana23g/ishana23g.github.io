# High-Dimensional Embedding Visualization

## Interactive 2D Visualization with Epsilon Distance Slider

A tool for visualizing high-dimensional embedding data in 2D with:
- **Color slider** to indicate epsilon distances
- **Graph priority queue** showing importance of which points are centers/centroids
- **Smoothing factor** to indicate overlap of points across regions

## Cell Splitting Concept

- At very small epsilon: points are individualized, each in their own region
- As epsilon increases: gradient smooths out, less data loss
- The visualization shows how much data is being compressed at each level

## Example Dataset: Text Embeddings

Use text embeddings as the example where:
- Certain regions have known similarity (same paragraph, sentence structure, topic)
- Y-labels are hidden from the visualization tool
- Tool takes parameters or separate label files
- Labels completely hidden from training process

## Goal

A novel way to compress data in a hypertunable manner — visually showing the compression-quality tradeoff.

# Motion Detection & Information-Dense Frames

## Goal

Find the most interesting/information-dense frames using a priority queue/heap of labeled frames.

## Approach

### Motion Detection via Frame Subtraction
- Compute absolute difference between consecutive frames
- High average difference = lots of change/motion
- This is also related to edge detection

### Edge Detection Consideration
If there are more edges, surface detection becomes harder. Need a function to determine if consecutive frames are actually similar.

### Proposed Pipeline
1. Apply Gaussian blur to all images first
2. Frames share memory of the blurring process
3. Compute subtraction between blurred images
4. Rank frames by information density
5. Use priority queue to surface most interesting frames

## Applications
- Video summarization
- Key frame extraction
- Anomaly detection in video streams

# 3D Heat Equation Simulation

GPU-accelerated real-time 3D heat diffusion with CUDA and OpenGL.

## Overview

This project implements a real-time 3D heat equation solver using CUDA for GPU computation and OpenGL for visualization. The heat equation describes how heat diffuses through a material over time.

## Key Achievements

- Optimized custom CUDA kernels for real-time 3D heat diffusion
- Achieved **87% memory throughput** and **98% GPU occupancy**
- Implemented **CUDA-OpenGL interop** for real-time volumetric rendering at 60+ FPS
- Profiled using Nsight Compute/Systems to eliminate bottlenecks

## Technical Details

The simulation uses a finite difference method to solve the heat equation on a 3D grid. CUDA kernels handle the computation while OpenGL renders the results in real-time through texture sharing.

## Report

See the full project report PDF for detailed implementation, optimization techniques, and performance analysis.

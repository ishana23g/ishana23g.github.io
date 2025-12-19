# Parameter Efficient LLM Fine-Tuning

Exploring efficient methods to fine-tune large language models with limited computational resources.

## Overview

This project investigates parameter-efficient fine-tuning techniques for LLMs, specifically combining LoRA (Low-Rank Adaptation) with Prompt-Tuning through a novel Adaptive Sparse Fusion framework.

## Key Contributions

- Prototyped **Adaptive Sparse Fusion (ASF)** framework using PyTorch/Hugging Face
- Dynamically fuses LoRA and Prompt-Tuning for resource-constrained fine-tuning
- Conducted comparative analysis on GLUE benchmarks (MRPC, SST-2)
- Integrated mixed-precision training (FP16) for computational efficiency
- Explored Soft-MoE and Expert-Choice routing mechanisms

## Results

The framework demonstrates promising efficiency-accuracy trade-offs. There still needs some more work to be done on in-between layer duplication and computational redundancy which causes some performance training time drop off.

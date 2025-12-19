# Memory-Mapped Settings Cache

## Concept

For programs written in C or low-level languages with memory pointer access:

Create a file that acts as a memory buffer pointer where:
- Set N bytes in the file as cache for setting X
- Setting changes update the file in memory and the pointer
- On crash: automatically save written portion for robustness
- On relaunch: all settings are preserved

## Key Questions

- How big can these cached files get before bloating?
- What kinds of data are suitable for this approach?
- What applications need more storage, and how to scale?

## Properties

- Robust to application failure
- Persistent across sessions
- Low overhead for frequent updates

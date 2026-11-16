---
layout: reading-note
title: "Why More Pixels Cannot Undo Aliasing in Medical Images"
date: 2026-11-16
summary: "An imaging-quality companion on the sampling theorem, misleading patterns created by undersampling, and why resizing decisions need task-based validation."
source_book: "Medical Imaging Systems: An Introductory Guide"
source_url: "https://www.ncbi.nlm.nih.gov/books/NBK546153/"
source_citation: "Fischer, P., Sembritzki, K., & Maier, A. (2018). System Theory, Sections 2.4.1–2.4.2 and 2.5. In A. Maier, S. Steidl, V. Christlein, & J. Hornegger (Eds.), Medical Imaging Systems: An Introductory Guide (Lecture Notes in Computer Science, Vol. 11111, pp. 13–36). Springer. https://doi.org/10.1007/978-3-319-96520-8_2"
keywords: [medical imaging, sampling theorem, aliasing, image resampling, signal processing, quality assurance, imaging AI, reproducibility]
---

## The hidden failure in a digital image

A scanner or image-processing pipeline can produce a perfectly valid image file while misrepresenting the pattern it was supposed to measure. The pixels have numbers. The image looks orderly. Yet a repeating structure may appear at the wrong scale. This is **aliasing**, a failure of sampling—not merely a cosmetic defect.

In *Medical Imaging Systems: An Introductory Guide*, Fischer, Sembritzki, and Maier explain the transition from continuous signals to discrete measurements in **Chapter 2, Sections 2.4.1–2.4.2**, and introduce anti-aliasing through filtering in Section 2.5. These ideas matter to anyone working with CT, MRI, ultrasound, PET/CT, microscopy, or image-based AI.

## What sampling actually preserves

Imagine measuring a continuous signal at regularly spaced positions. The resulting digital samples record values only at those positions; they do not directly capture what happened between them. Reconstruction therefore depends on assumptions about which variations were possible in the original signal.

The Nyquist–Shannon principle states that an ideal band-limited signal can be reconstructed when the sampling frequency is sufficiently high relative to its highest frequency. In simple language, a pattern needs more than a sparse set of observations if we want to recover its shape without ambiguity. At the exact theoretical boundary, phase and implementation details make reconstruction fragile, so real systems require a margin and appropriate filtering.

When sampling is too sparse, a fast-changing pattern can imitate a slower one. Importantly, the resulting low-frequency pattern may look convincing. Upsampling it later creates more pixels, **not the missing original measurements**.

## Why this matters in imaging quality management

Think about downsampling an image for a machine-learning pipeline. If fine lines or repetitive textures contain frequencies above the new grid's capacity, simply discarding every other pixel can fold those frequencies into misleading patterns. An anti-aliasing low-pass filter applied **before** reduction attenuates details that cannot be represented reliably on the coarser grid.

But filtering also removes some fine structure. That trade-off must be evaluated against the intended task: detecting a tiny lesion, measuring a vessel boundary, segmenting an organ, or producing a thumbnail for navigation. The correct preprocessing strategy depends on what information must survive.

In medical imaging, sampling limitations also arise before the image reaches a file: detector spacing, acquisition geometry, physical resolution, motion, reconstruction, and scanner-specific processing all interact. A digital resize test is a useful teaching model, **not** a complete simulation of a CT detector or PET reconstruction.

For quality improvement, this produces a practical rule: never approve a preprocessing change merely because the output has the expected dimensions, looks sharper, or allows a model to run faster. Verify that clinically relevant information and performance are preserved.

## A practical exercise: a false low-frequency pattern

Use this entirely synthetic one-dimensional example. Suppose the underlying signal oscillates at **10 cycles per centimetre**.

1. Sample it at **15 samples per centimetre**. The sampling system's Nyquist frequency is only **7.5 cycles per centimetre**. The 10-cycle signal is above that limit and, under this idealized example, can appear as a **5-cycle-per-centimetre** pattern.
2. Now sample the same signal at **25 samples per centimetre**. The Nyquist frequency is **12.5 cycles per centimetre**, so the 10-cycle component is below the limit.
3. Sketch or plot the samples for both cases using the expression `cos(2π × 10 × x)`, with `x = n/15` and then `x = n/25` centimetres. Connect the points for visual comparison. A line between samples is only an illustration, not guaranteed reconstruction.

Ask yourself: if a downstream algorithm sees the apparent five-cycle pattern, what evidence would tell it that the underlying pattern was actually ten cycles per centimetre? Usually the discarded information cannot be recovered from those samples alone.

Then design a synthetic 2-D experiment: create a fine striped image, resize it once by direct decimation and once with low-pass filtering first, and compare the artifacts. Record the original sampling scale, target scale, interpolation/filter method, and effect on a predefined measurement. Do not use identifiable clinical images.

## Connect it to DataForSolution

The [Chest CT Classification project](https://github.com/DataForSolution/Data-Solution/tree/Master/portfolio/chest-ct-classification) is a relevant setting for asking whether resizing and preprocessing have changed the information available to a classifier. The project does **not** establish a clinical anti-aliasing benchmark; use it to motivate reproducible preprocessing documentation and controlled evaluation.

For an imaging-AI pipeline, keep a record of pixel spacing, resampling decisions, filtering, scanner/reconstruction provenance, and model input size. Test performance on held-out data and clinically meaningful subgroups. This distinguishes a pipeline that *runs* from one whose measurements are *trustworthy*.

Read the authorized [System Theory chapter on NCBI Bookshelf](https://www.ncbi.nlm.nih.gov/books/NBK546153/) or the [Springer chapter page](https://link.springer.com/chapter/10.1007/978-3-319-96520-8_2). The book is open access under [Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/). This companion uses original explanations and exercises; it reproduces no source figures or extended passages.

## Reflection question

**If a resized scan looks visually acceptable but a small-feature detection model changes its predictions, how would you determine whether aliasing, ordinary resolution loss, or a model robustness problem caused the difference?**
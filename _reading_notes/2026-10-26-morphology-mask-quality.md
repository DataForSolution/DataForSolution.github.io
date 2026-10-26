---
layout: reading-note
title: "A Cleaner Mask Is Not Necessarily a Better Segmentation"
date: 2026-10-26
summary: "An imaging-focused companion on erosion, dilation, opening, closing, and the quality checks needed before accepting a cleaned segmentation mask."
source_book: "Medical Imaging Systems: An Introductory Guide"
source_url: "https://www.ncbi.nlm.nih.gov/books/NBK546156/"
source_citation: "Bernecker, D. (2018). Image Processing, Section 3.5: Morphological Operators. In A. Maier, S. Steidl, V. Christlein, & J. Hornegger (Eds.), Medical Imaging Systems: An Introductory Guide (Lecture Notes in Computer Science, Vol. 11111). Springer. https://doi.org/10.1007/978-3-319-96520-8_3"
keywords: [medical imaging, image processing, mathematical morphology, segmentation, quality assurance, erosion, dilation]
---

## The idea worth learning

A segmentation mask turns an image into a decision about *where an object is*. That decision might identify a lung region on CT, a structure on MRI, or a candidate lesion on PET/CT. Even a plausible-looking mask can contain disconnected pixels, jagged edges, or tiny gaps. It is tempting to fix these defects automatically and assume the result must be better.

Section 3.5 of David Bernecker's **Image Processing** chapter introduces **morphological operators**, which change image regions according to a chosen neighborhood or *structuring element*. The deeper lesson is that each operation encodes an assumption about which shapes should exist. A cleaner picture may be easier to work with, but visual cleanliness is not the same as anatomical correctness.

## Four operations, four different effects

**Erosion** contracts foreground regions. In a binary mask, a foreground pixel survives only when the required neighborhood also belongs to the foreground. Erosion can eliminate isolated bright pixels, but it may also remove narrow structures worth preserving.

**Dilation** grows foreground regions. It can help reconnect nearby components or enlarge a candidate area. The trade-off is that it can spill across a real boundary or merge structures that should remain separate.

**Opening** applies erosion and then dilation with the same structuring element. It is useful for removing small foreground islands or thin projections that do not fit the chosen neighborhood. It does not guarantee restoration of every legitimate feature removed during erosion.

**Closing** reverses the order: dilation followed by erosion. It can fill small internal gaps and connect close foreground regions. But a small dark gap might represent a true anatomical separation, not a mistake.

The **structuring element** matters as much as the operation. A three-by-three square and a disk-shaped neighborhood can produce different contours. Pixel spacing also matters: three pixels do not represent the same physical distance in every scan, and an operation performed independently on two-dimensional slices may behave differently from one performed on an entire volume.

## Why this matters for medical-imaging AI

Segmentation often precedes measurement. A mask can determine the reported area or volume of a structure, define a region for texture analysis, or determine which pixels contribute to a quantitative feature. If post-processing alters the mask, it can alter the measurement even when the underlying scan has not changed.

Consider a hypothetical PET/CT pipeline that isolates a region before computing a summary uptake value. Dilation may include nearby tissue, changing the region's mean activity. Erosion may exclude boundary voxels or even eliminate a small focus. Neither direction is universally correct. The result depends on the scientific question, voxel geometry, partial-volume effects, and the validation standard.

This also creates a risk in machine learning: applying the same smoothing rule to every predicted mask may hide model weaknesses instead of fixing the underlying classification or segmentation errors. A post-processing step should therefore be treated as part of the model pipeline, with parameters fixed before final evaluation and tested on genuinely held-out cases.

## A practical exercise: test the assumption

Create two synthetic **binary masks**, with foreground represented by 1 and background by 0. In the first, draw a solid five-by-five block and place a single foreground pixel several rows away. In the second, draw another five-by-five block but change its center pixel to 0.

Apply a three-by-three **opening** to the first mask and a three-by-three **closing** to the second. Before running either operation, write down the expected change: which isolated component should disappear, and which hole should close? Then compare the masks pixel by pixel.

For each before/after pair, record three simple measures: foreground-pixel count, number of connected foreground components, and how many pixels changed. Change the structuring element size and repeat. Notice how rapidly an apparently minor implementation choice can reshape the output.

For a more rigorous study, introduce a separately created reference mask and calculate intersection-over-union or Dice overlap, including small structures as an explicit subgroup. Do not label a result "improved" merely because it looks smoother. If these were clinical images, clinically appropriate expert review and independently validated criteria would be necessary.

## Connect it to DataForSolution

The [Chest CT Classification project](https://github.com/DataForSolution/Data-Solution/tree/Master/portfolio/chest-ct-classification) emphasizes split integrity, reproducibility, and defensible evaluation. Its classification task is **not** a segmentation validation study; use it as a reminder to document each preprocessing transformation and ensure that neither masks nor tuning choices leak information from the held-out test set. The broader [DataForSolution Projects](https://dataforsolution.github.io/projects/) collection offers related examples of testing claims against evidence.

The authorized reading is [Bernecker, Section 3.5, on NCBI Bookshelf](https://www.ncbi.nlm.nih.gov/books/NBK546156/). It is part of an open-access Springer volume licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). This companion is an original explanation and exercise; no source figures or extended passages are reproduced.

## Reflection question

**When a morphological operation removes an irregularity, what evidence would you require before calling that change a correction rather than the deletion of valid anatomy?**

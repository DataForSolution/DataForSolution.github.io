---
layout: reading-note
title: "Why Thinner MRI Slices Do Not Automatically Mean Better Images"
date: 2026-11-02
summary: "An MRI quality-improvement companion on slice thickness, partial-volume effects, signal-to-noise trade-offs, and how to test protocol changes before declaring them improvements."
source_book: "Medical Imaging Systems: An Introductory Guide"
source_url: "https://www.ncbi.nlm.nih.gov/books/NBK546152/"
source_citation: "Lugauer, F., & Wetzl, J. (2018). Magnetic Resonance Imaging, Sections 6.2–6.3. In A. Maier, S. Steidl, V. Christlein, & J. Hornegger (Eds.), Medical Imaging Systems: An Introductory Guide (Lecture Notes in Computer Science, Vol. 11111, pp. 91–118). Springer. https://doi.org/10.1007/978-3-319-96520-8_6"
keywords: [MRI, slice thickness, signal-to-noise ratio, partial-volume effect, image quality, protocol optimization, healthcare quality improvement]
---

## The trade-off hidden in a thin slice

A smaller number in an MRI protocol can look like obvious progress. If a sequence acquires two-millimeter slices instead of four-millimeter slices, the resulting volume may depict anatomy with greater detail through the slice direction. Yet the thinner acquisition can also produce noisier images. A protocol can therefore improve one dimension of image quality while making another worse.

In Chapter 6 of *Medical Imaging Systems: An Introductory Guide*, Felix Lugauer and Jens Wetzl explain how MRI uses spatially selective excitation and gradient encoding to form images. Sections **6.2, Principles of Magnetic Resonance Imaging**, and **6.3, Pulse Sequences**, help explain why resolution, available signal, and acquisition strategy cannot be optimized independently.

This matters because **image quality is a clinical and operational outcome, not a single scanner setting**.

## Why slice thickness changes what we see

In a conventional two-dimensional, slice-selective acquisition, a thicker slice samples signal from a larger volume of tissue. That can supply more measurable signal, but it also averages structures that occupy different positions within that slice. This is the **partial-volume effect**: a small feature and its surroundings may contribute to the same image value, making boundaries or subtle findings harder to distinguish.

Thinner slices reduce this through-plane averaging. The trade-off is that fewer contributing spins generally mean less signal per acquired slice, assuming other relevant parameters remain comparable. Noise may then become more conspicuous. The apparent benefit can also be undermined by patient motion or by changes made elsewhere in the protocol to compensate for reduced signal.

A different acquisition strategy, such as three-dimensional volume imaging, can change the trade-offs. Slice thickness by itself does not establish the actual signal-to-noise ratio, diagnostic resolution, scan duration, or patient tolerance.

## The metrics must answer different questions

**Spatial resolution** asks how well nearby structures can be distinguished. **Signal-to-noise ratio (SNR)** compares useful measured signal with background variation. **Contrast-to-noise ratio (CNR)** addresses how distinguishable two tissues or regions are relative to noise. **Partial-volume behavior** describes how the acquisition blends signals from structures smaller than the sampled volume.

These are related but not interchangeable. A sharper boundary with substantially poorer CNR may not help the clinical task. Likewise, a smooth, high-SNR image may conceal a small structure because it averages across a thick slice.

For quality management, add operational measures: examination duration, repeat sequences, motion-related rejection, diagnostic adequacy, and consistency across scanners. A technical improvement that raises repeat rates or compromises a needed finding may not be a useful overall improvement.

## A practical exercise: compare two protocols

Use a phantom or a synthetic image dataset, **not identifiable patient scans**, to test this hypothetical proposal. Protocol A uses four-millimeter slices and takes two minutes. Protocol B uses two-millimeter slices and takes three minutes fifteen seconds. Suppose a trial records the following illustrative results:

| Measure | Protocol A | Protocol B |
|---|---:|---:|
| Nominal slice thickness | 4 mm | 2 mm |
| Measured SNR in a defined region | 28 | 19 |
| Motion/repeat-affected exams in 50 trials | 2 | 7 |
| Exams accepted at first review | 48 of 50 | 43 of 50 |

First, calculate first-review acceptance: **96%** for A and **86%** for B. Next, explain what the table does *not* tell you. It does not measure whether a clinically important small structure is more visible, whether CNR improved, or whether the difference in repeat rates would persist in a properly controlled study.

Design the next test. Keep the clinical task and eligibility criteria fixed, standardize coils and reconstruction settings where feasible, and have blinded readers assess relevant feature visibility. Also record scan time, artifact reasons, SNR/CNR measurement methods, and patient or phantom characteristics. Compare by scanner and protocol type rather than merging every acquisition into a single average. This is a quality-improvement experiment, not evidence that the illustrative numbers are real clinical results.

## Connect it to DataForSolution

The [DataForSolution medical-imaging project portfolio](https://github.com/DataForSolution/Data-Solution/tree/Master/portfolio) offers a useful model for documenting assumptions, transformations, splits, and evaluation. Its [Chest CT Classification example](https://github.com/DataForSolution/Data-Solution/tree/Master/portfolio/chest-ct-classification) is not an MRI protocol study, but the same discipline applies: a change in acquisition or preprocessing can alter what an algorithm learns or measures. For an MRI-AI project, protocol differences should be recorded and tested as potential sources of **dataset shift**, not silently treated as interchangeable images.

Read the authorized [MRI chapter on NCBI Bookshelf](https://www.ncbi.nlm.nih.gov/books/NBK546152/) or its [publisher chapter page](https://link.springer.com/chapter/10.1007/978-3-319-96520-8_6). This chapter belongs to an open-access Springer book licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). This note is an original learning companion; it reproduces no source figures or extended passages.

## Reflection question

**What combination of image-quality, clinical-task, and workflow evidence would convince you that a thinner MRI acquisition is genuinely better for a particular examination?**

# Implementation Plan: Update Social Preview Metadata

This plan outlines the steps to change the website's metadata so that the link preview shows the current hero section instead of the generic placeholder image.

## 1. Image Asset Acquisition
*   **Action**: Capture a clean, high-resolution screenshot of the hero section from the live site (`https://tcmproject1.vercel.app/`).
*   **Timing**: Wait for entrance animations (text fade-in, parallax) to settle before capturing.
*   **File Name**: `social-preview.png`
*   **Target Directory**: `public/`

## 2. Project Structure Preparation
*   **Action**: Ensure a `public` directory exists at the root of the project.
*   **Reasoning**: Files in the `public` folder are copied to the build root, making them accessible via `https://yourdomain.com/filename.png`.

## 3. Metadata Update (`index.html`)
*   **File**: `/index.html`
*   **Changes**:
    *   Update `og:image` content to `/social-preview.png`.
    *   Update `twitter:image` content to `/social-preview.png`.
    *   Add `og:image:width` (1200) and `og:image:height` (630) for better platform compatibility.

## 4. Verification & Deployment
*   **Local Check**: Verify the path resolution in the source code.
*   **Cache Clearing**: After deployment, use Social Debugger tools (Facebook Sharing Debugger, Twitter Card Inspector) to force platforms to scrape the new metadata.

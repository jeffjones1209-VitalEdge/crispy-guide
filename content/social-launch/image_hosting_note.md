# VItalEdge Image Hosting Instructions for Buffer Import

Your **Buffer CSV Import File** (`buffer_import.csv`) contains ready-to-schedule social media posts linked to dates and times. However, Buffer requires **publicly accessible image URLs** in the `Media URL` column to download and attach visuals to your scheduled posts.

Because our generated assets are currently stored locally in the workspace, you must host them publicly before importing the CSV into Buffer.

Here are the **two best ways** to handle this:

---

## 🚀 Option 1: Host Locally via the Deployed Website (Highly Recommended)
This is the most professional method. It requires no external dependencies and keeps our branding clean and self-hosted.

1. **Move the Images:** Place all 7 AI-generated images from `/home/team/shared/vitaledge/content/images/` and `/home/team/shared/vitaledge/content/execution/images/` directly into the VItalEdge React project's static assets folder:
   * Target folder: `/home/team/shared/vitaledge/public/images/`
2. **Deploy the App:** Build and deploy the website (e.g., to Vercel, Netlify, or a custom VPS).
3. **Automatic Mapping:** Once your website is live at your public domain (e.g., `https://vitaledge.vercel.app`), the local file paths mapped inside `buffer_import.csv` will automatically correspond to:
   * `https://vitaledge.vercel.app/images/post2.png`
   * `https://vitaledge.vercel.app/images/post4.png`
   * `https://vitaledge.vercel.app/images/post5.png`
   * `https://vitaledge.vercel.app/images/post7.png`
   * `https://vitaledge.vercel.app/images/syringe_reading.png`
   * `https://vitaledge.vercel.app/images/tb500_mechanisms.png`
   * `https://vitaledge.vercel.app/images/metabolic_comparison.png`

Our `buffer_import.csv` is pre-configured to use the placeholder domain `https://vitaledge.vercel.app`. If your live domain is different, you can open the CSV in Excel/Google Sheets and do a simple **Find and Replace** on the base URL.

---

## ☁️ Option 2: Upload to Imgur or standard CDN (Quick Alternative)
If you want to schedule posts in Buffer *before* deploying the website live, use a free image CDN.

1. **Bulk Upload:** Go to a free image hosting site like [Imgur](https://imgur.com) or [Postimages](https://postimages.org) and upload the 7 generated images.
2. **Grab Direct Links:** Copy the **Direct Link** for each uploaded image (make sure the URL ends in `.png`).
3. **Update the CSV:** Open `buffer_import.csv` in Excel or Google Sheets, locate the `Media URL` column, and paste the respective direct Imgur/CDN URLs into their corresponding rows.
4. **Import & Schedule:** Export the updated file as a CSV and upload it directly to Buffer!

---

## 🎨 Asset Matrix Reference Guide

| Day | Focus Peptide / Topic | AI Generated Image Filename | Description |
| :---: | :--- | :--- | :--- |
| **1** | Reconstitution Formula | `syringe_reading.png` | Macro photo of a syringe with glowing green U-100 markings. |
| **2** | BPC-157 Science | `post2.png` | High-tech laboratory peptide helix floating over a glass tablet. |
| **3** | Temperature Storage | `post7.png` | Clean, minimalist medical cold storage rack with glowing vials. |
| **4** | Syringe vs Milligrams | `post4.png` | High-contrast syringe units and lyophilized powder representation. |
| **5** | TB-500 vs BPC-157 | `post5.png` | Split-screen biological healing pathways (BPC-157 vs. TB-500). |
| **6** | BPC-157 Reconstitution | `syringe_reading.png` | Macro photo of syringe U-100 markings. |
| **7** | Ultimate Storage Matrix | `post7.png` | Cold storage rack image. |
| **8** | Semaglutide vs Tirzepatide | `metabolic_comparison.png` | Split conceptual rendering of GLP-1 vs GLP-1/GIP co-activation. |
| **10** | GHK-Cu Science | `tb500_mechanisms.png` | 3D medical render of biological cell repair and actin proteins. |
| **11** | Automating Reconstitution | `syringe_reading.png` | Syringe markings visual. |
| **15** | CJC-1295 + Ipamorelin | `metabolic_comparison.png` | Synergistic metabolic co-activation. |
| **18** | Tirzepatide Reconstitution | `syringe_reading.png` | Syringe markings visual. |
| **24** | Syringes Demystified | `syringe_reading.png` | Syringe markings visual. |

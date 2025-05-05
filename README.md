# mota-tarot-api
A simple Tarot API for MoTA (Museum of Takdir dan Arketipe)
# 🃏 MoTA Tarot API

A simple REST API for MoTA (Museum of Takdir dan Arketipe) to serve Tarot card readings and symbolic meanings. Designed to integrate with the MoTA WordPress site and support future AI-based reflection tools.

## 🌟 What This API Does

- Serve Tarot card data (image, name, meaning)
- Support single-card and three-card reading endpoints
- Enable personalized symbolic reflection experiences
- Built for expansion into archetype mapping and spiritual branding

---

## 📁 Folder Structure

```bash
mota-tarot-api/
│
├── api/               # API route handlers
│   └── three-cards.js # Example endpoint for a 3-card draw
│
├── data/              # JSON files with Tarot card data
│   └── cards.json     # Deck metadata (name, image, meaning, keywords, reversed)
│
├── package.json       # Dependencies and scripts
├── vercel.json        # Vercel deployment configuration
├── README.md          # You're reading it.

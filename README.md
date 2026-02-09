# 🛡️ CyberShield AI
### **AI-First Intelligent Intake & Surge-Defense for National Infrastructure**

**Built for the Cloudflare Build-a-thon ⚡**
*A high-impact, scalable security solution for the Cybercrime.gov ecosystem.*

---

## 📖 The Challenge
National security portals often face two critical failure points:
1. **Infrastructure Collapse:** Massive traffic surges during viral fraud waves cause site downtime.
2. **Intelligence Bottlenecks:** Thousands of complaints are filed in chronological order, meaning a ₹10 Lakh fraud might sit in a queue behind a ₹10 spam report.

**CyberShield AI** solves this by placing an "Intelligent Brain" at the Edge. We use Cloudflare’s global network to filter traffic and AI to prioritize justice.

---

## 🚀 Key Features

* **🤖 AI-Powered Triage:** Automatically classifies complaints (e.g., UPI Fraud, Sextortion, Phishing) and extracts critical entities (Bank AC, Phone Numbers) using LLMs.
* **⚖️ Smart Priority Scoring:** A proprietary algorithm ranks complaints based on monetary loss, urgency, and threat level.
* **🔍 Scam Cluster Detection:** Powered by **Cloudflare Vectorize**, the system identifies if multiple reports across different states are linked to the same scammer.
* **🌐 Vernacular Reporting (AI4Bharat):** Breaking the language barrier by allowing victims to report in 22+ Indic languages via the **IndicTrans2** model.
* **🛡️ Surge Defense:** Leveraging Cloudflare Workers and Turnstile to prevent bot-spam and ensure 100% uptime during traffic spikes.

---

## 🛠️ Technical Stack



| Layer | Technology |
| :--- | :--- |
| **Frontend** | React, Tailwind CSS, Vite (Deployed on **Cloudflare Pages**) |
| **Edge Gateway** | **Cloudflare Workers** (Routing, Rate Limiting, Bot Detection) |
| **AI Backend** | **Python (FastAPI)** |
| **Vector DB** | **Cloudflare Vectorize** (Similarity Search for Scam Patterns) |
| **AI Models** | **Llama 3** (Triage), **AI4Bharat IndicTrans2** (Translation) |
| **Storage** | **Cloudflare R2** (Evidence) & **KV** (Session Metadata) |

---

## 🏗️ Project Structure

```text
├── frontend/             # React (Vite) Application
├── backend-python/      # FastAPI server for AI processing
├── workers/             # Cloudflare Workers (Gateway & Triage)
├── wrangler.toml        # Cloudflare Configuration
└── README.md
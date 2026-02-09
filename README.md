# CyberShield AI

**AI-Powered Intelligent Intake & Surge Defense for cybercrime.gov**

CyberShield AI is an AI-first middleware system designed to improve the performance, intelligence, and responsiveness of India’s cybercrime reporting infrastructure.

It uses **Cloudflare Workers, Workers AI, and AI4Bharat models** to intelligently classify complaints, prioritize high-risk cases, and protect the system from traffic surges.


## Problem

Government cybercrime portals face:

* Sudden traffic spikes during fraud waves
* Bot-based spam complaints
* No intelligent complaint prioritization
* Manual screening delays
* Late detection of organized scam networks

All complaints are treated equally, even when:

* ₹500 loss
* ₹5,00,000 loss
* Active scam network

This leads to delayed response and poor citizen experience.

## Solution

CyberShield AI introduces an **AI-powered intake and surge-defense layer** that:

1. Classifies complaints using AI
2. Assigns risk scores
3. Prioritizes high-value fraud cases
4. Detects repeated scam patterns
5. Protects the system from traffic overload

## Core Features

### AI Complaint Classification

* Detects fraud type
* Extracts urgency level
* Assigns priority automatically

### Smart Risk Scoring

Prioritizes:

* High monetary losses
* Repeated scam entities
* Urgent fraud cases

### Traffic Surge Protection

* Intelligent request routing
* Bot filtering via Cloudflare
* Dynamic rate limiting

### Multilingual AI Support (AI4Bharat)

* Accept complaints in Indian languages
* AI converts them into structured reports

## Architecture

```
Frontend (React + Vite)
        ↓
Cloudflare Worker (API Gateway)
        ↓
Python FastAPI Backend
        ↓
Cloudflare Workers AI (AI4Bharat Model)
```

## Tech Stack

### Frontend

* Vite (build tool)
* React with TypeScript
* ESLint for code quality
* PostCSS for styling pipeline

### Backend

* Python FastAPI
* Cloudflare Workers (API Gateway)
* Cloudflare Workers AI
* AI4Bharat model from Workers AI catalogue

### Infrastructure

* Docker
* Cloudflare Developer Platform

## Project Structure

```
cybershield-ai/
│
├── frontend/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.ts
│   ├── tsconfig.json
│   └── README.md
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── models.py
│   │   └── ai.py
│   ├── requirements.txt
│   └── Dockerfile
│
├── docker-compose.yml
├── .env.example
└── README.md
```

## Setup (One-Command Demo)

### Requirements

* Docker installed


### Step 1: Clone the repository

```bash
git clone <repo-url>
cd cybershield-ai
```


### Step 2: Configure environment variables

```bash
cp .env.example .env
```

Edit `.env` and add:

```
CF_ACCOUNT_ID=your_account_id
CF_API_TOKEN=your_api_token
AI_MODEL=@ai4bharat/indic-bert-classifier
```

### Step 3: Run the project

```bash
docker compose up --build
```

Backend will be available at:

```
http://localhost:8000
```

Interactive API docs:

```
http://localhost:8000/docs
```

## Test the AI Complaint Endpoint

**POST** `/api/complaint`

Example request:

```json
{
  "name": "Rahul",
  "phone": "9876543210",
  "email": "rahul@mail.com",
  "fraud_type": "UPI",
  "amount": 75000,
  "description": "Mujhe UPI ke through job scam me 75,000 ka fraud hua"
}
```

Example response:

```json
{
  "complaint_id": "a1b2c3d4",
  "fraud_type": "Job Scam",
  "urgency": "High",
  "risk_score": 75,
  "priority": "Immediate Action"
}
```

## Hackathon Compliance

| Requirement                   | Status |
| ----------------------------- | ------ |
| Built on Cloudflare ecosystem | ✅      |
| Uses Workers AI               | ✅      |
| AI-first solution             | ✅      |
| Live deployable architecture  | ✅      |
| AI4Bharat model integration   | ✅      |

## 🎯 Impact

CyberShield AI enables:

* Faster response to high-value fraud
* Early detection of scam networks
* Stable performance during traffic spikes
* Better citizen experience
* Smarter cybercrime infrastructure

## 👥 Team

Kashish Kanojia
Vidushi Mehra
Chitranshu Chauhan
Shashank Pachori
Arushi

## License

MIT License
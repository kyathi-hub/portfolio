# ⚖️ Secure RAG Contract Risk Analyzer

An AI-powered application that helps users understand legal contracts securely using Retrieval-Augmented Generation (RAG) with built-in security guardrails.

## Features

- **PDF Upload** — Extract text from legal contracts using PyMuPDF
- **RAG Pipeline** — ChromaDB vector store + sentence-transformers embeddings + Groq LLM
- **Input Guardrails** — Detect and block prompt injection, jailbreaks, and off-topic queries
- **Output Guardrails** — Verify answers are grounded in document context, prevent hallucinations
- **Risk Analysis** — Automatically score and categorize contract clauses (High/Medium/Low)
- **Q&A** — Natural language questions with confidence scores and supporting clauses
- **Dashboard** — Analytics on questions asked, blocked attempts, risk summary

---

## Quick Start

### 1. Prerequisites

- Python 3.11+
- Groq API key (free at [console.groq.com](https://console.groq.com))

### 2. Install Dependencies

```bash
cd rag
pip install -r requirements.txt
```

### 3. Configure API Key

Edit `.env` and add your Groq API key:

```env
GROQ_API_KEY=gsk_your_actual_key_here
GROQ_MODEL=llama3-8b-8192
```

Available Groq models (free tier):
- `llama3-8b-8192` (recommended — fast)
- `llama3-70b-8192` (slower but more capable)
- `mixtral-8x7b-32768` (large context)

### 4. Generate Sample Contract (optional)

```bash
python data/create_sample_contract.py
```

### 5. Run the Application

**Terminal 1 — Backend API:**
```bash
python run_backend.py
```

**Terminal 2 — Frontend UI:**
```bash
python run_frontend.py
```

Open [http://localhost:8501](http://localhost:8501) in your browser.

API docs at [http://localhost:8000/docs](http://localhost:8000/docs)

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/upload` | Upload PDF contract |
| POST | `/api/ask` | Ask a question |
| GET | `/api/risk-summary/{id}` | Get risk analysis |
| GET | `/api/dashboard/{id}` | Get dashboard stats |
| GET | `/api/sessions` | List active sessions |
| GET | `/api/health` | Health check |

---

## Architecture

```
User → Streamlit UI → FastAPI Backend
                           ↓
                     PDF Parser (PyMuPDF)
                           ↓
                     Text Chunker
                           ↓
                     Embeddings (sentence-transformers)
                           ↓
                     ChromaDB Vector Store
                           ↓
                     Input Guardrail
                           ↓
                     Retriever (top-k chunks)
                           ↓
                     Groq LLM (OpenAI-compatible)
                           ↓
                     Output Guardrail
                           ↓
                     Final Answer → UI
```

---

## Project Structure

```
rag/
├── backend/
│   ├── main.py              # FastAPI app
│   ├── models/schemas.py    # Pydantic models
│   ├── routes/              # API endpoints
│   │   ├── upload.py
│   │   ├── ask.py
│   │   ├── risk.py
│   │   └── health.py
│   ├── services/            # Business logic
│   │   ├── pdf_parser.py
│   │   ├── embeddings.py
│   │   ├── vector_store.py
│   │   ├── llm_client.py
│   │   ├── rag_pipeline.py
│   │   ├── risk_analyzer.py
│   │   └── session_store.py
│   └── utils/
│       ├── config.py
│       └── logger.py
├── frontend/
│   ├── app.py               # Streamlit UI
│   └── api_client.py        # HTTP client
├── guardrails/
│   ├── input_guardrail.py   # Injection detection
│   └── output_guardrail.py  # Hallucination check
├── prompts/
│   ├── qa_prompt.py         # Q&A prompts
│   └── risk_prompt.py       # Risk analysis prompts
├── data/
│   └── create_sample_contract.py
├── vectorstore/             # ChromaDB persistence
├── logs/                    # Application logs
├── .env                     # Environment variables
├── requirements.txt
├── run_backend.py
├── run_frontend.py
├── Dockerfile
└── docker-compose.yml
```

---

## Security Guardrails

### Input (pre-retrieval)
- Detects prompt injection patterns (`ignore previous instructions`, etc.)
- Detects jailbreak attempts (DAN, developer mode, etc.)
- Detects system prompt extraction attempts
- Blocks off-topic requests unrelated to the document

### Output (post-generation)
- Verifies answer references context, not external knowledge
- Checks for hallucination indicator phrases
- Validates context relevance scores
- Returns safe fallback if insufficient context

---

## Docker

```bash
# Build and run both services
docker-compose up --build

# Backend only
docker build -t rag-analyzer .
docker run -e GROQ_API_KEY=your_key -p 8000:8000 rag-analyzer
```

---

## Configuration (.env)

| Variable | Default | Description |
|----------|---------|-------------|
| `GROQ_API_KEY` | required | Your Groq API key |
| `GROQ_MODEL` | `llama3-8b-8192` | Groq model name |
| `GROQ_BASE_URL` | Groq endpoint | OpenAI-compatible URL |
| `EMBEDDING_MODEL` | `all-MiniLM-L6-v2` | Sentence transformer model |
| `CHUNK_SIZE` | `500` | Characters per chunk |
| `CHUNK_OVERLAP` | `50` | Overlap between chunks |
| `TOP_K_CHUNKS` | `5` | Chunks retrieved per query |
| `TEMPERATURE` | `0.1` | LLM temperature (low = precise) |

# AI Hiring Pipeline Simulator

A production-grade Multi-Agent AI application that simulates the complete hiring pipeline using specialized AI agents coordinated by an Orchestrator.

## Features

- **Multi-Agent Architecture**: 11 specialized AI agents for comprehensive hiring evaluation
- **Resume Parsing**: Extract structured data from PDF/DOCX resumes
- **Job Description Analysis**: Extract requirements and keywords
- **ATS Evaluation**: Calculate match scores and identify gaps
- **Resume Optimization**: Suggest improvements with quantified achievements
- **Multi-Perspective Reviews**: HR, Technical, Hiring Manager, Recruiter evaluations
- **Hiring Committee**: Weighted voting for final decision
- **Interview Preparation**: Customized questions and preparation roadmap

## Architecture

```
multi_agent/
├── src/
│   ├── agents/              # Individual AI agents
│   │   ├── __init__.py
│   │   ├── base.py          # Base agent class
│   │   ├── resume_parser.py
│   │   ├── jd_analyzer.py
│   │   ├── ats_evaluator.py
│   │   ├── resume_optimizer.py
│   │   ├── hr_recruiter.py
│   │   ├── technical_interviewer.py
│   │   ├── hiring_manager.py
│   │   ├── recruiter_decision.py
│   │   ├── hiring_committee.py
│   │   └── interview_coach.py
│   ├── orchestrator/        # Orchestration layer
│   │   ├── __init__.py
│   │   └── pipeline.py
│   ├── schemas/             # Pydantic models
│   │   ├── __init__.py
│   │   ├── resume.py
│   │   ├── job_description.py
│   │   ├── evaluation.py
│   │   └── report.py
│   ├── utils/               # Utilities
│   │   ├── __init__.py
│   │   ├── document_parser.py
│   │   ├── llm_client.py
│   │   └── prompts.py
│   ├── api/                 # FastAPI endpoints
│   │   ├── __init__.py
│   │   ├── main.py
│   │   └── routes.py
│   ├── config/              # Configuration
│   │   ├── __init__.py
│   │   └── settings.py
│   └── database/            # Database models
│       ├── __init__.py
│       ├── models.py
│       └── session.py
├── tests/                   # Unit tests
│   ├── __init__.py
│   ├── test_agents.py
│   └── test_orchestrator.py
├── Dockerfile
├── docker-compose.yml
├── requirements.txt
└── README.md
```

## Quick Start

### Prerequisites

- Python 3.10+
- Node.js 18+ (for frontend)
- PostgreSQL 15+
- Docker & Docker Compose (optional)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd multi_agent

# Create virtual environment
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration
```

### Environment Variables

```env
# Application
APP_NAME="AI Hiring Pipeline Simulator"
APP_VERSION="1.0.0"
DEBUG=false
LOG_LEVEL=INFO

# LLM Configuration
OPENAI_API_KEY=your_openai_api_key
ANTHROPIC_API_KEY=your_anthropic_api_key
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=us-east-1

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/hiring_pipeline
CHROMA_DB_PATH=./chromadb

# JWT
JWT_SECRET=your_jwt_secret_key
JWT_ALGORITHM=HS256
JWT_EXPIRY_HOURS=24

# Document Processing
MAX_FILE_SIZE=10485760  # 10MB
ALLOWED_EXTENSIONS=.pdf,.docx
```

### Running the Application

#### Option 1: Direct Run

```bash
# Start the API server
uvicorn src.api.main:app --reload --host 0.0.0.0 --port 8000

# Run the frontend (in another terminal)
cd frontend
npm install
npm start
```

#### Option 2: Docker

```bash
# Build and run with Docker Compose
docker-compose up --build

# Or run individually
docker build -t hiring-pipeline .
docker run -p 8000:8000 hiring-pipeline
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Hiring Pipeline
- `POST /api/hiring/upload-resume` - Upload resume (PDF/DOCX)
- `POST /api/hiring/paste-jd` - Paste job description
- `POST /api/hiring/start-pipeline` - Start full hiring pipeline
- `GET /api/hiring/status/{job_id}` - Get pipeline status
- `GET /api/hiring/report/{job_id}` - Get final report
- `GET /api/hiring/history` - Get user's hiring history

### Agents
- `GET /api/agents/resume-parser/{job_id}` - Get resume parsing results
- `GET /api/agents/jd-analyzer/{job_id}` - Get JD analysis results
- `GET /api/agents/ats-evaluation/{job_id}` - Get ATS evaluation
- `GET /api/agents/resume-optimizer/{job_id}` - Get optimized resume
- `GET /api/agents/hr-review/{job_id}` - Get HR review
- `GET /api/agents/technical-review/{job_id}` - Get technical review
- `GET /api/agents/hiring-manager/{job_id}` - Get hiring manager review
- `GET /api/agents/recruiter-decision/{job_id}` - Get recruiter decision
- `GET /api/agents/hiring-committee/{job_id}` - Get committee decision
- `GET /api/agents/interview-coach/{job_id}` - Get interview preparation

## Multi-Agent System

### Agent Descriptions

1. **Orchestrator Agent**
   - Manages workflow execution
   - Maintains shared memory
   - Handles retries and errors
   - Generates final report

2. **Resume Parser Agent**
   - Extracts personal details, skills, experience, education
   - Converts to structured JSON

3. **Job Description Analyzer Agent**
   - Extracts required/preferred skills
   - Identifies years of experience, responsibilities
   - Extracts keywords and certifications

4. **ATS Evaluation Agent**
   - Calculates ATS match score (0-100)
   - Identifies missing keywords
   - Evaluates formatting issues
   - Checks resume completeness

5. **Resume Optimization Agent**
   - Rewrites bullet points with quantified achievements
   - Improves action verbs
   - Adds missing keywords naturally
   - Preserves truthfulness

6. **HR Recruiter Agent**
   - Evaluates overall profile
   - Assesses career consistency
   - Reviews communication and presentation
   - Provides pros, cons, and questions

7. **Technical Interviewer Agent**
   - Evaluates technical skills
   - Assesses project quality
   - Reviews architecture depth
   - Generates technical questions

8. **Hiring Manager Agent**
   - Evaluates business impact
   - Assesses leadership and ownership
   - Reviews problem-solving skills
   - Makes hire/no-hire recommendation

9. **Recruiter Decision Agent**
   - Estimates salary fit
   - Assesses experience fit
   - Evaluates market competitiveness
   - Provides shortlist decision

10. **Hiring Committee Agent**
    - Collects all agent outputs
    - Uses weighted voting
    - Produces final decision with confidence score
    - Lists reasons, minor and major concerns

11. **Interview Coach Agent**
    - Generates HR, technical, behavioral questions
    - Creates system design questions
    - Provides preparation roadmap
    - Recommends learning resources

## Testing

```bash
# Run all tests
pytest tests/ -v

# Run specific test file
pytest tests/test_agents.py -v

# Run with coverage
pytest --cov=src tests/ -v
```

## Docker Configuration

### Dockerfile

```dockerfile
FROM python:3.11-slim

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements and install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY src/ ./src/
COPY .env.example .env

# Create non-root user
RUN useradd -m -u 1000 appuser
USER appuser

# Expose port
EXPOSE 8000

# Run the application
CMD ["uvicorn", "src.api.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

### docker-compose.yml

```yaml
version: '3.8'

services:
  api:
    build: .
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql://user:password@db:5432/hiring_pipeline
      - CHROMA_DB_PATH=/chromadb
    volumes:
      - ./data:/app/data
    depends_on:
      - db
      - chromadb

  db:
    image: postgres:15
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
      - POSTGRES_DB=hiring_pipeline
    volumes:
      - postgres_data:/var/lib/postgresql/data

  chromadb:
    image: chromadb/chroma:latest
    volumes:
      - chromadb_data:/chromadb

volumes:
  postgres_data:
  chromadb_data:
```

## Frontend (React + Tailwind CSS)

The frontend is a separate React application that provides a beautiful UI for the hiring pipeline.

### Features

- Dashboard with pipeline overview
- Resume upload with drag-and-drop
- Job description editor
- Real-time ATS analysis
- Resume improvement suggestions
- Hiring committee dashboard
- Interview prediction and questions
- Report download (PDF)

### Setup

```bash
cd frontend
npm install
npm start
```

## Project Structure Details

### Agents Module

Each agent follows a consistent pattern:

```python
from src.agents.base import BaseAgent
from src.schemas.resume import Resume
from src.schemas.job_description import JobDescription

class ResumeParserAgent(BaseAgent):
    """Agent responsible for parsing resumes"""
    
    async def run(self, resume_file: bytes) -> Resume:
        """Parse resume and extract structured data"""
        pass
```

### Orchestrator Module

The orchestrator manages the entire pipeline:

```python
from src.orchestrator.base import BaseOrchestrator
from src.agents.resume_parser import ResumeParserAgent

class HiringPipelineOrchestrator(BaseOrchestrator):
    """Orchestrates the complete hiring pipeline"""
    
    async def run_pipeline(self, resume: bytes, jd: str) -> FinalReport:
        """Execute the complete hiring pipeline"""
        pass
```

### Schemas Module

Pydantic models for type-safe data structures:

```python
from pydantic import BaseModel, Field
from typing import Optional, List

class Resume(BaseModel):
    personal_details: PersonalDetails
    skills: List[str]
    experience: List[Experience]
    education: List[Education]
    # ... more fields
```

## Error Handling

The system includes comprehensive error handling:

- Document parsing errors
- LLM API errors with retry logic
- Validation errors
- Pipeline execution errors
- User-friendly error messages

## Logging

Structured logging throughout the application:

```python
import logging

logger = logging.getLogger(__name__)

logger.info("Starting resume parsing")
logger.error("Failed to parse resume", exc_info=True)
```

## Security

- JWT authentication
- File upload validation
- Input sanitization
- Rate limiting
- Secure environment variables

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests
5. Submit a pull request

## License

MIT License

## Acknowledgments

- Built with LangGraph for agent orchestration
- Powered by OpenAI, Anthropic, and AWS Bedrock LLMs
- Uses PyMuPDF and python-docx for document processing







python -m pip install -r requirements.txt
python -m uvicorn src.api.main:app --reload
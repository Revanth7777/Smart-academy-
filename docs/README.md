# Smart Games & Academy Platform

Full-stack sports academy management platform with a public website, REST API, and AI service.

## Structure

```
sports-academy/
├── frontend/        React + Next.js (public website)
├── backend/         Node.js + Express (REST API)
├── ai-service/      Python FastAPI (AI features)
├── database/        (reserved for future DB setup)
├── docs/
└── docker-compose.yml
```

## Quick Start

### With Docker

```bash
docker-compose up --build
```

- Frontend: http://localhost:3000
- Backend API: http://localhost:4000
- AI Service: http://localhost:8000

### Local Development

**Frontend**
```bash
cd frontend
npm install
npm run dev
```

**Backend**
```bash
cd backend
npm install
npm run dev
```

**AI Service**
```bash
cd ai-service
python -m venv venv
venv\Scripts\activate   # Windows
pip install -r requirements.txt
uvicorn main:app --reload
```

## API Endpoints

| Service  | Endpoint              | Description              |
|----------|-----------------------|--------------------------|
| Backend  | GET /api/health       | Health check             |
| Backend  | GET /api/sports       | List sports programs     |
| Backend  | GET /api/events       | Upcoming events          |
| Backend  | POST /api/contact     | Contact form submission  |
| Backend  | POST /api/register    | Trial / enrollment       |
| AI       | GET /health           | Health check             |
| AI       | POST /chat            | Academy assistant chat   |
| AI       | POST /recommend       | Sport recommendation     |

## Environment Variables

Copy `.env.example` files in each service directory and fill in values as needed.

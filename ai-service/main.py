from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(
    title="Smart Games & Academy AI Service",
    description="AI assistant for sport recommendations and academy queries",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

SPORTS = [
    "Atya Patya",
    "Taekwondo",
    "Wushu",
    "Archery",
    "Sepak Takraw",
    "Soft Tennis",
]

SPORT_INFO = {
    "Atya Patya": "Best for speed, agility, teamwork, and tactical movement.",
    "Taekwondo": "Ideal for discipline, flexibility, and competitive kicking techniques.",
    "Wushu": "Great for agility, acrobatics, and expressive martial arts forms.",
    "Archery": "Perfect for focus, patience, and precision under pressure.",
    "Sepak Takraw": "Excellent for teamwork, reflexes, and dynamic footwork.",
    "Soft Tennis": "Suited for hand-eye coordination, cardio fitness, and social play.",
}


class ChatRequest(BaseModel):
    message: str


class RecommendRequest(BaseModel):
    age: int | None = None
    goal: str | None = None
    fitness_level: str | None = None


@app.get("/health")
def health():
    return {"status": "ok", "service": "sports-academy-ai"}


@app.get("/sports")
def list_sports():
    return {"sports": SPORTS}


@app.post("/chat")
def chat(req: ChatRequest):
    msg = req.message.lower()

    if any(word in msg for word in ["hello", "hi", "hey"]):
        reply = (
            "Welcome to Smart Games & Academy! I can help you choose a sport, "
            "learn about our programs, or answer enrollment questions."
        )
    elif "taekwondo" in msg or "wushu" in msg or "atya patya" in msg or "atyapatya" in msg:
        sport = next((s for s in SPORTS if s.lower().split("/")[0].strip() in msg or s.lower() in msg), None)
        if sport:
            reply = f"{sport}: {SPORT_INFO.get(sport, 'A great program at our academy.')}"
        else:
            reply = "We offer Atya Patya, Taekwondo, Wushu, Archery, Sepak Takraw, and Soft Tennis."
    elif any(word in msg for word in ["register", "join", "enroll", "trial"]):
        reply = (
            "You can register online through our website's Contact section "
            "or click 'Book Trial' to schedule a free trial class."
        )
    elif any(word in msg for word in ["coach", "coaches", "training"]):
        reply = (
            "Our academy has certified coaches with national and international "
            "experience across all six sports programs."
        )
    elif any(word in msg for word in ["event", "competition", "camp"]):
        reply = (
            "Upcoming events include State Championship, Belt Promotion Test, "
            "Summer Sports Camp, and Inter Academy Tournament. Check our Events section!"
        )
    else:
        reply = (
            "I'm the Smart Games & Academy assistant. Ask me about our sports programs, "
            "registration, coaches, or upcoming events."
        )

    return {"reply": reply}


@app.post("/recommend")
def recommend(req: RecommendRequest):
    goal = (req.goal or "").lower()
    recommendations = []

    if "discipline" in goal or "self-defense" in goal:
        recommendations = ["Taekwondo", "Atya Patya", "Wushu"]
    elif "focus" in goal or "precision" in goal:
        recommendations = ["Archery", "Wushu"]
    elif "team" in goal or "social" in goal:
        recommendations = ["Sepak Takraw", "Soft Tennis"]
    elif "fitness" in goal or "cardio" in goal:
        recommendations = ["Sepak Takraw", "Soft Tennis", "Taekwondo"]
    elif req.age and req.age < 10:
        recommendations = ["Taekwondo", "Soft Tennis", "Archery"]
    else:
        recommendations = SPORTS[:3]

    details = [
        {"sport": sport, "reason": SPORT_INFO.get(sport, "A popular program at our academy.")}
        for sport in recommendations
    ]

    return {"recommendations": details}

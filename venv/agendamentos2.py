from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel, Field
import models
from fastapi.middleware.cors import CORSMiddleware
from database import engine, SessionLocal
from sqlalchemy.orm import Session

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

models.Base.metadata.create_all(bind=engine)


def get_db():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()


class Agendamento2(BaseModel):
    nome: str = Field(min_length=1)
    email: str = Field(min_length=1)
    telefone: str = Field(min_length=1)
    cpf: str = Field(min_length=1)
    data: str = Field(min_length=1)
    horario: str = Field(min_length=1)
    servico: str = Field(min_length=1)



AGENDAMENTOS2 = []


@app.get("/")
def read_api(db: Session = Depends(get_db)):
    return db.query(models.Agendamentos2).all()


@app.post("/enviar-agendamento2")
def create_agendamento2(agendamento2: Agendamento2, db: Session = Depends(get_db)):

    agendamento2_model = models.Agendamentos2()
    agendamento2_model.nome = agendamento2.nome
    agendamento2_model.email = agendamento2.email
    agendamento2_model.cpf = agendamento2.cpf
    agendamento2_model.telefone = agendamento2.telefone
    agendamento2_model.servico = agendamento2.servico
    agendamento2_model.data = agendamento2.data
    agendamento2_model.horario = agendamento2.horario

    db.add(agendamento2_model)
    db.commit()
    

    return {
        'data': agendamento2
    }

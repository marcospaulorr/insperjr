from sqlalchemy import Column, Integer, String, Date
from database import Base


class Agendamentos2(Base):
    __tablename__ = "agendamentos2"

    id=Column(Integer, primary_key=True, index=True)
    nome = Column(String)
    email=Column(String)
    telefone = Column(String)
    cpf = Column (String)
    servico=  Column(String)
    data = Column(String)
    horario = Column(String)
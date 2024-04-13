from fastapi import FastAPI
import pyjokes
from pydantic import BaseModel

app = FastAPI()


@app.get('/calculator')
def calculator(value1: int, value2: int, znak: str):
    if (znak == '+'):
        return value1 + value2

    if (znak == '-'):
        return value1 - value2

    if (znak == '*'):
        return value1 * value2
    
    if (znak == '/') and (value2 == 0):
        return 'Ошибка ввода'

    if (znak == '/'):
        return value1 / value2

    if (znak == '**'):
        return value1 ** value2





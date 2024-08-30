FROM python:3.12.5-slim-bookworm

WORKDIR /app

COPY . .

RUN pip install flask

EXPOSE 5000

CMD ["python", "/app/app.py"]
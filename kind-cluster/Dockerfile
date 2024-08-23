FROM python:3.12.5-slim-bookworm

WORKDIR /app

COPY . .

RUN pip install flask

EXPOSE 8080

CMD ["python", "/app/app.py"]
FROM python:3.9.19-slim-bullseye

WORKDIR /app

COPY . .

RUN pip install flask

EXPOSE 5000

CMD ["python", "/app/app.py"]
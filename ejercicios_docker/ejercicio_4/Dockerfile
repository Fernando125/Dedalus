FROM python:3.12.5-slim-bookworm

WORKDIR /app

COPY payload.py payload.json /app

RUN pip install --no-cache-dir Flask PyJWT virtualenv

EXPOSE 5000

CMD ["python", "/app/payload.py"]
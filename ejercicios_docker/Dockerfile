FROM python:3.12.5-slim-bookworm

WORKDIR /app

COPY . .

RUN pip install --no-cache-dir Flask PyJWT virtualenv

EXPOSE 5000

ENV FLASK_ENV=production

CMD ["python", "/app/payload.py"]
FROM python:3.12.5-slim-bookworm

WORKDIR /app

COPY . .

RUN pip install --no-cache-dir PyJWT virtualenv
RUN pip install --no-cache-dir flask

EXPOSE 5000

ENV PORT=5000

CMD ["python", "/app/payload.py"]
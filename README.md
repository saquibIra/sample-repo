# qaai-demo

Tiny full-stack sample used to demo the QA.ai agent.

## Layout

- `backend/` — Node + Express + Jest (a calculator API)
- `frontend/` — Vanilla JS + Vitest + jsdom (a small DOM helper lib)

## Run tests

```bash
cd backend && npm install && npm test
cd ../frontend && npm install && npm test
```

There is **one deliberately failing test** in `backend/src/calc.test.js`
(see the `divide by zero` case) so the AI agent has something to fix.

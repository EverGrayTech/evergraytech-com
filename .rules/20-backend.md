# Backend Standards (FastAPI)
- **Environment**: Use `uv` for all dependency management (`uv run`, `uv add`).
- **Tooling**: Use **Ruff** for linting and formatting. 
- **Code Style**: Alphabetize functions and methods within classes.
- **Data**: Use **Pydantic V2** with strict type hinting.
- **Principles**: Keep the backend **stateless**. No I/O blocking in `async` routes.

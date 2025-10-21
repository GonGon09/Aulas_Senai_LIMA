% Project-specific instructions for AI coding agents

These notes give focused, actionable guidance for automated coding agents working in this repository. Keep changes minimal and follow the project's simple static-site layout and CSS patterns.

- Project layout highlights:
  - Top-level folders: `Atividades/`, `Aulas/`, `css/`, `Exercicios/`, `flexBox/`, `Imagens/`.
  - Most files are static HTML pages with matching CSS in `css/` or component folders (for example `flexBox/css/estilo.css`).

- Big-picture architecture:
  - This is a static, file-based learning site (no build system detected). HTML files live alongside their images and CSS. Modify files in-place and avoid introducing complex build tooling.
  - CSS is organized in `css/` (global styles) and subfolders such as `flexBox/css/` for feature examples.

- Conventions and patterns to follow (discoverable):
  - Keep changes minimal and non-breaking: edit HTML/CSS only unless a clear new file is required.
  - CSS examples use small, readable rules (see `flexBox/css/estilo.css`): classes like `.container`, `.item`, `.item2`, and utility classes like `.justify`.
    - Example pattern: `.container { display: flex; gap: 20px; padding: 10px; ... }` and `.item { padding: 20px; border-radius: 5px; text-align: center; }` — preserve spacing/typography rhythm when adding components.
  - Files frequently use Portuguese names (e.g., `MeuPerfil.html`, `Contato.html`) — preserve naming and accents when editing filenames.

- Developer workflows (what an agent should do):
  - No package.json, build scripts, or tests were found — treat edits as direct file edits. Validate by opening the edited HTML in a browser.
  - For preview: generate or modify HTML/CSS in-place and run a simple local server (for humans): e.g. `python -m http.server 8000` from the repo root.

- Integration and external dependencies:
  - No external services, APIs, or package managers were detected. Do not add networked integrations without explicit instruction.

- Safety rules for automated edits:
  - Do not rename or move large groups of files. Avoid changing file encodings or adding transpilation steps.
  - When editing CSS, keep specificity low and prefer adding new class names rather than changing site-wide selectors.
  - Preserve image filenames and paths; many pages reference local images in `Imagens/`.

- Helpful file references (examples):
  - `flexBox/css/estilo.css` — flex layout examples and utility classes.
  - `css/style.css`, `css/reset.css` — global styles to respect when adding new visual elements.
  - `Atividades/`, `Aulas/` — many standalone HTML examples to copy structure from.

- If you need clarification or a larger change:
  - Open a short PR with a focused description and a small, reversible change set. Keep changes under ~5 files per PR.

If anything here seems off or you'd like additional guidance (naming conventions, preferred comment style, or a sample PR template), ask and I'll iterate.

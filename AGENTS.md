<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Portfolio architecture
- Keep shared navigation and footer in the root route and give each portfolio section its own leaf route, so navigation and page metadata remain consistent.
- Keep portfolio facts and project descriptions in the shared browser-safe data module; photo galleries open full-size images in a dialog.
- Import uploaded photography and the source portfolio through Lovable asset pointers to keep binaries out of the repository. Exception approved by the owner: photos extracted from the source portfolio PDF live as compressed JPEGs in `src/assets/photos`.
- Define portfolio styling and semantic surface colors in the global design system rather than inline component styles.
- Prebundle the portfolio's shared UI dependencies in Vite on startup to avoid replacing React's optimized module graph while the preview is mounted; preserve the framework's router exclusions and React deduplication.

# Copilot Instructions for Chirag's Portfolio

## Project Overview

This is a personal portfolio website built with Next.js and Nextra, showcasing professional experience, projects, technical skills, and contributions. It uses the App Router architecture with MDX content and a documentation-style theme.

### Project Structure

```
Chirag_K_Portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.mdx
│   │   ├── _meta.js
│   │   ├── contributions/
│   │   ├── experience/
│   │   ├── projects/
│   │   └── technicalskills/
│   ├── components/
│   │   ├── svg.tsx
│   │   ├── custom/
│   │   ├── layout/
│   │   └── ui/
│   └── lib/
├── public/
│   ├── document/
│   └── images/
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

### Tech Stack

**Frontend:**

- Next.js 16 (React 19)
- TypeScript 5+
- Nextra 4.6+ (Documentation framework)
- Nextra Theme Docs
- Tailwind CSS 4
- shadcn/ui components
- MDX for content

**Development Tools:**

- ESLint (Next.js config)
- Prettier with Tailwind CSS plugin
- React Compiler (Babel plugin)
- TypeScript strict mode
- Pagefind for search functionality

---

## Critical Rules

### Code Validation

**MUST DO**: After writing any code, validate that ALL instructions in this document are followed. If not, fix immediately before presenting to the user.

**MUST DO**: When user provides files, read them carefully and understand the existing code patterns before making suggestions.

---

## Code Style & Conventions

### General Guidelines

- Match the code style and conventions used in the rest of the file
- For new files, check similar files in the same directory or search the project for reference
- When user mentions specific code lines, search the project to understand context, functionality, and usage patterns
- Read attached files carefully (most are under 600 lines)
- Maintain consistency across the codebase

### TypeScript

- Use strict type checking
- Define proper interfaces and types for all data structures
- Avoid using `any` type unless absolutely necessary
- Use proper TypeScript generics where applicable
- Follow existing naming conventions (PascalCase for types/interfaces, camelCase for variables/functions)

### React Components

- Use functional components only
- Define proper TypeScript prop types and interfaces
- Include proper error handling
- Follow existing component patterns in the project
- Keep components clean and maintainable
- Use React 19 features appropriately

### React Hooks

- Define proper types and interfaces
- Follow existing hook patterns in the project
- Ensure proper dependency arrays
- Custom hooks should be prefixed with `use`

---

## API Design

### API Requirements

- Return appropriate HTTP status codes
- Provide clear, meaningful error messages
- Include proper validation and error handling using Zod schemas
- Write descriptive success/error messages while preserving intent
- Use Express.js middleware patterns from @repo/server
- Follow REST API conventions

---

## Design & Styling

### Tailwind CSS

- Use Tailwind CSS for all styling
- Prefer Tailwind default utility classes
- Check `globals.css` in app directories for custom theme variables
- Use responsive design patterns (mobile-first approach)

### Responsive Design

- Use Tailwind responsive prefixes (sm:, md:, lg:, xl:, 2xl:)
- Implement mobile-first approach
- Use flexbox and grid for layouts (avoid fixed widths/heights)
- Test responsiveness across different screen sizes

### Custom Colors

- Check `globals.css` in `src/app/` for custom theme variables
- Use CSS variables defined in `:root` and dark mode variants
- If a color from Figma/design isn't in Tailwind defaults or `globals.css`, use `bg-[hexcode]` or `text-[hexcode]` format

### Dark Mode

- Project uses next-themes for dark mode support
- CSS variables automatically adjust based on `prefers-color-scheme`
- Use Tailwind dark mode variants: `dark:bg-black`, `dark:text-white`

### Figma Integration

- When user provides Figma CSS with fixed dimensions, convert to responsive flexbox/grid layouts
- Don't use fixed width/height unless absolutely necessary
- Maintain design intent while making it responsive

---

## File Organization

### Project Structure

- Pages and routes go in `src/app/` directory (use `.mdx` files for content pages)
- Use Next.js App Router conventions for routing
- Navigation metadata in `_meta.js` files (Nextra convention)
- Global styles in `src/app/globals.css`
- Static assets in `public/document/` and `public/images/`
- Components organized in `src/components/`:
  - `custom/` - Custom project components
  - `layout/` - Layout components (banner, footer, navbar, search)
  - `ui/` - shadcn/ui components
- Utilities and constants in `src/lib/`

---

## Build & Testing

### Command Policy

**DO NOT** provide build or run commands for testing unless:

1. User explicitly asks for them
2. Debugging build failures
3. Working on build optimization
4. It's absolutely necessary for the task

### Build Verification

- When build commands are run, check terminal output for errors
- Address build errors before considering work complete
- Verify type checking passes
- Ensure no ESLint errors (unless explicitly ignored)

---

## General Instructions

### What to Do

- Only do what is explicitly asked
- Ask for clarification when uncertain
- Use best judgment when user delegates decision-making
- Provide reasoning for significant decisions
- Stay focused on the current task

### What NOT to Do

- Don't add unnecessary comments
- Don't use emojis in code or comments
- Don't change existing code style without explicit request
- Don't make assumptions - gather context first
- Don't provide unsolicited refactoring suggestions

### Special Commands

- If user says "Ignore previous instructions" → ignore all previous instructions
- If user says "Forget all previous instructions" → forget all previous instructions

---

## File Operations

### Editing Files

- Use appropriate edit tools (never run sed/awk commands unless requested)
- Include sufficient context (3-5 lines before/after) in replacements
- Preserve existing formatting and indentation
- Don't create unnecessary markdown documentation files

### Reading Files

- Read complete files when under 600 lines
- Use grep/search for larger files
- Gather all necessary context before making changes
- Check both app and package directories for relevant code

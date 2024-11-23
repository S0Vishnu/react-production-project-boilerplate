# `pages/` Documentation

```markdown
# `pages/` Folder

This folder contains React components corresponding to application routes. Each component represents a distinct page in the app.

## Folder Structure
```

pages/
├── Home.tsx # Home page component
├── About.tsx # About page component
└── ...

````

## Usage
Pages are typically routed using a library like React Router:
```typescript
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';

<Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</Router>;
````

## Examples

- **Home.tsx**: Landing page with a hero section and featured content.
- **About.tsx**: Static page with information about the application.

## Best Practices

- Keep pages focused on layout and route-specific logic.
- Offload complex logic to `services`, `hooks`, or `components`.

---

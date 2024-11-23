# `store/` Documentation

```markdown
# `store/` Folder

This folder contains global state management logic using libraries like Redux, Zustand, or Context API.

## Folder Structure
```

store/
├── actions.ts # Action creators
├── reducers.ts # Reducers for state updates
├── selectors.ts # Selectors for extracting state
├── store.ts # Store configuration
└── ...

````

## Usage
Dispatch actions or select state as needed:
```typescript
import { useSelector, useDispatch } from 'react-redux';
import { actionA } from '../store/actions';

const Component = () => {
  const stateValue = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const handleClick = () => dispatch(actionA());
};
````

## Examples

- **Actions**: `fetchUserData` for API calls.
- **Reducers**: `userReducer` for managing user state.

## Best Practices

- Keep state normalized for scalability.
- Write unit tests for reducers and selectors.
- Use `createSlice` or similar utilities for cleaner Redux code.

---


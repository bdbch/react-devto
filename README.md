# `@d2k/react-devto`

> React hooks for Dev.to integrations

> You'll need to install `react`, `react-dom`, etc at `^16.8.4`

* [Demo](https://bdbch.github.io/react-devto/)

## Install

```sh
npm i @d2k/react-devto --save
```

# Usage

```js
import {
  useArticles,
  useFollowSuggestions,
  useTags,
  useUser
} from "@d2k/react-devto";

const MyComponent = () => {
  // useArticles(page, tag, username)
  const { articles, loading, error } = useArticles();

  // useFollowSuggestions()
  const { suggestions, loading, error } = useFollowSuggestions();

  // useTags(page)
  const { tags, loading, error } = useTags();

  // useUser(username, id)
  const { user, loading, error } = useUser("bdbch");
};
```

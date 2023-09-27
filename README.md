# Layout Styling Guide

## Getting started

### `npm run install`
This installs all the packages required to run this project.

### `npm run start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

## How to use this

Once installed and running, each section has been broken down to components. Navigate to their directory/files to view/experiment with the code.

I encourage you to experiment/break/rebuild this project. To reset, just reclone the repo.

## Note on `styled-components`

In some of these pages, you'll see usage of the **styled-components** library. It's a css-in-js library, letting you view CSS in the same place as the code, this is intended so that you don't have to switch between files to see the CSS styling.

**styled-components** has a lot more features, but for the purposes of this project, any additional knowledge of it is not required

### `styled-components` in a nutshell
```jsx
import styled from "styled-components";

const ComponentWithRedText = styled.div`
  color: red;
`;

const App = () => {
  return (
    <ComponentWithRedText>
      <p>Example text</p>    
    </ComponentWithRedText>
  )
}
 
```

### JSX + CSS equivalent

```scss
// styles.scss
.component-with-red-text {
  color: red;
}
```


```jsx
// App.jsx
import 'styles.css';

const App = () => {
  return (
    <div className="component-with-red-text">
      <p>Example text</p>
    </div>
  )
}
```

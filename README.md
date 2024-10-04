# text-compare

A simple hook to compare two texts and provide you the diff and the matching percentages

## To Use Components

```js
import 'text-compare/dist/style.css';
import { Compare } from "text-compare";

export const CompareText = () => {
  return(
    <Compare/>
  )
}
```
## Customizing the `useTextComparison` Hook
The `useTextComparison` hook now allows you to customize the colors used to highlight common, removed, and added words when comparing two texts.

```js
import { useTextComparison } from 'text-compare';

const TextDiffer = () => {
  const text1 = 'The quick brown fox jumps over the lazy dog';
  const text2 = 'The quick blue fox leaps over the happy dog';

  // Define custom colors for comparison
  const customColors = {
    commonColor: '#1E90FF',    // DodgerBlue for common words
    removedColor: '#FF6347',   // TomatoRed for removed words
    addedColor: '#32CD32',     // LimeGreen for added words
  };

  // Pass custom colors when using the hook
  const { comparisonResult, similarity } = useTextComparison(text1, text2, {
    customColors,
  });

  return (
    <>
      <div className='flex gap-1 mb-4'>{comparisonResult}</div>
      <div>Similarity: {similarity.toFixed(2)}%</div>
    </>
  );
};

export default TextDiffer;

```
### Output:

![alt text](/lib/assets/custom_color.png)

## Available Customization Options
When using the useTextComparison hook, you can pass an optional object to customize the colors:

- **commonColor** (default: "gray"): Color for common words between the two texts.
- **removedColor** (default: "red"): Color for words that are in text1 but not in text2.
- **addedColor** (default: "green"): Color for words that are in text2 but not in text1.

### Example Customization:

```js
const customColors = {
  commonColor: '#1E90FF',   // DodgerBlue for common words
  removedColor: '#FF6347',  // TomatoRed for removed words
  addedColor: '#32CD32',    // LimeGreen for added words
};
```
These options allow for more flexible styling to match the look and feel of your project.
# text-compare 📝
> A powerful React hook for comparing text with visual diffs and similarity scores
> 
**text-compare** is a lightweight yet powerful React hook that helps you compare two texts and visualize their differences. It provides customizable highlighting for added, removed, and common words, along with a similarity percentage score.


<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<a href="https://github.com/CreoWis/text-compare/fork" target="blank">
<img src="https://img.shields.io/github/forks/CreoWis/text-compare?style=flat-square" alt="text-compare forks"/>
</a>
<a href="https://github.com/CreoWis/text-compare/stargazers" target="blank">
<img src="https://img.shields.io/github/stars/CreoWis/text-compare?style=flat-square" alt="text-compare stars"/>
</a>
<a href="https://github.com/CreoWis/text-compare/issues" target="blank">
<img src="https://img.shields.io/github/issues/CreoWis/text-compare?style=flat-square" alt="text-compare issues"/>
</a>
<a href="https://github.com/CreoWis/text-compare/pulls" target="blank">
<img src="https://img.shields.io/github/issues-pr/CreoWis/text-compare?style=flat-square" alt="text-compare pull-requests"/>
</a>

## Features ✨

- ⚡ Lightweight and performant
- 🎨 Customizable highlighting colors
- 📊 Similarity percentage calculation
- 🔧 Easy to integrate

## Basic Usage 🚀

Here's a quick example to get you started:

### To Use Components
```js
import 'text-compare/dist/style.css';
import { Compare } from "text-compare";

export const CompareText = () => {
  return(
    <Compare/>
  )
}
```
### To use `useTextComparison` hook
```js
import { useTextComparison } from 'text-compare';

const TextDiffer = () => {
  const text1 = 'The quick brown fox jumps over the lazy dog';
  const text2 = 'The quick blue fox leaps over the happy dog';

  const { comparisonResult, similarity } = useTextComparison(text1, text2);

  return (
    <>
      <div className="flex gap-1 mb-4">{comparisonResult}</div>
      <div>Similarity: {similarity.toFixed(2)}%</div>
    </>
  );
};
```

## Advanced Usage 🔧

### Customizing Colors

The `useTextComparison` hook accepts custom colors for highlighting differences:

```jsx
const customColors = {
  commonColor: '#1E90FF',    // DodgerBlue for common words
  removedColor: '#FF6347',   // TomatoRed for removed words
  addedColor: '#32CD32',     // LimeGreen for added words
};

const { comparisonResult, similarity } = useTextComparison(text1, text2, {
  customColors,
});
```

### Available Options

| Option | Default | Description |
|--------|---------|-------------|
| `commonColor` | "gray" | Color for words that appear in both texts |
| `removedColor` | "red" | Color for words that only appear in the first text |
| `addedColor` | "green" | Color for words that only appear in the second text |

## Contributing 🤝

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/CreoWis/text-compare/issues).

1. Fork the project
2. Create your feature branch (`git checkout -b issue-(issue number)-amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add some amazing feature'`)
4. Push to the branch (`git push issue-(issue number)-amazing-feature`)
5. Open a Pull Request

For detailed guidelines, please see our [Contributing Guide](CONTRIBUTING.md).

## 🙏 Support Us

This is an OSS project by team [CreoWis](https://www.creowis.com/). We need all the support we can get. Please give this project a ⭐️ to encourage and show that you liked it.

If you found the project helpful, consider supporting us with a coffee.

<a href="https://www.buymeacoffee.com/creowis">
    <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="50px">
</a>

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START -->
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/atapas">
        <img src="https://github.com/atapas.png" width="100px;" alt="atapas"/>
        <br />
        <sub><b>Tapas Adhikary</b></sub>
      </a>
      <br />
      <a href="#" title="Code">💻</a>
    </td>
   <td align="center">
      <a href="https://github.com/atapas">
        <img src="https://github.com/chhakuli123.png" width="100px;" alt="atapas"/>
        <br />
        <sub><b>Chhakuli Zingare</b></sub>
      </a>
      <br />
      <a href="#" title="Code">💻</a>
    </td>  
  </tr>
</table>
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://allcontributors.org) specification.

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

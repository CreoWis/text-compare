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

## 🛠️ Advanced Usage 

### Customization Options

The `useTextComparison` hook accepts an options object for customization:

```jsx
const options = {
  customColors: {
    commonColor: '#1E90FF',    // DodgerBlue for common words
    removedColor: '#FF6347',   // TomatoRed for removed words
    addedColor: '#32CD32',     // LimeGreen for added words
  }
};

const { comparisonResult, similarity } = useTextComparison(text1, text2, options);
```

### Available Options

| Option | Type | Description |
|--------|---------|-------------|
| `customColors` | object | An object containing color configurations for text highlighting. Properties: `commonColor` (for matching words), `removedColor` (for removed words), `addedColor` (for added words) |

## 🚀 Getting Started Guide

Follow the steps below to set up and work with the `text-compare` project.

### 1. Clone the Repository
  
First, clone the repository to your local machine and navigate to the project directory:

```bash
git clone https://github.com/CreoWis/text-compare.git
cd text-compare
```
### 2. Install pnpm (if you don't have it installed):

If you don't have pnpm installed, you can install it globally using the following command:

```bash
npm install -g pnpm
```
### 3. Install Dependencies

Navigate to the project directory and install the dependencies using:
```bash
pnpm install
```

### 4. Testing New Features Locally
If you have added new features and want to test them locally after making changes, follow these steps

a. **Build the Project**: Compile the latest changes:
```bash
npm run build
```

b. **Create a Tarball**: Generate a `.tgz` file for the updated package:
```bash
npm pack
```
c. **Copy the Tarball**: Copy the generated `.tgz` file from the project root directory.

d. **Add the `.tgz` File to Your Frontend Project**: Place the .tgz file in the root directory of your frontend project.

e. **Update package.json**: In the dependencies section of your `package.json` file, add a reference to the `.tgz file`.
For example:
```js
"dependencies": {
  "next": "^14.1.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "text-compare": "file:text-compare-0.0.1.tgz"
}
```
f. **Install Dependencies in the Frontend Project**:Run the following command to install the updated package:

```bash
npm install
```
g. **Start the Frontend Project**: Finally, start your development server:

```bash
npm run dev
# or
npm start
```

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

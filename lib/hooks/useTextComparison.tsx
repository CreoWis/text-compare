interface ComparisonColors {
  commonColor?: string;
  removedColor?: string;
  addedColor?: string;
}

interface ComparisonOptions {
  customColors?: ComparisonColors;
}

export const useTextComparison = (
  text1: string = '',
  text2: string = '',
  options: ComparisonOptions = {}
) => {
  const {
    customColors = {
      commonColor: 'gray',
      removedColor: 'red',
      addedColor: 'green',
    },
  } = options;

  const compareTexts = (t1: string, t2: string) => {
    // Check for undefined or null values and handle them
    if (!t1 || !t2) {
      return {
        comparisonResult: [],
        similarity: 0,
      };
    }

    // regex to split by whitespace (including multiple spaces)
    const words1 = t1.split(/\s+/);
    const words2 = t2.split(/\s+/);

    const result: JSX.Element[] = [];
    let matches = 0;
    let i = 0;
    let j = 0;

    while (i < words1.length || j < words2.length) {
      const word1 = words1[i];
      const word2 = words2[j];

      if (word1 === word2) {
        // Words are the same, mark them as common (custom or default color)
        result.push(
            <span key={`common-${i}`} style={{ color: customColors.commonColor }}>
              {word1}
            </span>
          );
        matches++; // Count this as a match for similarity
        i++;
        j++;
      } else {
        // Word in text1 is not in text2, mark as removed (custom or default color)
        if (i < words1.length) {
          result.push(
            <span key={`removed-${i}`} style={{ color: customColors.removedColor }}>
              {word1}
            </span>
          );
          i++;
        }

        // Word in text2 is not in text1, mark as added (custom or default color)
        if (j < words2.length) {
          result.push(
            <span key={`added-${j}`} style={{ color: customColors.addedColor }}>
              {word2}
            </span>
          );
          j++;
        }
      }
    }
    
    // Return comparison result as well as similarity percentage
    const totalWords = Math.max(words1.length, words2.length);
    const similarity = (matches / totalWords) * 100; // Similarity percentage

    return { comparisonResult: result, similarity };
  };

  return compareTexts(text1, text2);
};
class Formatter {
  // Static method to capitalize the first letter of a string
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Static method to sanitize a string by removing unwanted characters
  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9-' ]/g, '');
  }

  // Static method to titleize a string
  static titleize(string) {
    const exceptions = [
      'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'
    ];
    const words = string.split(' ');

    return words
      .map((word, index) => {
        if (index === 0 || !exceptions.includes(word.toLowerCase())) {
          return Formatter.capitalize(word);
        } else {
          return word;
        }
      })
      .join(' ');
  }
}

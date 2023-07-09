export function setFirstLetterUpperCase(string) {
  if (string !== null) {
    return string
      ?.toLowerCase()
      .replace(/(^\w{1})|(\s{1}\w{1})/g, (match) => match.toUpperCase());
  }
}

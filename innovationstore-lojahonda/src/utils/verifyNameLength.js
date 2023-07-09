export function verifyNameLength(name) {
  if (name.length > 20) {
    return name.slice(0, 20) + "...";
  }

  return name;
}

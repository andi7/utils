const formattedPath = path =>
  path
    .replace(/\[["'`]([\w\d]+)["'`]\]/g, "$1")
    .split(/(\[\d+\])/)
    .join(".")
    .replace(/\.+/g, ".");

const matchedKey = key => {
  const match = key.match(/\[(\d+)\]/);

  if (match) {
    key = parseInt(match[1]);
  }

  return { match, value: key };
};

export { formattedPath, matchedKey };

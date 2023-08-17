function countChar(str, char) {
  // regex is supposedly faster
  // return str.match(new RegExp(char, "g"))?.length ?? 0;

  return str.split("").filter((c) => c === char).length;
}

function isBeautiful(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let currentCount = 0;

  return alphabet.every((char) => {
    if (char === "a") {
      currentCount = countChar(str, char);
      return true;
    }

    const charCount = countChar(str, char);
    if (charCount <= currentCount) {
      currentCount = charCount;
      return true;
    }

    return false;
  });
}

module.exports = {
  isBeautiful,
};

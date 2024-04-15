let texts = [];

// Preload arabic.txt file
let arabicTexts = [];
fetch("./arabic.txt")
  .then((response) => response.text())
  .then((text) => {
    const lines = text.split("\n");
    lines.forEach((line) => {
      arabicTexts.push(line);
    });
  })
  .catch((error) => {
    console.error("Error loading arabic.txt:", error);
  });

texts.push(arabicTexts);

// Preload chinese.txt file
let chineseTexts = [];
fetch("./chinese.txt")
  .then((response) => response.text())
  .then((text) => {
    const lines = text.split("\n");
    lines.forEach((line) => {
      chineseTexts.push(line);
    });
  })
  .catch((error) => {
    console.error("Error loading arabic.txt:", error);
  });
texts.push(chineseTexts);

// Preload english.txt file
let englishTexts = [];
fetch("./english.txt")
  .then((response) => response.text())
  .then((text) => {
    const lines = text.split("\n");
    lines.forEach((line) => {
      englishTexts.push(line);
    });
  })
  .catch((error) => {
    console.error("Error loading arabic.txt:", error);
  });
texts.push(englishTexts);

// Preload filipino.txt file
let filipinoTexts = [];
fetch("./filipino.txt")
  .then((response) => response.text())
  .then((text) => {
    const lines = text.split("\n");
    lines.forEach((line) => {
      filipinoTexts.push(line);
    });
  })
  .catch((error) => {
    console.error("Error loading arabic.txt:", error);
  });
texts.push(filipinoTexts);

// Preload french.txt file
let frenchTexts = [];
fetch("./french.txt")
  .then((response) => response.text())
  .then((text) => {
    const lines = text.split("\n");
    lines.forEach((line) => {
      frenchTexts.push(line);
    });
  })
  .catch((error) => {
    console.error("Error loading arabic.txt:", error);
  });
texts.push(frenchTexts);

// Preload german.txt file
let germanTexts = [];
fetch("./german.txt")
  .then((response) => response.text())
  .then((text) => {
    const lines = text.split("\n");
    lines.forEach((line) => {
      germanTexts.push(line);
    });
  })
  .catch((error) => {
    console.error("Error loading arabic.txt:", error);
  });
texts.push(germanTexts);

// Preload greek.txt file
let greekTexts = [];
fetch("./greek.txt")
  .then((response) => response.text())
  .then((text) => {
    const lines = text.split("\n");
    lines.forEach((line) => {
      greekTexts.push(line);
    });
  })
  .catch((error) => {
    console.error("Error loading arabic.txt:", error);
  });
texts.push(greekTexts);

// Preload hindi.txt file
let hindiTexts = [];
fetch("./hindi.txt")
  .then((response) => response.text())
  .then((text) => {
    const lines = text.split("\n");
    lines.forEach((line) => {
      hindiTexts.push(line);
    });
  })
  .catch((error) => {
    console.error("Error loading arabic.txt:", error);
  });
texts.push(hindiTexts);

// Preload italian.txt file
let italianTexts = [];
fetch("./italian.txt")
  .then((response) => response.text())
  .then((text) => {
    const lines = text.split("\n");
    lines.forEach((line) => {
      italianTexts.push(line);
    });
  })
  .catch((error) => {
    console.error("Error loading arabic.txt:", error);
  });
texts.push(italianTexts);

// Preload korean.txt file
let koreanTexts = [];
fetch("./korean.txt")
  .then((response) => response.text())
  .then((text) => {
    const lines = text.split("\n");
    lines.forEach((line) => {
      koreanTexts.push(line);
    });
  })
  .catch((error) => {
    console.error("Error loading arabic.txt:", error);
  });
texts.push(koreanTexts);

// Russian
let russianTexts = [];
fetch("./russian.txt")
  .then((response) => response.text())
  .then((text) => {
    const lines = text.split("\n");
    lines.forEach((line) => {
      russianTexts.push(line);
    });
  })
  .catch((error) => {
    console.error("Error loading arabic.txt:", error);
  });
texts.push(russianTexts);

// Spanish
let spanishTexts = [];
fetch("./spanish.txt")
  .then((response) => response.text())
  .then((text) => {
    const lines = text.split("\n");
    lines.forEach((line) => {
      spanishTexts.push(line);
    });
  })
  .catch((error) => {
    console.error("Error loading arabic.txt:", error);
  });
texts.push(spanishTexts);

// Ukrainian
let ukrainianTexts = [];
fetch("./ukrainian.txt")
  .then((response) => response.text())
  .then((text) => {
    const lines = text.split("\n");
    lines.forEach((line) => {
      ukrainianTexts.push(line);
    });
  })
  .catch((error) => {
    console.error("Error loading arabic.txt:", error);
  });
texts.push(ukrainianTexts);

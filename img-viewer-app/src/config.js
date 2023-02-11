export const UNSPLASH_BASE_URL = "https://api.unsplash.com";

const UNSPLASH_ACCESS_KEYS = [
  "FF90K3rQH2HBonTnPDzggYeEo6XN5vjaAoI-b9I-xDY",
  "KfeQondG2mzJ--nJLxxr3NXdSst6h1TExoAIunkuP-E",
  "ms6131ZTrQo6K6HoQ0Q1fxb2guuY2hKNPItlc4QuAxk",
  "ZBlHjiRu8WBMhEDXMIm5qLYiP6djVOcfdrWcs6u_fzQ",
];

const index = Math.floor(Math.random() * UNSPLASH_ACCESS_KEYS.length);

const UNSPLASH_ACCESS_KEY = UNSPLASH_ACCESS_KEYS[index]

export const UNSPLASH_COMMON_HEADERS = {
  Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`
}


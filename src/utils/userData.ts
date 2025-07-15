let isNode = typeof window === "undefined" || !!(window.process && window.process.versions && window.process.versions.node);

if (!isNode) {
  console.warn("⚠️ userData.ts wordt uitgevoerd in de browser. Bestandstoegang is uitgeschakeld.");
}

export function getUserData() {
  if (!isNode) return { favorites: [] };
  const fs = require("fs");
  const path = require("path");

  const userDataPath = path.join(__dirname, "..", "data", "UserData.json");

  try {
    const data = fs.readFileSync(userDataPath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    return { favorites: [] };
  }
}

export function saveUserData(data: any) {
  if (!isNode) return;
  const fs = require("fs");
  const path = require("path");

  const userDataPath = path.join(__dirname, "..", "data", "UserData.json");

  fs.writeFileSync(userDataPath, JSON.stringify(data, null, 2));
}

export function toggleFavorite(elementSymbol: string) {
  if (!isNode) return false;

  const data = getUserData();
  const favorites = new Set(data.favorites);

  if (favorites.has(elementSymbol)) {
    favorites.delete(elementSymbol);
  } else {
    favorites.add(elementSymbol);
  }

  saveUserData({ favorites: Array.from(favorites) });
  return true;
}

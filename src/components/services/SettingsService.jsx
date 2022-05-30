const mode = "mode";
let language = "language";

export function getStorageMode() {
  if (!get(mode)) {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      set(mode, "dark");
    } else {
      set(mode, "light");
    }
  }

  return get(mode);
}

export function setStorageMode(val) {
  set(mode, val);
}

export function getLanguage() {
  if (!get("i18nextLng")) {
    language = navigator.language || navigator.userLanguage;
  } else {
    language = get("i18nextLng");
  }

  return language;
}

const get = (key) => {
  return localStorage.getItem(key);
};

const set = (key, value) => {
  return localStorage.setItem(key, value);
};

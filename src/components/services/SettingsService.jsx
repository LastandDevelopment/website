const mode = "mode";

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

const get = (key) => {
  return localStorage.getItem(key);
};

const set = (key, value) => {
  return localStorage.setItem(key, value);
};

// manage localStorage

const StorageKey = 'fake.me';

function loadState() {
  try {
    const serialized = localStorage.getItem(StorageKey);
    if (!serialized) return undefined;
    return JSON.parse(serialized);
  } catch (err) {
    return undefined;
  }
}

function saveState(state) {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem(StorageKey, serialized);
  } catch (err) {
    // ignore
  }
}

function clearState() {
  try {
    localStorage.removeItem(StorageKey);
  } catch (err) {
    // ignore
  }
}

export { loadState, saveState, clearState };

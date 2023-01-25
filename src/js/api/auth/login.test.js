import { login } from "./login";

// localstorage mock

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();

/**
 * A function that tests if function stores a token when user logs in with valid credentials
 */
describe("login", () => {
  it("stores a token in localstorage when provided with valid login credentials", async () => {
    localStorage.clear();
    await login("testuser@noroff.no", "");
    const token = localStorage.getItem("token");
    expect(token).isTruthy();
  });
});

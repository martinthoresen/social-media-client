import { logout } from "./logout";

// localstorage mock

class LocalStorageMock {
  constructor() {
    this.store = {
      token: "243245rdsccwef23rwr235r234523rWqwrf324",
    };
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

describe("logout", () => {
  it("clears token from localstorage", () => {
    logout();
    expect(localStorage.getItem("token")).toBeNull();
  });
});

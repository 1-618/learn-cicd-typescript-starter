import { describe, expect, it } from "vitest";
import { getAPIKey } from "../api/auth.js"

describe("getAPIKey", () => {
  it("returns the API key from a valid ApiKey authorization header", () => {
    const headers = {
      authorization: "ApiKey abc123",
    };

    expect(getAPIKey(headers)).toBe("abc123");
  });

  it("returns null when authorization is missing", () => {
    const headers = {};

    expect(getAPIKey(headers)).toBeNull();
  });

  it("returns null when authorization does not use ApiKey", () => {
    const headers = {
      authorization: "Bearer abc123",
    };

    expect(getAPIKey(headers)).toBeNull();
  });

  it("returns null when authorization has no key", () => {
    const headers = {
      authorization: "ApiKey",
    };

    expect(getAPIKey(headers)).toBeNull();
  });

  it("returns null when authorization is empty", () => {
    const headers = {
      authorization: "",
    };

    expect(getAPIKey(headers)).toBeNull();
  });
});

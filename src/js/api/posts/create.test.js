import { createPost } from "./create";

const mockPost = {
  title: "mocktitle",
  body: "mockbody",
  media: "",
  tags: ["tag1", "tag2", "tag3"],
};

// A constant returning a mock resolved value from a fetch

const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue(mockPost),
});

global.fetch = mockFetchSuccess;

/**
 * A function that tests if function returns a valid item with a valid input
 */
describe("create post", () => {
  it("returns a valid item with a valid input", async () => {
    const postToBeMatched = await createPost("title", "body", "", ["tag1", "tag2", "tag3"]);
    expect(postToBeMatched).toMatchObject(mockPost);
  });
});

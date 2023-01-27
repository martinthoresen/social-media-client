import { createPost } from "./create";

const mockPost = {
  title: "mocktitle",
  body: "mockbody",
  media: "",
  tags: ["tag1", "tag2", "tag3"],
};

const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue(mockPost),
});

global.fetch = mockFetchSuccess;

describe("create post", () => {
  it("returns a valid item with a valid input", async () => {
    const postToBeMatched = await createPost("title", "body", "", ["tag1", "tag2", "tag3"]);
    expect(postToBeMatched).toMatchObject(mockPost);
  });
});

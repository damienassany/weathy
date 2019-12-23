import initStoryshots from "@storybook/addon-storyshots";

jest.mock("moment", () => {
  const date = () => ({
    format: jest.fn(() => "22 May 17:00")
  });

  date.now = jest.fn(() => 157809473);

  return date;
});

initStoryshots({});
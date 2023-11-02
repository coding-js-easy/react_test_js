import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import { ExpandableWindow } from "../ExpandableWindow";
import "@testing-library/jest-dom";

test("render Expandable Window with Title & Children", () => {
  render(
    <ExpandableWindow title="Expandable Window">
      <p>Children Paragraph</p>
    </ExpandableWindow>
  );

  const titleElement = screen.getByText("Expandable Window");
  const childrenElement = screen.getByText("Children Paragraph");

  expect(titleElement).toBeInTheDocument();
  expect(childrenElement).toBeInTheDocument();
});

test("open and close modal on icon clicked", async () => {
  const dummy_text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur totam expedita non nam, pariatur porro! Expedita rerum excepturi sint in.";

  const WindowElement = render(
    <ExpandableWindow title="Expandable Window">
      <p className="test-paragraph">{dummy_text}</p>
    </ExpandableWindow>
  );

  const expandIcon = WindowElement.container.querySelector("svg[name='expand']");
  expect(expandIcon).not.toBeNull();

  fireEvent.click(expandIcon!);

  await waitFor(() => {
    const removedExpandIcon = WindowElement.container.querySelector("svg[name='expand']");
    expect(removedExpandIcon).toBeNull();
  });

  const dialog = document.querySelector('section[role="dialog"]');
  const collapseIcon = dialog!.querySelector("svg[name='collapse']");
  const dialogElement = dialog?.querySelector("p[class='test-paragraph']");

  expect(dialog).toBeInTheDocument();
  expect(collapseIcon).toBeInTheDocument();
  expect(dialogElement).toBeInTheDocument();
  expect(dialogElement).toHaveTextContent(dummy_text);

  fireEvent.click(collapseIcon!);

  await waitFor(() => {
    expect(dialog).not.toBeInTheDocument();
    expect(collapseIcon).not.toBeInTheDocument();
    expect(dialogElement).not.toBeInTheDocument();
  });
});

test("dialog modal should contain children element", async () => {
  const dummy_text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur totam expedita non nam, pariatur porro! Expedita rerum excepturi sint in.";

  const childrenElement = <p className="test-paragraph">{dummy_text}</p>;

  const WindowElement = render(
    <ExpandableWindow title="Expandable Window">{childrenElement}</ExpandableWindow>
  );

  const expandIcon = WindowElement.container.querySelector("svg[name='expand']");
  fireEvent.click(expandIcon!);

  await waitFor(() => {
    const removedExpandIcon = WindowElement.container.querySelector("svg[name='expand']");
    expect(removedExpandIcon).toBeNull();
  });

  const dialog = document.querySelector('section[role="dialog"]');

  const childParagraph = dialog!.querySelector(".test-paragraph");
  expect(childParagraph).toBeInTheDocument();
  expect(childParagraph!.textContent).toBe(dummy_text);
});

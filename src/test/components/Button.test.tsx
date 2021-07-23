/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "../../main/components/button/Button";
import { expect } from "chai";

describe("<Button />", () => {
  describe("init", () => {
    it("should render a span with the given title", () => {
      const screen = render(<Button onClick={() => {}} title="Test" />);
      expect(screen.container.firstElementChild.tagName).to.be.equal("SPAN");
      expect(screen.container.firstElementChild.textContent).to.be.equal(
        "Test"
      );
    });
  });
  describe("callback", () => {
    it("clicking should trigger given callback", () => {
      let callbackCalled = false;
      const callback = () => {
        callbackCalled = true;
      };
      const screen = render(<Button onClick={callback} title="Test" />);
      userEvent.click(screen.container.firstElementChild);

      expect(callbackCalled).to.be.true;
    });
  });
});

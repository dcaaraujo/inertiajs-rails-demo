import { expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import Welcome from "../../../app/frontend/pages/Welcome.vue";

const expectedTitle = "Welcome team! 👋";
const expectedLoginPath = "/login";

test("has title", () => {
  const wrapper = mount(Welcome, {
    props: {
      title: expectedTitle,
      loginPath: expectedLoginPath,
    },
  });
  expect(wrapper.text()).toContain(expectedTitle);
});

test("contains a login button", () => {
  const wrapper = mount(Welcome, {
    props: {
      title: expectedTitle,
      loginPath: expectedLoginPath,
    },
  });
  const loginButton = wrapper.get("#login-button");
  expect(loginButton.element.href).toContain(expectedLoginPath);
});

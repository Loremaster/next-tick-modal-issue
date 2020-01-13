import { mount, createLocalVue } from "@vue/test-utils";
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import Buttons from "@/components/Buttons.vue";
import Component from "@/components/ComposeButton.vue";

const localVue = createLocalVue();

localVue.use(BootstrapVue);

describe("ComposeButton.vue", () => {
  const setup = async ({ props = {}, methods = {} } = {}) => {
    const wrapper = mount(Component, {
      localVue,
      stubs: ["buttons"],
    });

    wrapper.find({ ref: "modal" }).setProps({ static: true }); // To be able to show modal html
    await Vue.nextTick();

    return { wrapper };
  };

  it("hides modal on @error", async () => {
    const { wrapper } = await setup();
    const buttons = wrapper.find(Buttons);

    buttons.vm.$emit("upload");
    await wrapper.vm.$nextTick() // wait for modal to show
    buttons.vm.$emit("error");
    await wrapper.vm.$nextTick() // wait for modal to hide

    expect(wrapper.find(".modal").isVisible()).toBeFalsy();
  });
});

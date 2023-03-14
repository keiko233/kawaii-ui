import { defineComponent, App, PropType, SetupContext } from 'vue';
import './index.less';

const ButtonProps = {
  type: {
    type: String as PropType<string>,
    default: 'default'
  }
};

const KButton = defineComponent({
  name: 'KButton',
  props: ButtonProps,
  setup(props, { slots }: SetupContext) {
    return () => (
      <button class="box">
        {slots.default && slots.default()}
      </button>
    );
  }
});

KButton.install = function (app: App) {
  app.component(KButton.name, KButton);
  return app;
};

export default KButton;
import { defineComponent, App, PropType, SetupContext } from 'vue';
import classNames from '../../utils/classNames';
import './index.less';

const buttonTypes = [
  'default',
  'primary',
  'success',
  'warning',
  'info',
  'danger',
  'text'
] as const

const buttonSizes = [
  'md',
  'lg',
  'sm'
] as const

const ButtonProps = {
  type: {
    type: String as PropType<string>,
    values: buttonTypes,
    default: 'default'
  },
  size: {
    type: String as PropType<string>,
    values: buttonSizes,
    default: 'md'
  }
};

const KButton = defineComponent({
  name: 'KButton',
  props: ButtonProps,
  setup(props, { slots }: SetupContext) {
    const classString = classNames(
      `k-button-type-${props.type}`,
      `k-button-size-${props.size}`
    );
    return () => (
      <button class={classString}>
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
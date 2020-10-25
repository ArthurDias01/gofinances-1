import { CSSProperties } from 'styled-components';
import { shade, tint } from 'polished';
import Theme from '../styles/themes/theme';

export default function getCustomSelectOptions(theme: Theme): any {
  return {
    input: (provided: CSSProperties) => ({
      ...provided,
      color: theme.colors.primaryText,
    }),
    control: (provided: CSSProperties) => {
      return {
        ...provided,
        height: 60,
        borderRadius: 10,
        backgroundColor:
          theme.title === 'light'
            ? tint(0.95, theme.colors.defaultText)
            : shade(0.25, theme.colors.default),
        border: 'none',
        boxShadow: 'none',
        borderColor: theme.colors.default,
      };
    },
    singleValue: (provided: CSSProperties) => ({
      ...provided,
      color: theme.colors.primaryText,
    }),
    menu: (provided: CSSProperties) => ({
      ...provided,
      backgroundColor:
        theme.title === 'light'
          ? tint(0.95, theme.colors.defaultText)
          : shade(0.25, theme.colors.default),
    }),
  };
}

import { ThemeProvider } from 'styled-components';
import Button from '../../components/Button/Buttons';

const theme = {
  primary: 'black',
  secondary: 'green',
  alert: 'red',
  font: 'san-serif',
};

export default function test() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Button color='primary'>Button Color</Button>
        <Button color='secondary'>Button Color</Button>
        <Button label='alert'>Button Label</Button>
      </div>
    </ThemeProvider>
  );
}

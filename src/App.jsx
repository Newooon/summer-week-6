import { ThemeProvider } from 'styled-components';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const theme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    background: '#f8f9fa',
    text: '#000',
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '12px',
    medium: '16px',
    large: '18px',
  },
};

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.background};
`;

const Layout = () => {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;

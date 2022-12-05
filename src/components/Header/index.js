import React from 'react';
import { useHistory } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme';

import { Container } from './styles';

function Header() {
  const { theme, handleToggleTheme } = useTheme()
  const history = useHistory()

  function handleNavigate() {
    history.push('/')
  }

  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button
        type="button"
        onClick={handleToggleTheme}
      >
        {theme === 'dark' ? '🌞' : '🌚'}
      </button>
      <button style={{ color: '#fff' }} onClick={handleNavigate}>Voltar para a home</button>
    </Container>
  );
}

export default Header

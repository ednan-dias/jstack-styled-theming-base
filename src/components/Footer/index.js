import React from 'react'
import { useTheme } from '../../hooks/useTheme';

import { Container } from './styles';

export default function Footer() {
  const { theme, handleToggleTheme } = useTheme()

  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button type="button" onClick={handleToggleTheme}>
        {theme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
}
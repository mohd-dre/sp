/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import useStyledTheme from '../../hooks/useStyledTheme';
import useCursorStyle from '../../hooks/useCursorStyle';
import { Container } from './styles';

const SiteOfTheDay = () => {
  const theme = useStyledTheme();
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  return (
    <Container onMouseEnter={addCursorBorder} onMouseLeave={removeCursorBorder}>
      
    </Container>
  );
};

export default SiteOfTheDay;

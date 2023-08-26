import React from 'react';
import useCursorStyle from '../../../hooks/useCursorStyle';
import AnimateOnScreen from '../../AnimateOnScreen';
import SocialMedia from '../../SocialMedia';
import { ContactSection } from './styles';

const Contact = () => {
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  return (
    <AnimateOnScreen>
      <ContactSection>
        <div className="column">
          <a
            className="contact-text"
            href="tel:+255.624.001.234"
            onMouseEnter={addCursorBorder}
            onMouseLeave={removeCursorBorder}
          >
            +255.624.001.234
          </a>
          <br />
          <a
            className="contact-text"
            href="mailto:hello@sp.co.tz"
            onMouseEnter={addCursorBorder}
            onMouseLeave={removeCursorBorder}
          >
            hello@sp.co.tz
          </a>
        </div>
        <address className="column contact-text">
          Dar Es Salaam <br /> Tanzania
        </address>
        <SocialMedia className="column" />
      </ContactSection>
    </AnimateOnScreen>
  );
};

export default React.memo(Contact);

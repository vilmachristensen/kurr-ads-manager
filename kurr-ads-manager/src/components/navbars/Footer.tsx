
import React from 'react';
import styled from 'styled-components';
import Colors from '../../styles/Colors';
import { Default_bold } from '../../styles/Text';

const Footer: React.FC = () => {
  return (
    <FooterNav>
      <Line />
      <FooterContent>
        <Default_bold style={{ color: Colors.kurr_black, fontSize: '14px' }}>KURR AB ®</Default_bold>
        <img
          src={'https://kurr.co/static/media/pasta.ed3cedff6f23e9a7935fba8d56ee1526.svg'}
          alt="pasta"
        />
      </FooterContent>
    </FooterNav>
  );
};

const FooterNav = styled.div`
  height: 60px;
  width: calc(100vw - 2rem);
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
`;

const Line = styled.div`
  align-self: center;
  background-color: ${Colors.grey_45};
  height: 0.33px;
  width: 100%;
`;

export default Footer;
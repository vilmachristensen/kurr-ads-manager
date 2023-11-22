import styled from 'styled-components';
import colors from './Colors';
import "@fontsource/roboto";
import "@fontsource/roboto/400.css"; 
import "@fontsource/roboto/400-italic.css"; 

  const Header = styled.text`
    color: ${colors.kurr_black};
    font-family: 'Roboto';
    font-size: 34px;
    line-space: 24px;
  `;

  const Default = styled.text`
    color: ${colors.kurr_black};
    font-family: 'Roboto';
    font-size: 16px;
    line-space: 24px;
  `;

  const Default_discrete = styled.text`
    color: ${colors.kurr_black};
    font-family: 'Roboto';
    font-size: 15px;
    line-space: 24px;
  `;

  const Default_bold = styled.text`
    color: ${colors.kurr_black};
    font-family: 'Roboto';
    font-size: 16px;
    line-space: 24px;
  `;

  const Default_medium = styled.text`
    color: ${colors.kurr_black};
    font-family: 'Roboto';
    font-size: 16px;
    line-space: 24px;
  `;

  const Mini_text = styled.text`
    color: ${colors.kurr_black};
    font-family: 'Roboto';
    font-size: 12px;
    line-space: 24px;
  `;

  const Menu = styled.text`
    color: ${colors.kurr_black};
    font-family: 'Roboto';
    font-size: 14px;
    line-space: 24px;
  `;

  const Header_small = styled.text`
    color: ${colors.kurr_black};
    font-family: 'Roboto';
    font-size: 26px;
    line-space: 24px;
  `;

  const Header_mini = styled.text`
    color: ${colors.kurr_black};
    font-family: 'Roboto';
    font-size: 20px;
    line-space: 18px;
  `;

  const Tertiary_text = styled.text`
    color: ${colors.kurr_black};
    font-family: 'Roboto';
    font-size: 13px;
    line-space: 24px;
    font-style: italic;
    font-weight: 300;
  `;

export {Header,
    Default,
    Default_bold,
    Default_discrete,
    Default_medium,
    Mini_text,
    Menu,
    Header_small,
    Header_mini,
    Tertiary_text};

import styled from 'styled-components';

export const Container = styled.div`
  transition: transform cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.5s;
  transform: translateX(-${props => props.yAxis}%);
  overflow: hidden;
`;
export const Slider = styled.div`
  display: flex;
  width: 100%;
  transition: transform cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.5s;
  transform: translateX(-${props => props.xAxis}%);
`;

import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import BackDrop from './BackDrop/BackDrop';
const WrappedModal = styled.div`
 position: fixed;
 top: 50%;
 left: 50%;
 transform: ${({opened}) =>
  opened ? 'translate(-50%, -50%)' : 'translate(-50%, -150%)'};
 display: flex;
 flex-direction: column;
 align-items: center;
 z-index: 150;
 justify-content: center;
 opacity: ${({opened}) => (opened ? '1' : '0')};
 visibility: ${({opened}) => (opened ? 'visible' : 'hidden')};
 width: 100%;
 max-width: 50rem;
 box-shadow: 0 0.5rem 3.5em var(--shadow);
 border-radius: 1rem;
 background-color: ${({color}) => (color ? color : 'var(--color-mainLighter)')};
 transition: all 0.1s;
`;

const InsideWrapper = styled.div`
 position: relative;
 width: 100%;
 display: flex;
 justify-content: center;
 flex-direction: column;
 align-items: center;
 padding: 4rem 3rem;
`;

const Modal = React.memo(
 ({opened, close, color, children}) => {
  console.log('rendered');
  return ReactDOM.createPortal(
   <Fragment>
    <BackDrop close={close} opened={opened} />
    <WrappedModal opened={opened} color={color}>
     <InsideWrapper>{children}</InsideWrapper>
    </WrappedModal>
   </Fragment>,
   document.getElementById('root-modal')
  );
 },
 (prevProps, nextProps) => {
  return prevProps.opened === nextProps.opened; //zwraca true nie ma update
 }
);

export default Modal;

import { styled } from '@stitches/react';

const LoaderContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  background:'White'
});

const Loader = styled('div', {
  border: '4px solid #f3f3f3',
  borderTop: '4px solid #3498db',
  borderRadius: '50%',
  width: '50px',
  height: '50px',
  animation: 'spin 1s linear infinite',
  '@keyframes spin': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
});

export default function LoaderComponent (){
  return (
    <LoaderContainer>
      <Loader />
    </LoaderContainer>
  );
};

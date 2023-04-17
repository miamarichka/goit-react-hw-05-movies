import styled from 'styled-components';

const ErrorPage = styled.div`
background-image: url('https://thumbs.dreamstime.com/b/website-error-page-not-found-vector-artwork-depicts-funny-humorous-scenario-human-stick-figure-http-request-85523047.jpg)
width: 100vh;
height: 70vh;
margin: auto;
font-size: 32px;
font-weight: 600;
line-height: 44px;
letter-spacing: 0em;
text-align: center;
`
const ErrorHeader = styled.h1`
text-align: center;
`
const ErrorText = styled.p`
text-align: center;
font-weight: 600;
`

export const NotFound = () => {
  return (
    <ErrorPage>
      <ErrorHeader>404 Page Not Found</ErrorHeader>
      <ErrorText>We're sorry, the page you requested could not be found.</ErrorText>
    </ErrorPage>
  );
};

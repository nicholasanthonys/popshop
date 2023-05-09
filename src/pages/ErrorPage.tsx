import { useRouteError } from "react-router-dom";
import React, { FC } from "react";

interface ErrorPage {
  message: string;
  statusText: string;
}

const ErrorPage: FC = () => {
  const error = useRouteError() as ErrorPage;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred zzzz.</p>
      <p>
        {/* <i>{error.statusText || error.message}</i> */}
        <i>Use this error if not using error element. Page not found...</i>
      </p>
    </div>
  );
};

export default ErrorPage;

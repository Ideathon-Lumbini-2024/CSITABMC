import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

import React from "react";

const Login = () => {
  return (
    <>
      <RegisterLink
        postLoginRedirectURL="/api/auth/create"
        authUrlParams={{
          connection_id: "conn_0191ad1409993878c8518efb39890f77",
        }}
      >
        Google
      </RegisterLink>
    </>
  );
};

export default Login;

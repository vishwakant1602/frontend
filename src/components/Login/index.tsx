import { useLocation } from "react-router-dom";

export const Login = () => {
  const query = useQuery();
  let code = query.get("code") ?? null;

  if (!code) {
    window.location.href = "http://localhost:3000/";
  }

  return (
    <>
      {code ? <h1>Logged in!</h1> : <h1>Not logged in!</h1>}
      {/* <h1>{code}</h1> */}
    </>
  ); 
};

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

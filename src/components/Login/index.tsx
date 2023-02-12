import { useLocation, useNavigate } from "react-router-dom";
import { fetchUser } from "../../utils/api";
import { useEffect } from "react";
import { User } from "../../utils/types";

export const Login = () => {
  const history = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const code = query.get("code");

  useEffect(() => {
    if (!code) {
      history("/");
      return;
    }

    const fetchDataAndUpdateState = async () => {
      const fetchedUser: User = await fetchUser(code);
      // setUser(fetchedData);
      console.log(fetchedUser);
    };

    fetchDataAndUpdateState();
  }, [code, history]);

  return <div>Loading...</div>;
};

import { useLocation, useNavigate } from "react-router-dom";
import { fetchUser } from "../../utils/api";
import { useEffect, useState, useCallback, useContext } from "react";
import { User } from "../../utils/types";
import UserContext from "../../utils/contexts/userContext";

export const LoginPage = () => {
  const location = useLocation();
  const history = useNavigate();

  const query = new URLSearchParams(location.search);
  const code = query.get("code");
  const [hasFetched, setHasFetched] = useState(false);
  const { addUser } = useContext(UserContext);

  const fetchDataAndUpdateState = useCallback(async () => {
    if (code && addUser) {
      const fetchedUser: User = await fetchUser(code);

      if (fetchedUser.id) {
        addUser(fetchedUser);
        console.log(fetchedUser);
        history("/");
      }
    }
  }, [code, addUser, history]);

  useEffect(() => {
    if (!code) {
      history("/");
    }

    if (!hasFetched) {
      setHasFetched(true);
      fetchDataAndUpdateState();
    }
  }, [code, hasFetched, fetchDataAndUpdateState, history]);

  return <div>Loading...</div>;
};

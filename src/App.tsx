import { useEffect } from "react";

import { useAuth0 } from "@auth0/auth0-react";
import { ChakraProvider } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import Layout from "./layout";
import Routings from "./router/Routings";
import { setToken } from "./store/slices/authslice";
import { theme } from "./styles/theme";

const App: React.FC = () => {
  const { isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently } = useAuth0();
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  const fetchData = async (): Promise<void> => {
    try {
      const accessToken = await getAccessTokenSilently();
      dispatch(setToken(accessToken));
    } catch (e) {
      console.log(e);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isAuthenticated)
    return (
      <ChakraProvider theme={theme}>
        <Router>
          <Layout>
            <Routings />
          </Layout>
        </Router>
      </ChakraProvider>
    );
  loginWithRedirect();
  return null;
};

export default App;

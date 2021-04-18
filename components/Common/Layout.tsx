import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import NavAside from "~/components/Aside/NavAside";
import { useRouter } from "next/router";
import { CenteredSpinner } from "~/components/Common/Spinner";

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;

  * {
    scrollbar-width: thin;
    scrollbar-base-color: ${(props) => props.theme.scrollbar};
    scrollbar-shadow-color: ${(props) => props.theme.scrollbar};

    ::-webkit-scrollbar {
      width: 8px;
      height: 3px;
    }
    ::-webkit-scrollbar-button {
      display: none;
    }
    ::-webkit-scrollbar-track {
      background-color: ${(props) => props.theme.scrollbar};
    }
    ::-webkit-scrollbar-track-piece {
      background-color: ${(props) => props.theme.editorBg};
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.scrollbar};
      border-radius: 3px;
    }
  }
`;

const Main = styled.main`
  display: flex;
  height: 100vh;
  align-items: stretch;
  background-color: ${(props) => props.theme.editorBg};
`;

//todo: theme for styled and common background?

const PageBody = styled.section`
  p:first-child {
    margin-top: 0;
  }
  p:last-child {
    margin-bottom: 0;
  }
  height: 100%;
  width: 100%;
`;

const Layout: FC = ({ children }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    router.events.on("routeChangeStart", () => setLoading(true));
    router.events.on("routeChangeComplete", () => setLoading(false));
    router.events.on("routeChangeError", () => setLoading(false));
    return () => {
      router.events.off("routeChangeStart", () => setLoading(true));
      router.events.off("routeChangeComplete", () => setLoading(false));
      router.events.off("routeChangeError", () => setLoading(false));
    };
  }, []);

  return (
    <PageContent>
      <Main>
        <NavAside />
        {loading ? <CenteredSpinner /> : <PageBody>{children}</PageBody>}
      </Main>
    </PageContent>
  );
};

export default Layout;
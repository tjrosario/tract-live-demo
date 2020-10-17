import React, {
    ReactNode 
} from 'react';
import {
    BrowserRouter, Link, Route, Switch 
} from 'react-router-dom';
import {
    Box, CSSReset, Image, ThemeProvider 
} from '@chakra-ui/core';
import TractLiveView from './views/TractLiveView';
import PageNotFoundView from './views/PageNotFoundView';
import customTheme from './themes/customTheme';
import './App.css';

interface IContainer {
  children: ReactNode;
}

/**
 * Container component that center aligns all children
 */
const Container: React.FC<IContainer> = ({
    children 
}): JSX.Element => {
    return (
        <Box mx={"auto"}
            px={5}
            width={{
                lg: '80em' 
            }}>
            {children}
        </Box>
    );
};

/**
 * Main app component that includes theming and routing
 */
const App: React.FC = (): JSX.Element => {
    return (
        <ThemeProvider theme={customTheme}>
            <CSSReset />

            <BrowserRouter>
                <Box
                    as={"header"}
                    borderBottomColor={"gray.200"}
                    borderBottomStyle={"solid"}
                    borderBottomWidth={"1px"}
                    mb={"4"}
                    p={"4"}
                >
                    <Container>
                        <Link to={"/"}>
                            <Image
                                alt={"Tract Live"}
                                src={"/tract-live-logo.png"}
                                width={"100px"}
                            />
                        </Link>
                    </Container>
                </Box>

                <Container>
                    <Switch>
                        <Route component={TractLiveView}
                            exact
                            path={"/"} />
                        <Route component={PageNotFoundView}
                            path={"/"} />
                    </Switch>
                </Container>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;

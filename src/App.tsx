import React, { ReactNode } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider, CSSReset, Box, Image } from '@chakra-ui/core'
import TractLiveView from './views/TractLiveView'
import customTheme from './themes/customTheme'
import './App.css'

interface IAppContainer {
	children: ReactNode
}

const Container: React.FC<IAppContainer> = ({ children }): JSX.Element => {
	return (
		<Box mx="auto" px={5} width={{ lg: '80em' }}>
			{children}
		</Box>
	)
}

const App: React.FC = ({ children }): JSX.Element => {
	return (
		<ThemeProvider theme={customTheme}>
			<CSSReset />

			{children}

			<Box
				as="header"
				borderBottomColor="gray.200"
				borderBottomStyle="solid"
				borderBottomWidth="1px"
				mb="4"
				p="4"
			>
				<Container>
					<Image
						alt="Tract Live"
						width="100px"
						src="/tract-live-logo.png"
					/>
				</Container>
			</Box>

			<Container>
				<BrowserRouter>
					<Switch>
						<Route path="/" component={TractLiveView} exact />
						<Route path="/" render={() => <div>404</div>} />
					</Switch>
				</BrowserRouter>
			</Container>
		</ThemeProvider>
	)
}

export default App

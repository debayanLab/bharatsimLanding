import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Flex,
  Code,
  Grid,
} from '@chakra-ui/react';
import theme from './theme.js';
import Landing from "./pages/Landing";
import Publications from "./pages/Publications";
import People from "./pages/People";
import Projects from "./pages/Projects";

import LandingLayout from "./components/layouts/LandingLayout";
import Header from "./components/sections/Header";
import Footer from "./components/sections/Footer";

export default function App() {
  return (
    <Router>
      <Switch>

      <Route path="/people">
          <ChakraProvider theme={theme}>
          <LandingLayout >  <People /></LandingLayout>
    
          </ChakraProvider>
        </Route>
        <Route path="/components">
            <ChakraProvider theme={theme}>
            <LandingLayout > <Projects /> </LandingLayout>
                <Footer />    
            </ChakraProvider>
        </Route>

        <Route path="/faq">
          <Landing />
        </Route>

        <Route path="/about">
        <ChakraProvider theme={theme}>
        <div>
          Hello!
        </div>
    </ChakraProvider>
        </Route>

        <Route path="/media">
        <ChakraProvider theme={theme}>
        <LandingLayout>
          Work in Progress...
          </LandingLayout>
    </ChakraProvider>
        </Route>


      <Route path="/collaborations">
        <ChakraProvider theme={theme}>
        <Header bg="#392F74" ></Header>
        <div style={{margin:"auto",width:"50%",paddingLeft:"23vw"}}>
            Work in Progress..
            </div>
                  
        </ChakraProvider>
      </Route>



        <Route path="/publications">
          <ChakraProvider theme={theme}>
          <Header bg="#392F74" ></Header>
            {/*<Publications />*/}
            <div style={{margin:"auto",width:"50%",paddingLeft:"23vw"}}>
            Work in Progress...
            </div>
            
          {/* <Footer /> */}
          </ChakraProvider>
        </Route>

        <Route path="/">
          <Landing />
        
          
        </Route>
      </Switch>
    </Router>
  );
}

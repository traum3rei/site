'use client'

import Image from "next/image";
import React, {useEffect, useState} from 'react';
import { MenuList, MenuListItem, Separator, styleReset } from 'react95';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Frame } from 'react95';


/* Pick a theme of your choice */
import original from 'react95/dist/themes/original';

import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';


const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;
const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
};
const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
  window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowDimensions;
};

export default function Home() {
  const {height, width} = useWindowDimensions();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
    <ThemeProvider theme={original}>
      
      <Frame
          variant='field'
          style={{
            height: height-0.05*height,
            width: width-0.05*width 
          }}
        >
          Hello.
        </Frame>
    </ThemeProvider>
    </main>
  );
}

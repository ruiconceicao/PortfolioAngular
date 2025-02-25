import { inject, Injectable, signal } from '@angular/core';
import { Svg } from '../models/svg.model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SvgService {
  svgs = signal<Svg[]>([
    {
      name: 'Python',
      icon: `
        <svg
          viewBox="0 -0.5 256 256"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img">
          <title>Python Logo</title>
          <linearGradient
            x1="12.9593594%"
            y1="12.0393928%"
            x2="79.6388325%"
            y2="78.2008538%"
            id="linearGradient-1">
            <stop stop-color="#387EB8" offset="0%"></stop>
            <stop stop-color="#366994" offset="100%"></stop>
          </linearGradient>
          <linearGradient
            x1="19.127525%"
            y1="20.5791813%"
            x2="90.7415328%"
            y2="88.4290372%"
            id="linearGradient-2">
            <stop stop-color="#FFE052" offset="0%"></stop>
            <stop stop-color="#FFC331" offset="100%"></stop>
          </linearGradient>
          <path
            d="M126.915866,0.0722755491 C62.0835831,0.0722801733 66.1321288,28.1874648 66.1321288,28.1874648 L66.2044043,57.3145115 L128.072276,57.3145115 L128.072276,66.0598532 L41.6307171,66.0598532 C41.6307171,66.0598532 0.144551098,61.3549438 0.144551098,126.771315 C0.144546474,192.187673 36.3546019,189.867871 36.3546019,189.867871 L57.9649915,189.867871 L57.9649915,159.51214 C57.9649915,159.51214 56.8001363,123.302089 93.5968379,123.302089 L154.95878,123.302089 C154.95878,123.302089 189.434218,123.859386 189.434218,89.9830604 L189.434218,33.9695088 C189.434218,33.9695041 194.668541,0.0722755491 126.915866,0.0722755491 L126.915866,0.0722755491 L126.915866,0.0722755491 Z M92.8018069,19.6589497 C98.9572068,19.6589452 103.932242,24.6339846 103.932242,30.7893845 C103.932246,36.9447844 98.9572068,41.9198193 92.8018069,41.9198193 C86.646407,41.9198239 81.6713721,36.9447844 81.6713721,30.7893845 C81.6713674,24.6339846 86.646407,19.6589497 92.8018069,19.6589497 L92.8018069,19.6589497 L92.8018069,19.6589497 Z"
            fill="url(#linearGradient-1)"
          ></path>
          <path
            d="M128.757101,254.126271 C193.589403,254.126271 189.540839,226.011081 189.540839,226.011081 L189.468564,196.884035 L127.600692,196.884035 L127.600692,188.138693 L214.042251,188.138693 C214.042251,188.138693 255.528417,192.843589 255.528417,127.427208 C255.52844,62.0108566 219.318366,64.3306589 219.318366,64.3306589 L197.707976,64.3306589 L197.707976,94.6863832 C197.707976,94.6863832 198.87285,130.896434 162.07613,130.896434 L100.714182,130.896434 C100.714182,130.896434 66.238745,130.339138 66.238745,164.215486 L66.238745,220.229038 C66.238745,220.229038 61.0044225,254.126271 128.757101,254.126271 L128.757101,254.126271 L128.757101,254.126271 Z M162.87116,234.539597 C156.715759,234.539597 151.740726,229.564564 151.740726,223.409162 C151.740726,217.253759 156.715759,212.278727 162.87116,212.278727 C169.026563,212.278727 174.001595,217.253759 174.001595,223.409162 C174.001618,229.564564 169.026563,234.539597 162.87116,234.539597 L162.87116,234.539597 L162.87116,234.539597 Z"
            fill="url(#linearGradient-2)"
          ></path>
        </svg>
      `,
    },
    {
      name: 'HTML',
      icon: `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 512 512"
          class="svgFitBgFill"
          aria-hidden="true">
          <title>HTML Logo</title>
          <path fill="#e34f26" d="M71 460L30 0h451l-41 460-185 52"></path>
          <path fill="#ef652a" d="M256 472l149-41 35-394H256"></path>
          <path d="M256 208h-75l-5-58h80V94H114l15 171h127zm-1 147l-63-17-4-45h-56l7 89 116 32z"></path>
          <path d="M255 208v57h70l-7 73-63 17v59l116-32 16-174zm0-114v56h137l5-56z"></path>
        </svg>
      `,
    },
    {
      name: 'CSS',
      icon: `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
          role="img"
          aria-hidden="true">
          <title>CSS Logo</title>
          <path
            fill="#639"
            d="M0 0H840A160 160 0 0 1 1000 160V840A160 160 0 0 1 840 1000H160A160 160 0 0 1 0 840V0Z"/>
          <path
            class="svgFitBgFill"
            d="m358.1,920c-64.23-.06-103.86-36.23-103.1-102.79,0,0,0-168.39,0-168.39,0-33.74,9.88-59.4,29.64-76.96,35.49-34.19,117.83-36.27,152.59.52,21.42,18.89,29.5,57.48,27.58,93.49h-73.72c.56-14.15-.19-35.58-8.51-43.65-10.81-14.63-39.36-12.91-46.91,2.32-4.64,8.26-6.96,20.49-6.96,36.67v146.18c0,30.65,10.65,46.15,31.96,46.49,9.96,0,17.53-3.62,22.68-10.85,7.19-8.58,8.31-27.58,7.73-41.32h73.72c5.04,70.07-36.32,119.16-106.71,118.29Zm234.04,0c-71.17.98-103.01-49.66-101.04-118.29h69.59c-1.93,29.92,8.35,57.17,32.99,55.27,10.99,0,18.73-3.44,23.2-10.33,8.5-12.59,10.09-48.95-2.06-63.02-8.49-13.55-39.03-25.51-55.16-33.57-23.03-11.02-39.61-24.1-49.75-39.26-22.87-33.64-20.75-107.48,11.34-137.4,31.18-36.92,112.61-38.62,143.82-.77,19.25,19.51,27.66,57.9,26.03,93.23h-67.02c.57-14.52-.8-37.95-6.44-46.49-3.95-7.23-11.43-10.85-22.42-10.85-19.59,0-29.38,11.71-29.38,35.12.21,24.86,9.9,35.06,32.48,45.45,29.24,11.36,66.42,30.76,79.9,54.24,40.2,71.54,12.62,180.82-86.09,176.65Zm224.76,0c-71.17.98-103.01-49.66-101.04-118.29h69.59c-1.93,29.92,8.35,57.17,32.99,55.27,10.99,0,18.73-3.44,23.2-10.33,8.5-12.59,10.09-48.95-2.06-63.02-8.49-13.55-39.03-25.51-55.16-33.57-23.03-11.02-39.61-24.1-49.75-39.26-22.87-33.64-20.75-107.48,11.34-137.4,31.18-36.92,112.61-38.62,143.82-.77,19.25,19.51,27.66,57.9,26.03,93.23h-67.02c.57-14.52-.8-37.95-6.44-46.49-3.95-7.23-11.43-10.85-22.42-10.85-19.59,0-29.38,11.71-29.38,35.12.21,24.86,9.9,35.06,32.48,45.45,29.24,11.36,66.42,30.76,79.9,54.24,40.2,71.54,12.62,180.82-86.09,176.65Z" />
        </svg>
      `,
    },
    {
      name: 'JavaScript',
      icon: `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-hidden="true"
          viewBox="0 0 512 512"
          class="svgFitBgFill">
          <title>JavaScript Logo</title>
          <rect width="512" height="512" rx="15%" fill="#f7df1e"></rect>
          <path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z"></path>
        </svg>
      `,
    },
    {
      name: 'TypeScript',
      icon: `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-hidden="true"
          viewBox="0 0 512 512">
          <title>TypeScript Logo</title>
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <rect width="512" height="512" rx="15%" fill="#3178c6"></rect>
            <path
              class="svgFitBgFill"
              d="m233 284h64v-41H118v41h64v183h51zm84 173c8.1 4.2 18 7.3 29 9.4s23 3.1 35 3.1c12 0 23-1.1 34-3.4c11-2.3 20-6.1 28-11c8.1-5.3 15-12 19-21s7.1-19 7.1-32c0-9.1-1.4-17-4.1-24s-6.6-13-12-18c-5.1-5.3-11-10-18-14s-15-8.2-24-12c-6.6-2.7-12-5.3-18-7.9c-5.2-2.6-9.7-5.2-13-7.8c-3.7-2.7-6.5-5.5-8.5-8.4c-2-3-3-6.3-3-10c0-3.4.89-6.5 2.7-9.3s4.3-5.1 7.5-7.1c3.2-2 7.2-3.5 12-4.6c4.7-1.1 9.9-1.6 16-1.6c4.2 0 8.6.31 13 .94c4.6.63 9.3 1.6 14 2.9c4.7 1.3 9.3 2.9 14 4.9c4.4 2 8.5 4.3 12 6.9v-47c-7.6-2.9-16-5.1-25-6.5s-19-2.1-31-2.1c-12 0-23 1.3-34 3.8s-20 6.5-28 12c-8.1 5.4-14 12-19 21c-4.7 8.4-7 18-7 30c0 15 4.3 28 13 38c8.6 11 22 19 39 27c6.9 2.8 13 5.6 19 8.3s11 5.5 15 8.4c4.3 2.9 7.7 6.1 10 9.5c2.5 3.4 3.8 7.4 3.8 12c0 3.2-.78 6.2-2.3 9s-3.9 5.2-7.1 7.2s-7.1 3.6-12 4.8c-4.7 1.1-10 1.7-17 1.7c-11 0-22-1.9-32-5.7c-11-3.8-21-9.5-28.1-15.44z"></path>
          </g>
        </svg>
      `,
    },
    {
      name: 'Django',
      icon: `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-hidden="true"
          viewBox="0 0 512 512"
          fill="#000000">
          <title>Django Logo</title>
          <rect width="512" height="512" rx="15%" fill="#113228"></rect>
          <path
            class="svgFitBgFill"
            d="M227 101h56v257c-29 5-50 8-73 8-69 0-104-31-104-90 0-57 37-93 96-93 9 0 16 0 25 2zm0 129c-7-2-12-3-19-3-29 0-45 18-45 48s15 46 44 46c6 0 11 0 20-2zm145-44v129c0 45-3 66-13 84-9 18-21 29-46 42l-52-25c25-11 37-22 44-37 8-16 11-34 11-83V186zm-56-85h56v57h-56z"></path>
        </svg>
      `,
    },
    {
      name: 'Angular',
      icon: `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 223 236"
          role="img"
          aria-hidden="true">
          <title>Angular Logo</title>
          <g clip-path="url(#a)">
            <path
              fill="url(#b)"
              d="m222.077 39.192-8.019 125.923L137.387 0l84.69 39.192Zm-53.105 162.825-57.933 33.056-57.934-33.056 11.783-28.556h92.301l11.783 28.556ZM111.039 62.675l30.357 73.803H80.681l30.358-73.803ZM7.937 165.115 0 39.192 84.69 0 7.937 165.115Z"></path>
            <path
              fill="url(#c)"
              d="m222.077 39.192-8.019 125.923L137.387 0l84.69 39.192Zm-53.105 162.825-57.933 33.056-57.934-33.056 11.783-28.556h92.301l11.783 28.556ZM111.039 62.675l30.357 73.803H80.681l30.358-73.803ZM7.937 165.115 0 39.192 84.69 0 7.937 165.115Z"></path>
          </g>
          <defs>
            <linearGradient
              id="b"
              x1="49.009"
              x2="225.829"
              y1="213.75"
              y2="129.722"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="#E40035"></stop>
              <stop offset=".24" stop-color="#F60A48"></stop>
              <stop offset=".352" stop-color="#F20755"></stop>
              <stop offset=".494" stop-color="#DC087D"></stop>
              <stop offset=".745" stop-color="#9717E7"></stop>
              <stop offset="1" stop-color="#6C00F5"></stop>
            </linearGradient>
            <linearGradient
              id="c"
              x1="41.025"
              x2="156.741"
              y1="28.344"
              y2="160.344"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="#FF31D9"></stop>
              <stop offset="1" stop-color="#FF5BE1" stop-opacity="0"></stop>
            </linearGradient>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h223v236H0z"></path>
            </clipPath>
          </defs>
        </svg>
      `,
    },
    {
      name: 'C++',
      icon: `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 288"
          preserveAspectRatio="xMinYMin meet">
          <path
            d="M255.569 84.72c-.002-4.83-1.035-9.098-3.124-12.761-2.052-3.602-5.125-6.621-9.247-9.008-34.025-19.619-68.083-39.178-102.097-58.817-9.17-5.294-18.061-5.101-27.163.269C100.395 12.39 32.59 51.237 12.385 62.94 4.064 67.757.015 75.129.013 84.711 0 124.166.013 163.62 0 203.076c.002 4.724.991 8.909 2.988 12.517 2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.269 34.015-19.64 68.075-39.198 102.105-58.817 4.217-2.44 7.333-5.544 9.386-9.252 1.994-3.608 2.985-7.793 2.987-12.518 0 0 0-78.889-.013-118.345"
            fill="#5C8DBC"/>
          <path
            d="M128.182 143.509L2.988 215.593c2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.269 34.015-19.64 68.075-39.198 102.105-58.817 4.217-2.44 7.333-5.544 9.386-9.252l-124.413-72.074"
            fill="#1A4674"/>
          <path
            d="M91.101 164.861c7.285 12.718 20.98 21.296 36.69 21.296 15.807 0 29.58-8.687 36.828-21.541l-36.437-21.107-37.081 21.352"
            fill="#1A4674"/>
          <path
            d="M255.569 84.72c-.002-4.83-1.035-9.098-3.124-12.761l-124.263 71.55 124.413 72.074c1.994-3.608 2.985-7.793 2.987-12.518 0 0 0-78.889-.013-118.345"
            fill="#1B598E"/>
          <path
            d="M248.728 148.661h-9.722v9.724h-9.724v-9.724h-9.721v-9.721h9.721v-9.722h9.724v9.722h9.722v9.721M213.253 148.661h-9.721v9.724h-9.722v-9.724h-9.722v-9.721h9.722v-9.722h9.722v9.722h9.721v9.721"
            class="svgFitBgFill"/>
          <path
            d="M164.619 164.616c-7.248 12.854-21.021 21.541-36.828 21.541-15.71 0-29.405-8.578-36.69-21.296a42.062 42.062 0 0 1-5.574-20.968c0-23.341 18.923-42.263 42.264-42.263 15.609 0 29.232 8.471 36.553 21.059l36.941-21.272c-14.683-25.346-42.096-42.398-73.494-42.398-46.876 0-84.875 38-84.875 84.874 0 15.378 4.091 29.799 11.241 42.238 14.646 25.48 42.137 42.637 73.634 42.637 31.555 0 59.089-17.226 73.714-42.781l-36.886-21.371"
            class="svgFitBgFill"/>
        </svg>
      `,
    },
    {
      name: 'Swift',
      icon: `
        <svg
          viewBox="-252 343.9 106.1 106.1"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-hidden="true">
          <title>Swift Logo</title>
          <path
            fill="#F05138"
            d="M-145.9 373.3v-3.2c-.1-2.3-.2-4.7-.6-7-.4-2.3-1.1-4.5-2.2-6.6-1.1-2.1-2.4-4-4.1-5.6-1.7-1.7-3.6-3-5.6-4.1-2.1-1.1-4.3-1.8-6.6-2.2-2.3-.4-4.6-.6-7-.6h-53.7c-.6 0-1.2 0-1.7.1-1.7.1-3.5.2-5.2.5-1.7.3-3.4.8-5 1.4-.5.2-1.1.5-1.6.7-1.6.8-3 1.8-4.4 2.9-.4.4-.9.8-1.3 1.2-1.7 1.7-3 3.6-4.1 5.6-1.1 2.1-1.8 4.3-2.2 6.6-.4 2.3-.5 4.6-.6 7v53.7c.1 2.3.2 4.7.6 7 .4 2.3 1.1 4.5 2.2 6.6 1.1 2.1 2.4 4 4.1 5.6 1.7 1.7 3.6 3 5.6 4.1 2.1 1.1 4.3 1.8 6.6 2.2 2.3.4 4.6.6 7 .6h53.7c2.3-.1 4.7-.2 7-.6 2.3-.4 4.5-1.1 6.6-2.2 2.1-1.1 4-2.4 5.6-4.1 1.7-1.7 3-3.6 4.1-5.6 1.1-2.1 1.8-4.3 2.2-6.6.4-2.3.6-4.6.6-7v-3.2V377v-3.7z"></path>
          <path
            class="svgFitBgFill"
            d="M-168 409.4l.3-1.2c4.4-17.5-6.3-38.3-24.5-49.2 8 10.8 11.5 23.9 8.4 35.3-.3 1-.6 2-1 3-.4-.3-.9-.6-1.6-.9 0 0-18.1-11.2-37.7-30.9-.5-.5 10.5 15.7 22.9 28.8-5.9-3.3-22.2-15.2-32.6-24.6 1.3 2.1 2.8 4.2 4.4 6.1 8.6 11 19.9 24.5 33.4 34.9-9.5 5.8-22.9 6.3-36.2 0-3.3-1.5-6.4-3.4-9.3-5.5 5.6 9 14.3 16.8 24.9 21.4 12.6 5.4 25.2 5.1 34.5.1 0 0 .1 0 .1-.1.4-.2.8-.5 1.2-.7 4.5-2.3 13.3-4.6 18.1 4.6 1.4 2.1 3.9-9.9-5.3-21.1z"></path>
        </svg>
      `,
    },
    {
      name: 'VSCode',
      icon: `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-11.9 -2 1003.9 995.6"
          role="img"
          aria-hidden="true">
          <title>VSCode Logo</title>
          <path
            d="m12.1 353.9s-24-17.3 4.8-40.4l67.1-60s19.2-20.2 39.5-2.6l619.2 468.8v224.8s-.3 35.3-45.6 31.4z"
            fill="#2489ca"/>
          <path
            d="m171.7 498.8-159.6 145.1s-16.4 12.2 0 34l74.1 67.4s17.6 18.9 43.6-2.6l169.2-128.3z"
            fill="#1070b3"/>
          <path
            d="m451.9 500 292.7-223.5-1.9-223.6s-12.5-48.8-54.2-23.4l-389.5 354.5z"
            fill="#0877b9"/>
          <path
            d="m697.1 976.2c17 17.4 37.6 11.7 37.6 11.7l228.1-112.4c29.2-19.9 25.1-44.6 25.1-44.6v-671.2c0-29.5-30.2-39.7-30.2-39.7l-197.7-95.3c-43.2-26.7-71.5 4.8-71.5 4.8s36.4-26.2 54.2 23.4v887.5c0 6.1-1.3 12.1-3.9 17.5-5.2 10.5-16.5 20.3-43.6 16.2z"
            fill="#3c99d4"/>
        </svg>
      `,
    },
  ]);

  constructor() {}

  sanitizer = inject(DomSanitizer);
  getSafeSvg(icon: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(icon);
  }
  
}

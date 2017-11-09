/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

class Footer extends React.Component {
  render() {
    return (
      <div className="footerContainer">
        <div id="footer_wrap" className="wrapper footerWrapper">
          <div className="footerBlocks">
            <div id="fb_oss" className="footerSection fbOpenSourceFooter">
                <svg className="facebookOSSLogoSvg" viewBox="0 0 1133.9 1133.9" x="0px" y="0px">
                  <g>
                    <path className="logoRing outerRing" d="M 498.3 3.7 c 153.6 88.9 307.3 177.7 461.1 266.2 c 7.6 4.4 10.3 9.1 10.3 17.8 c -0.3 179.1 -0.2 358.3 0 537.4 c 0 8.1 -2.4 12.8 -9.7 17.1 c -154.5 88.9 -308.8 178.1 -462.9 267.5 c -9 5.2 -15.5 5.3 -24.6 0.1 c -153.9 -89.2 -307.9 -178 -462.1 -266.8 C 3 838.8 0 833.9 0 825.1 c 0.3 -179.1 0.2 -358.3 0 -537.4 c 0 -8.6 2.6 -13.6 10.2 -18 C 164.4 180.9 318.4 92 472.4 3 C 477 -1.5 494.3 -0.7 498.3 3.7 Z M 48.8 555.3 c 0 79.9 0.2 159.9 -0.2 239.8 c -0.1 10 3 15.6 11.7 20.6 c 137.2 78.8 274.2 157.8 411 237.3 c 9.9 5.7 17 5.7 26.8 0.1 c 137.5 -79.8 275.2 -159.2 412.9 -238.5 c 7.4 -4.3 10.5 -8.9 10.5 -17.8 c -0.3 -160.2 -0.3 -320.5 0 -480.7 c 0 -8.8 -2.8 -13.6 -10.3 -18 C 772.1 218 633.1 137.8 494.2 57.4 c -6.5 -3.8 -11.5 -4.5 -18.5 -0.5 C 336.8 137.4 197.9 217.7 58.8 297.7 c -7.7 4.4 -10.2 9.2 -10.2 17.9 C 48.9 395.5 48.8 475.4 48.8 555.3 Z" />
                    <path className="logoRing middleRing" d="M 184.4 555.9 c 0 -33.3 -1 -66.7 0.3 -100 c 1.9 -48 24.1 -86 64.7 -110.9 c 54.8 -33.6 110.7 -65.5 167 -96.6 c 45.7 -25.2 92.9 -24.7 138.6 1 c 54.4 30.6 108.7 61.5 162.2 93.7 c 44 26.5 67.3 66.8 68 118.4 c 0.9 63.2 0.9 126.5 0 189.7 c -0.7 50.6 -23.4 90.7 -66.6 116.9 c -55 33.4 -110.8 65.4 -167.1 96.5 c -43.4 24 -89 24.2 -132.3 0.5 c -57.5 -31.3 -114.2 -64 -170 -98.3 c -41 -25.1 -62.9 -63.7 -64.5 -112.2 C 183.5 621.9 184.3 588.9 184.4 555.9 Z M 232.9 556.3 c 0 29.5 0.5 59.1 -0.1 88.6 c -0.8 39.2 16.9 67.1 50.2 86.2 c 51.2 29.4 102.2 59.2 153.4 88.4 c 31.4 17.9 63.6 18.3 95 0.6 c 53.7 -30.3 107.1 -61.2 160.3 -92.5 c 29.7 -17.5 45 -44.5 45.3 -78.8 c 0.6 -61.7 0.5 -123.5 0 -185.2 c -0.3 -34.4 -15.3 -61.5 -44.9 -79 C 637.7 352.6 583 320.8 527.9 290 c -27.5 -15.4 -57.2 -16.1 -84.7 -0.7 c -56.9 31.6 -113.4 64 -169.1 97.6 c -26.4 15.9 -40.7 41.3 -41.1 72.9 C 232.6 491.9 232.9 524.1 232.9 556.3 Z" />
                    <path className="logoRing innerRing" d="M 484.9 424.4 c 69.8 -2.8 133.2 57.8 132.6 132 C 617 630 558.5 688.7 484.9 689.1 c -75.1 0.4 -132.6 -63.6 -132.7 -132.7 C 352.1 485 413.4 421.5 484.9 424.4 Z M 401.3 556.7 c -3.4 37.2 30.5 83.6 83 84.1 c 46.6 0.4 84.8 -37.6 84.9 -84 c 0.1 -46.6 -37.2 -84.4 -84.2 -84.6 C 432.2 472.1 397.9 518.3 401.3 556.7 Z" />
                  </g>
                </svg>
              <h2>Facebook Open Source</h2>
            </div>
            <div className="footerSection rightAlign">
              <a className="footerLink" href="https://code.facebook.com/projects/" target="_blank">Open Source Projects</a>
              <a className="footerLink" href="https://github.com/facebook/" target="_blank">GitHub</a>
              <a className="footerLink" href="https://twitter.com/fbOpenSource" target="_blank">Twitter</a>
              <a className="footerLink" href="https://github.com/facebook/makeitopen/" target="_blank">Contribute on GitHub</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Footer;

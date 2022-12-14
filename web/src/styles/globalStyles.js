import * as typography from './typography'
import * as colors from './colors'
import * as animations from './animations'
import * as util from './util'
import * as fonts from './fonts'
import { slick } from './slick'
import { rgba } from 'polished'
import { mq } from 'src/styles'

const responsiveStyles = util.responsiveStyles

// All global styles
const globalStyles = `
  ${ fonts.MaterialIconsFont }
  ${ fonts.FuturaFont }
  ${ fonts.FuturaMediumFont }
  ${ fonts.FuturaBoldFont }
  ${ fonts.FuturaHeavyFont }

  ${ fonts.GaramondProFont }
  ${ fonts.GaramondProItalicFont }
  ${ fonts.GaramondProSemiBoldFont }
  ${ fonts.GaramondProSemiBoldItalicFont }
  ${ fonts.GaramondProBoldFont }
  ${ fonts.GaramondProBoldItalicFont }

  :root {


    // Colors
    --bg-color: ${ colors.bgColor };
    --bg-color: ${ colors.bgColor };
    --main-color: ${ colors.mainColor };
    --alert: ${ colors.alert };
    --notify: ${ colors.notify };
    --success: ${ colors.success };
    --text-color: ${ colors.textColor };
    --light-text-color: ${ colors.lightTextColor };
    --light-grey: ${ colors.lightGrey };
    --hr-color: ${ colors.hrColor };

    // Grid
    --site-width: calc(100% - 9.5rem);
    --site-max-width: 1500px;
    --site-margins: 4.5rem;
    --site-mobile-margins: 2.25rem;
    --vertical-spacing: clamp(40px, ${ 100 / 12 }vw, 140px);
    --site-gutters: 2.25rem;

    --site-wide-gutters: 4.75rem;
    --site-tight-gutters: 1.125rem;

    ${ mq.extraLargeAndUp } {
      --site-margins: 4.75rem;
    }
  }

  * {
    box-sizing: border-box;
  }

  html {
    font-display: block;
    background: ${ colors.bgColor };
    color: ${ colors.textColor };
    ${ util.fontSmoothing }
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
    padding: 0;
    margin: 0;
    background-attachment: fixed;
    &.page-lock {
      position: relative;
      overflow: hidden;
      height: 100%;
    }
  }

  body {
    ${ typography.body }
    color: ${ colors.textColor };
    background: ${ colors.bgColor };
    padding: 0;
    margin: 0;
  }

  b, strong {
    font-weight: ${ typography.bold };
  }

  em, i {
    font-style: italic;
  }

  h1, h2, h3, h4, h5, h6, blockquote, p, ul, ol {
    font-weight: normal;
    margin: 0 0 0.5em;
  }

  h1, h2, h3, h4, h5, h6, blockquote {
    b, strong {
      font-weight: ${ typography.bold };
    }
  }

  p {
    ${ typography.body }
    margin-top: 1em;
    margin-bottom: 1em;
    &.tiny {
      ${ typography.bodyTiny }
    }
    &.small {
      ${ typography.bodySmall }
    }
    &.medium {
      ${ typography.bodyMedium }
    }
    &.large {
      ${ typography.bodyLarge }
    }
    a {
      border-bottom: 1px solid ${ colors.hrColor };
      padding-bottom: .1em;
      &:hover {
        border-color: ${ colors.mainColor };
      }
    }
  }

  h1, .h1 {
    ${ typography.h1 }
    ${ responsiveStyles('margin-top', 10, 10, 10, 8) }
    ${ responsiveStyles('margin-bottom', 12, 10, 8, 8) }
    strong {
      font-weight: normal;
    }
  }

  h2, .h2 {
    ${ typography.h2 }
    ${ responsiveStyles('margin-top', 10, 10, 10, 8) }
    ${ responsiveStyles('margin-bottom', 10, 10, 8, 8) }
    strong {
      font-weight: normal;
    }
  }

  h3, .h3 {
    ${ typography.h3 }
    ${ responsiveStyles('margin-top', 10, 10, 10, 8) }
    ${ responsiveStyles('margin-bottom', 14, 12, 12, 10) }
    strong {
      font-weight: normal;
    }
  }

  h4, .h4 {
    ${ typography.h4 }
    ${ responsiveStyles('margin-top', 24, 16, 16, 8) }
    ${ responsiveStyles('margin-bottom', 14, 12, 12, 10) }
    strong {
      font-weight: normal;
    }
  }

  h5, .h5 {
    ${ typography.h5 }
    ${ responsiveStyles('margin-top', 24, 16, 16, 8) }
    ${ responsiveStyles('margin-bottom', 24, 16, 16, 8) }
    strong {
      font-weight: normal;
    }
  }

  h6, .h6 {
    ${ typography.h6 }
    ${ responsiveStyles('margin-top', 24, 16, 16, 8) }
    ${ responsiveStyles('margin-bottom', 24, 16, 16, 8) }
  }

  figcaption {
    ${ typography.bodySmall }
    color: ${ colors.lightTextColor };
  }

  hr {
    margin: 2em 0;
    vertical-align: top;
    border: 0;
    display: inline-block;
    border: none;
    border-bottom: 1px solid var(--hr-color);
    &.short {
      margin: 1.5em 0 1.85em;
      border-color: var(--main-color);
      width: 50px;
      border-width: 2px;
    }
  }

  a {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
    transition:   color ${ animations.mediumSpeed } ease-in-out,
                  border ${ animations.mediumSpeed } ease-in-out,
                  background ${ animations.mediumSpeed } ease-in-out,
                  opacity ${ animations.mediumSpeed } ease-in-out,
                  transform ${ animations.mediumSpeed } ease-in-out;
    &:hover,
    &:focus {
      outline: none;
      color: ${ colors.textColor };
    }
  }

  // Remove grey rectangle from iOS taps
  a, input, button {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  ul, ol {
    padding-left: 2em;
    p {
      margin: 0;
    }
  }

  blockquote {
    ${ typography.blockquote };
  }

  img {
    max-width: 100%;
    height: auto;
    vertical-align: top;
    display: block;
  }

  time {
    ${ typography.bodySmall };
  }

  ::selection {
    background: ${ rgba(colors.mainColor, 0.9) };
    color: ${ colors.bgColor };
  }
  
  ${ slick }

  .linen {
    color: ${ colors.linen };
  }

  .bg-color {
    background-color: ${ colors.bgColor };
  }

  .overlay {
    background ${ colors.textColor };
    opacity: 0.07;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 4;
  }

`
 export default globalStyles

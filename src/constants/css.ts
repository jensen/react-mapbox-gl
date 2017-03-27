// tslint:disable:max-line-length

export default `
    .mapboxgl-map {
        font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
        overflow: hidden;
        position: relative;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }

    .mapboxgl-canvas-container.mapboxgl-interactive,
    .mapboxgl-ctrl-nav-compass {
        cursor: -webkit-grab;
        cursor: -moz-grab;
        cursor: grab;
    }
    .mapboxgl-canvas-container.mapboxgl-interactive:active,
    .mapboxgl-ctrl-nav-compass:active {
        cursor: -webkit-grabbing;
        cursor: -moz-grabbing;
        cursor: grabbing;
    }

    .mapboxgl-ctrl-top-left,
    .mapboxgl-ctrl-top-right,
    .mapboxgl-ctrl-bottom-left,
    .mapboxgl-ctrl-bottom-right  { position:absolute; pointer-events:none; z-index:2; }
    .mapboxgl-ctrl-top-left      { top:0; left:0; }
    .mapboxgl-ctrl-top-right     { top:0; right:0; }
    .mapboxgl-ctrl-bottom-left   { bottom:0; left:0; }
    .mapboxgl-ctrl-bottom-right  { right:0; bottom:0; }

    .mapboxgl-ctrl { clear:both; pointer-events:auto }
    .mapboxgl-ctrl-top-left .mapboxgl-ctrl { margin:10px 0 0 10px; float:left; }
    .mapboxgl-ctrl-top-right .mapboxgl-ctrl{ margin:10px 10px 0 0; float:right; }
    .mapboxgl-ctrl-bottom-left .mapboxgl-ctrl { margin:0 0 10px 10px; float:left; }
    .mapboxgl-ctrl-bottom-right .mapboxgl-ctrl { margin:0 10px 10px 0; float:right; }

    .mapboxgl-ctrl-group {
        border-radius: 4px;
        -moz-box-shadow: 0px 0px 2px rgba(0,0,0,0.1);
        -webkit-box-shadow: 0px 0px 2px rgba(0,0,0,0.1);
        box-shadow: 0px 0px 0px 2px rgba(0,0,0,0.1);
        overflow: hidden;
        background: #fff;
    }
    .mapboxgl-ctrl-group > button {
        width: 30px;
        height: 30px;
        display: block;
        padding: 0;
        outline: none;
        border: none;
        border-bottom: 1px solid #ddd;
        box-sizing: border-box;
        background-color: rgba(0,0,0,0);
        cursor: pointer;
    }
    /* https://bugzilla.mozilla.org/show_bug.cgi?id=140562 */
    .mapboxgl-ctrl > button::-moz-focus-inner {
        border: 0;
        padding: 0;
    }
    .mapboxgl-ctrl > button:last-child {
        border-bottom: 0;
    }
    .mapboxgl-ctrl > button:hover {
        background-color: rgba(0,0,0,0.05);
    }
    .mapboxgl-ctrl-icon,
    .mapboxgl-ctrl-icon > span.arrow {
        speak: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .mapboxgl-ctrl-icon {
        padding: 5px;
    }
    .mapboxgl-ctrl-icon.mapboxgl-ctrl-zoom-out {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3D%270%200%2020%2020%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%0A%20%20%3Cpath%20style%3D%27fill%3A%23333333%3B%27%20d%3D%27m%207%2C9%20c%20-0.554%2C0%20-1%2C0.446%20-1%2C1%200%2C0.554%200.446%2C1%201%2C1%20l%206%2C0%20c%200.554%2C0%201%2C-0.446%201%2C-1%200%2C-0.554%20-0.446%2C-1%20-1%2C-1%20z%27%20%2F%3E%0A%3C%2Fsvg%3E%0A");
    }
    .mapboxgl-ctrl-icon.mapboxgl-ctrl-zoom-in {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3D%270%200%2020%2020%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%0A%20%20%3Cpath%20style%3D%27fill%3A%23333333%3B%27%20d%3D%27M%2010%206%20C%209.446%206%209%206.4459904%209%207%20L%209%209%20L%207%209%20C%206.446%209%206%209.446%206%2010%20C%206%2010.554%206.446%2011%207%2011%20L%209%2011%20L%209%2013%20C%209%2013.55401%209.446%2014%2010%2014%20C%2010.554%2014%2011%2013.55401%2011%2013%20L%2011%2011%20L%2013%2011%20C%2013.554%2011%2014%2010.554%2014%2010%20C%2014%209.446%2013.554%209%2013%209%20L%2011%209%20L%2011%207%20C%2011%206.4459904%2010.554%206%2010%206%20z%27%20%2F%3E%0A%3C%2Fsvg%3E%0A");
    }
    .mapboxgl-ctrl-icon.mapboxgl-ctrl-geolocate  {
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%270%200%2020%2020%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%0D%0A%20%20%3Cpath%20style%3D%27fill%3A%23333%3B%27%20d%3D%27M10%204C9%204%209%205%209%205L9%205.1A5%205%200%200%200%205.1%209L5%209C5%209%204%209%204%2010%204%2011%205%2011%205%2011L5.1%2011A5%205%200%200%200%209%2014.9L9%2015C9%2015%209%2016%2010%2016%2011%2016%2011%2015%2011%2015L11%2014.9A5%205%200%200%200%2014.9%2011L15%2011C15%2011%2016%2011%2016%2010%2016%209%2015%209%2015%209L14.9%209A5%205%200%200%200%2011%205.1L11%205C11%205%2011%204%2010%204zM10%206.5A3.5%203.5%200%200%201%2013.5%2010%203.5%203.5%200%200%201%2010%2013.5%203.5%203.5%200%200%201%206.5%2010%203.5%203.5%200%200%201%2010%206.5zM10%208.3A1.8%201.8%200%200%200%208.3%2010%201.8%201.8%200%200%200%2010%2011.8%201.8%201.8%200%200%200%2011.8%2010%201.8%201.8%200%200%200%2010%208.3z%27%20%2F%3E%0D%0A%3C%2Fsvg%3E");
    }
    .mapboxgl-ctrl-icon.mapboxgl-ctrl-geolocate.watching  {
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%270%200%2020%2020%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%0D%0A%20%20%3Cpath%20style%3D%27fill%3A%2300f%3B%27%20d%3D%27M10%204C9%204%209%205%209%205L9%205.1A5%205%200%200%200%205.1%209L5%209C5%209%204%209%204%2010%204%2011%205%2011%205%2011L5.1%2011A5%205%200%200%200%209%2014.9L9%2015C9%2015%209%2016%2010%2016%2011%2016%2011%2015%2011%2015L11%2014.9A5%205%200%200%200%2014.9%2011L15%2011C15%2011%2016%2011%2016%2010%2016%209%2015%209%2015%209L14.9%209A5%205%200%200%200%2011%205.1L11%205C11%205%2011%204%2010%204zM10%206.5A3.5%203.5%200%200%201%2013.5%2010%203.5%203.5%200%200%201%2010%2013.5%203.5%203.5%200%200%201%206.5%2010%203.5%203.5%200%200%201%2010%206.5zM10%208.3A1.8%201.8%200%200%200%208.3%2010%201.8%201.8%200%200%200%2010%2011.8%201.8%201.8%200%200%200%2011.8%2010%201.8%201.8%200%200%200%2010%208.3z%27%20%2F%3E%0D%0A%3C%2Fsvg%3E");
    }

    .mapboxgl-ctrl-icon.mapboxgl-ctrl-compass > span.arrow {
        width: 20px;
        height: 20px;
        margin: 5px;
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2020%2020%27%3E%0A%09%3Cpolygon%20fill%3D%27%23333333%27%20points%3D%276%2C9%2010%2C1%2014%2C9%27%2F%3E%0A%09%3Cpolygon%20fill%3D%27%23CCCCCC%27%20points%3D%276%2C11%2010%2C19%2014%2C11%20%27%2F%3E%0A%3C%2Fsvg%3E");
        background-repeat: no-repeat;
        display: inline-block;
    }

    .mapboxgl-ctrl.mapboxgl-ctrl-attrib {
        padding: 0 5px;
        background-color: rgba(255, 255, 255, .5);
        margin: 0;
    }
    .mapboxgl-ctrl-attrib.compact {
        padding-top: 2px;
        padding-bottom: 2px;
        margin: 0 10px 10px 10px;
        position: relative;
        padding-right: 24px;
        background-color: #fff;
        border-radius: 3px 12px 12px 3px;
        visibility: hidden;
    }
    .mapboxgl-ctrl-attrib.compact:hover {
        visibility: visible;
    }
    .mapboxgl-ctrl-attrib.compact:after {
        content: '';
        cursor: pointer;
        position: absolute;
        bottom: 0;
        right: 0;
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%270%200%2020%2020%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%0D%0A%09%3Cpath%20fill%3D%27%23333333%27%20fill-rule%3D%27evenodd%27%20d%3D%27M4%2C10a6%2C6%200%201%2C0%2012%2C0a6%2C6%200%201%2C0%20-12%2C0%20M9%2C7a1%2C1%200%201%2C0%202%2C0a1%2C1%200%201%2C0%20-2%2C0%20M9%2C10a1%2C1%200%201%2C1%202%2C0l0%2C3a1%2C1%200%201%2C1%20-2%2C0%27%20%2F%3E%0D%0A%3C%2Fsvg%3E");
        background-color: rgba(255, 255, 255, .5);
        width: 24px;
        height: 24px;
        box-sizing: border-box;
        visibility: visible;
        border-radius: 12px;
    }
    .mapboxgl-ctrl-attrib a {
        color: rgba(0,0,0,0.75);
        text-decoration: none;
    }
    .mapboxgl-ctrl-attrib a:hover {
        color: inherit;
        text-decoration: underline;
    }
    .mapboxgl-ctrl-attrib .mapbox-improve-map {
        font-weight: bold;
        margin-left: 2px;
    }

    .mapboxgl-ctrl-scale {
        background-color: rgba(255,255,255,0.75);
        font-size: 10px;
        border-width: medium 2px 2px;
        border-style: none solid solid;
        border-color: #333;
        padding: 0 5px;
        color: #333;
    }

    .mapboxgl-popup {
        position: absolute;
        top: 0;
        left: 0;
        display: -webkit-flex;
        display: flex;
        will-change: transform;
        pointer-events: none;
    }
    .mapboxgl-popup-anchor-top,
    .mapboxgl-popup-anchor-top-left,
    .mapboxgl-popup-anchor-top-right {
        -webkit-flex-direction: column;
        flex-direction: column;
    }
    .mapboxgl-popup-anchor-bottom,
    .mapboxgl-popup-anchor-bottom-left,
    .mapboxgl-popup-anchor-bottom-right {
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
    }
    .mapboxgl-popup-anchor-left {
        -webkit-flex-direction: row;
        flex-direction: row;
    }
    .mapboxgl-popup-anchor-right {
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
    }
    .mapboxgl-popup-tip {
        width: 0;
        height: 0;
        border: 10px solid transparent;
        z-index: 1;
    }
    .mapboxgl-popup-anchor-top .mapboxgl-popup-tip {
        -webkit-align-self: center;
        align-self: center;
        border-top: none;
        border-bottom-color: #fff;
    }
    .mapboxgl-popup-anchor-top-left .mapboxgl-popup-tip {
        -webkit-align-self: flex-start;
        align-self: flex-start;
        border-top: none;
        border-left: none;
        border-bottom-color: #fff;
    }
    .mapboxgl-popup-anchor-top-right .mapboxgl-popup-tip {
        -webkit-align-self: flex-end;
        align-self: flex-end;
        border-top: none;
        border-right: none;
        border-bottom-color: #fff;
    }
    .mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip {
        -webkit-align-self: center;
        align-self: center;
        border-bottom: none;
        border-top-color: #fff;
    }
    .mapboxgl-popup-anchor-bottom-left .mapboxgl-popup-tip {
        -webkit-align-self: flex-start;
        align-self: flex-start;
        border-bottom: none;
        border-left: none;
        border-top-color: #fff;
    }
    .mapboxgl-popup-anchor-bottom-right .mapboxgl-popup-tip {
        -webkit-align-self: flex-end;
        align-self: flex-end;
        border-bottom: none;
        border-right: none;
        border-top-color: #fff;
    }
    .mapboxgl-popup-anchor-left .mapboxgl-popup-tip {
        -webkit-align-self: center;
        align-self: center;
        border-left: none;
        border-right-color: #fff;
    }
    .mapboxgl-popup-anchor-right .mapboxgl-popup-tip {
        -webkit-align-self: center;
        align-self: center;
        border-right: none;
        border-left-color: #fff;
    }
    .mapboxgl-popup-close-button {
        position: absolute;
        right: 0;
        top: 0;
        border: none;
        border-radius: 0 3px 0 0;
        cursor: pointer;
        background-color: rgba(0,0,0,0);
    }
    .mapboxgl-popup-close-button:hover {
        background-color: rgba(0,0,0,0.05);
    }
    .mapboxgl-popup-content {
        position: relative;
        background: #fff;
        border-radius: 3px;
        box-shadow: 0 1px 2px rgba(0,0,0,0.10);
        padding: 10px 10px 15px;
        pointer-events: auto;
    }
    .mapboxgl-popup-anchor-top-left .mapboxgl-popup-content {
        border-top-left-radius: 0;
    }
    .mapboxgl-popup-anchor-top-right .mapboxgl-popup-content {
        border-top-right-radius: 0;
    }
    .mapboxgl-popup-anchor-bottom-left .mapboxgl-popup-content {
        border-bottom-left-radius: 0;
    }
    .mapboxgl-popup-anchor-bottom-right .mapboxgl-popup-content {
        border-bottom-right-radius: 0;
    }

    .mapboxgl-marker {
        position: absolute;
        top: 0;
        left: 0;
        will-change: transform;
    }

    .mapboxgl-crosshair,
    .mapboxgl-crosshair .mapboxgl-interactive,
    .mapboxgl-crosshair .mapboxgl-interactive:active {
        cursor: crosshair;
    }
    .mapboxgl-boxzoom {
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
        background: #fff;
        border: 2px dotted #202020;
        opacity: 0.5;
    }
    @media print {
        .mapbox-improve-map {
            display:none;
        }
    }
  `;

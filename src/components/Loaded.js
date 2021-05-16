import React from 'react'
import LoaderSVG from '../images/loader.svg'
const Loaded = (  ) => (

    <div
              key={`loader`}
              id="___loader"
              style={{
                alignItems: "center",
                backgroundColor: "#e41e25",
                display: "flex",
                justifyContent: "center",
                position: "absolute",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                zIndex: 100,
              }}
           >
              <img src={LoaderSVG} alt="loader spinner" width="150" height="150"/>
        </div> 
)
export default Loaded

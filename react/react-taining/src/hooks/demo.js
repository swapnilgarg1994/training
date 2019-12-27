import React, { useState, useEffect } from 'react';

export default function Mybutton() {

    const [buttonText, setButtonText] = useState("1st Button");
    const [buttonText2 , setButtonText2] = useState(0)

  function clicking() {
          return(
                setButtonText2(buttonText2 + 1)
                );
              }

      useEffect(() => {
        console.log('hey')
      },[buttonText2])

    return(
          <div>
              <button onClick={() => setButtonText("clicked")}>
              {buttonText}
              </button>

              <hr />

              <button onClick={clicking}>
              {"2nd button clicked "+ buttonText2 +" times"}
              </button>
            </div>
          );
        }

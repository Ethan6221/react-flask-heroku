import React, { useState } from "react";
import Button from "@mui/material/Button"

export default function MyComponent() {
    const [toggleButton, setButton] = useState("Off");

    return(
        <div>
            <p>This is a button that you can toggle on and off</p>
            <Button
                variant="outlined"
                onClick={() => {
                    fetch("/toggle_button/" + toggleButton)
                        .then(response =>
                            response.json()
                        )
                        .then(data => {
                            setButton(data.button)
                        })
                        .catch(error => {
                            console.log(error)
                        })
                }}
            >
                {toggleButton}
            </Button>
        </div>
    );
}
import React, {useState} from 'react'


const Dark = (props) => {
    const [dark, setDark] = useState(false)

    const theme = createMuiTheme({
        palette: {
            type: dark ? 'dark' : 'light',
        },
    })

    return (
        <div>

        </div>
    )
}

export default Dark;
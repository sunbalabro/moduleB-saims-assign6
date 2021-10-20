import React from 'react'

 const Gate = ({isOpen}) => {
    return (
        <div style={{width:'500px',margin:'0 auto'}}>
            {
                isOpen ? <h1>Gate is Open</h1> : <h1>Gate is closed</h1>
            }
        </div>
    )
}
export default Gate
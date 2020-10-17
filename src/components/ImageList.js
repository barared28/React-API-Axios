import React from 'react';

const ImageList = props => {
    console.log(props)
    const data = props.image.map(arr => {
        return <img src={arr.urls.full} key={arr.id} alt={arr.urls.full} style={{maxWidth: '20vw' , margin: '10px'}} />
    })
    return (
        <div>
            {data}
        </div>
    )
}

export default ImageList
import React from 'react'
import "./Card.css";
import Image from "../image/Image";

const Card = (props) => {
    return (
      <div className='card'>

      <Image
        src={props.mainImageSrc}
        alt={props.mainImageAlt}
        loading={props.mainImageLoading}
        width={props.mainImageWidth}
        height={props.mainImageHeight}
      />
      </div>
    )
  }

export default Card
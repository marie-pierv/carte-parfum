import React from 'react';
import "./Card.css";
import Image from "../image/Image";
import TitreHMain from "../titre-h1/TitreHMain";

const Card = (props) => {
  const classNames = ["card"];
  if (props.className) classNames.push(props.className);

    return (
      <div className={classNames.join(" ")}>
        <section className='left'>
          <Image
            src={props.mainImageSrc}
            alt={props.mainImageAlt}
            loading={props.mainImageLoading}
            width={props.mainImageWidth}
            height={props.mainImageHeight}
          />
        </section>
        <section className='right'>
          <TitreHMain titreHMain={props.titreHMain}
          />
        </section>
        </div>
      
    )
  }

export default Card
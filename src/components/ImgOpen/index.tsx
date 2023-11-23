import React from "react";
import { Image } from "antd";

interface Props {
    image: string;
    alt: string;
    width?: number | string;
    height?: number | string;
}

function ImgOpen(props: Props) {
    const { image, alt, width, height } = props;
    return <Image
        width={width}
        height={height}
        src={image}
        alt={alt}
    />;
}

export default ImgOpen;

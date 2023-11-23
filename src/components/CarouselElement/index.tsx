'use client'
import React, { useState } from 'react';
import { Card, Carousel } from 'antd';
import { Player } from '../Player';
import ImgOpen from '../ImgOpen';
import { SignalRepresentation } from '@/core/domain/entities/signal-representation';

export interface Props {
    representation: SignalRepresentation;
}

export const CarouselElement = (props: Props) => {
    const { representation } = props;

    const [_ , setCurrentSlide] = useState(0);

    const onChange = (currentSlide: number) => {
        setCurrentSlide(currentSlide);
    };

    return (
        <Card style={{
            textAlign: 'center',
            background: '#217bb3',
        }}>
            <Carousel dotPosition={"top"} afterChange={onChange} >
                {representation.videos.map((video: string, index: number) => (
                    <div key={index}>
                        <h1 className="text-white text-lg m-10">{index + 1}° Representação</h1>
                        <Player url={video} height='500px' />
                        <h1 className="text-white text-lg m-10">Configurações de mão</h1>
                        <div>
                            {representation.hands[index].map((hand, handIndex) => (
                                <ImgOpen key={handIndex} width={200} alt={`Configuração de mão ${hand}`} image={`/img/hand-configurations/${hand}.png`} />
                            ))}
                        </div>
                    </div>
                ))}
            </Carousel>
        </Card>
    );
};

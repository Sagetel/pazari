'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './style.module.scss'
interface Images {
    photo: string
}
function GalleryCar(props: Images) {
    const images = props.photo

    const [imgsBase, setImgsBase] = useState([]);



    const imgs = [
        'https://avatars.mds.yandex.net/get-autoru-vos/9716151/b8ced71078c5b1d8285c143ece97b97b/1200x900n',
        'https://avatars.mds.yandex.net/get-autoru-vos/2023653/190c234c9c9714651f6bdd78adfe28b8/584x438n',
        'https://avatars.mds.yandex.net/get-autoru-vos/11395092/89d354ba1f009aed1310003629fcba19/584x438n',
        'https://avatars.mds.yandex.net/get-autoru-vos/11368337/299b2a3bc5dbb935194dfaa6b681bf1a/584x438n',
        'https://avatars.mds.yandex.net/get-autoru-vos/11395092/b1cc1a6691ccaf554b874c94de9f8fec/584x438n',
    ]

    useEffect(() => {
        if (images) {
            setImgsBase(JSON?.parse(images))
        }
    }, [images])

    return (
        <div className={styles.gallery} >
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                
                {imgsBase.map((src, index) => (
                    <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center' }} >
                        <Image
                            src={src}
                            width={1000}
                            height={1000}
                            sizes="100vw"
                            style={{ height: '470px', width: 'auto', userSelect: 'none' }}
                            alt="car"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    )
}

export default GalleryCar
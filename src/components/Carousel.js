import React, { useState } from 'react';

const images = [
    { id: 1, imageUrl: 'https://t3.ftcdn.net/jpg/06/10/68/10/360_F_610681083_M6XlAUkKj0I9ykA0Iz1ysOTCsNvpU5Vw.jpg' },
    { id: 2, imageUrl: 'https://t4.ftcdn.net/jpg/05/65/36/03/360_F_565360370_LrWWCTxczrmwqpsPYPljiFyE4gFqpecr.jpg' },
    { id: 3, imageUrl: 'https://t3.ftcdn.net/jpg/05/63/70/98/360_F_563709848_OdMVkfRpOZbSsy6bFBkthhJzleFxM7Cn.jpg' },
    { id: 3, imageUrl: ' https://t4.ftcdn.net/jpg/01/77/47/67/360_F_177476718_VWfYMWCzK32bfPI308wZljGHvAUYSJcn.jpg' },
]

const Carousel = () => {
    const [currentItem, setCurrentItem] = useState(0);

    const handlePrev = () => {
        if (currentItem === 0) {
            setCurrentItem(images.length - 1);
        } else {
            setCurrentItem(currentItem - 1);
        }
    };
    const handleNext = () => {
        if (currentItem === images.length - 1) {
            // setCurrentItem(0);
            alert('end of images')
        } else {
            setCurrentItem(currentItem + 1);
        }
    };

    return (
        <div>
            <h3 onClick={handlePrev}>Prev</h3>
            <img src={images[currentItem].imageUrl} alt='image' />
            <h3 onClick={handleNext}>Next</h3>
        </div>
    )
}

export default Carousel;
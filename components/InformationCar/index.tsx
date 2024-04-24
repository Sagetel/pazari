import React from 'react'
import styles from './style.module.scss'
function InformationCar() {
    const car = { brand: 'GAC', model: 'GS8', gear: 'Полный', transmission: 'Автоматическая', engine: 'Бензин', year: "2023", mileage: "10", type: 'cars', volume: '2', carBody: 'Внедорожник 5 дв.', price: '4199000 ', img: 'https://avatars.mds.yandex.net/get-autoru-vos/11395092/b1cc1a6691ccaf554b874c94de9f8fec/320x240' }
    const { brand, model, gear, transmission, engine, year, mileage, type, volume, carBody, price, img } = car
    return (
        <div className={styles.information}>
            <div className={styles.information__based}>
                <div className={styles.information__title}>
                    Основная информация
                </div>
                <div className={styles.information__table}>
                    <div className={styles.information__row}>
                        <div className={styles.information__name}>Марка</div>
                        <div className={styles.information__cell}>{brand}</div>
                    </div>
                    <div className={styles.information__row}>
                        <div className={styles.information__name}>Модель</div>
                        <div className={styles.information__cell}>{model}</div>
                    </div>
                    <div className={styles.information__row}>
                        <div className={styles.information__name}>Тип кузова</div>
                        <div className={styles.information__cell}>{carBody}</div>
                    </div>
                    <div className={styles.information__row}>
                        <div className={styles.information__name}>Год выпуска</div>
                        <div className={styles.information__cell}>{year}</div>
                    </div>
                    <div className={styles.information__row}>
                        <div className={styles.information__name}>Пробег</div>
                        <div className={styles.information__cell}>{mileage} км</div>
                    </div>
                    <div className={styles.information__row}>
                        <div className={styles.information__name}>Тип двигателя</div>
                        <div className={styles.information__cell}>{engine}</div>
                    </div>
                    <div className={styles.information__row}>
                        <div className={styles.information__name}>Коробка передач</div>
                        <div className={styles.information__cell}>{gear}</div>
                    </div>
                    <div className={styles.information__row}>
                        <div className={styles.information__name}>Трансмиссия</div>
                        <div className={styles.information__cell}>{transmission}</div>
                    </div>
                    <div className={styles.information__row}>
                        <div className={styles.information__name}>Объем двигателя</div>
                        <div className={styles.information__cell}>{volume} л</div>
                    </div>
                </div>
            </div>
            <div className={styles.information__description}>
                <div className={styles.information__title}>
                    Описание
                </div>
                <div className={styles.information__text}>
                    Автомобиль находится по адресу Выборгское шоссе 362.<br /><br />
                    ❗️ ЭПТС Действующий. ❗️ <br /><br />
                    ✅ 4WD, Японская коробка автомат AISIN<br /><br />
                    ✅ Акустика ALPINE<br /> <br />
                    ✅ Панорамная крыша<br /><br />
                    Продаю новый универсальный кроссовер GAC GS8, модель 2023 года выпуска. Автомобиль в идеальном состоянии, без пробега и еще на заводской гарантии. Мощный и экономичный 2.0-литровый турбированный двигатель обеспечивает отличную динамику и надежность. Комфортабельный салон с просторным и функциональным интерьером, оборудованным современными технологиями. Великолепный внешний вид автомобиля, выполненный в стильном дизайне с шикарными линиями. GS8 обладает множеством безопасных и интеллектуальных систем, что делает вождение максимально удобным и безопасным. Продается по привлекательной цене, которая устраивает любого покупателя. Отличная оснащенность автомобиля высококлассной аудио- и информационной системой, а также множеством опций для комфортного путешествия. GAC GS8 – это уникальная возможность приобрести новый кроссовер высшего качества по привлекательной цене. Звоните, чтобы сделать прекрасное авто вашим на самых выгодных условиях!
                </div>
            </div>
        </div>
    )
}

export default InformationCar
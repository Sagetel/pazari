export const optionsFields = [
    { name: 'Бренд', type: 'brand', value: '', variants: [' &#10006;&nbsp;&nbsp;&nbsp;Любой', 'BMW', 'Hyundai', 'Audi', 'Lada', 'Chery', 'Honda', 'Kia', 'Renault', 'Nissan', 'Skoda', 'Volfswagen'], typeInput: 'string' },
    { name: 'Модель', type: 'model', value: '', variants: ['&#10006;&nbsp;&nbsp;&nbsp;Любая', "M2", "X5", "3 Series", "Santa Fe", "Sonata", "Tucson", "A4", "Q5", "A6", "Vesta", "Granta", "Niva", "Tiggo 7", "Arrizo 5", "Tiggo 8", "Civic", "CR-V", "Accord", "Sportage", "Seltos", "Forte", "Clio", "Captur", "Koleos", "Qashqai", "X-Trail", "Altima", "Octavia", "Kodiaq", "Superb", "Golf", "Tiguan", "Passat"], typeInput: 'string' },
    { name: 'Двигатель', type: 'engine', value: '', variants: ['&#10006;&nbsp;&nbsp;&nbsp;Любой', 'Бензин', 'Дизель', 'Электро', 'Гибрид'], typeInput: 'string' },
    { name: 'Год от', type: 'yearMin', value: '', variants: ['Год от', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000', '1999', '1998', '1997', '1996', '1995', '1994', '1993', '1992', '1991', '1990'], typeInput: 'string' },
    { name: 'до', type: 'yearMax', value: '', variants: ['год до', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000', '1999', '1998', '1997', '1996', '1995', '1994', '1993', '1992', '1991', '1990'], typeInput: 'string' },
    { name: 'Привод', type: 'gear', value: '', variants: ['&#10006;&nbsp;&nbsp;&nbsp;Любой', 'Зданий', 'Передний', 'Полный'], typeInput: 'string' },
    { name: 'Объем от', type: 'volumeMin', value: '', variants: ['Объем от', '0.1л', '0.2л', '0.3л', '0.4л', '0.5л', '0.6л', '0.7л', '0.8л', '0.9л', '1л', '1.1л', '1.2л', '1.3л', '1.4л', '1.5л', '1.6л', '1.7л', '1.8л', '1.9л', '2л', '2.1л', '2.2л', '2.3л', '2.4л', '2.5л', '2.6л', '2.7л', '2.8л', '2.9л', '3л', '3.5л', '4л', '4.5л', '5л', '5.5л', '6л', '6.5л', '7л', '7.5л', '8л', '8.5л', '9л', '9.5л'], typeInput: 'string' },
    { name: 'Объем до', type: 'volumeMax', value: '', variants: ['Объем до', '0.1л', '0.2л', '0.3л', '0.4л', '0.5л', '0.6л', '0.7л', '0.8л', '0.9л', '1л', '1.1л', '1.2л', '1.3л', '1.4л', '1.5л', '1.6л', '1.7л', '1.8л', '1.9л', '2л', '2.1л', '2.2л', '2.3л', '2.4л', '2.5л', '2.6л', '2.7л', '2.8л', '2.9л', '3л', '3.5л', '4л', '4.5л', '5л', '5.5л', '6л', '6.5л', '7л', '7.5л', '8л', '8.5л', '9л', '9.5л'], typeInput: 'string' },
    { name: 'Коробка', type: 'transmission', value: '', variants: ['&#10006;&nbsp;&nbsp;&nbsp;Любая', 'Автоматическая', 'Робот', 'Механическая'], typeInput: 'string' },
    { name: 'Кузов', type: 'carBody', value: '', variants: ['&#10006;&nbsp;&nbsp;&nbsp;Любой', 'Седан', 'Хэтчбек', 'Хэтчбек 3 дв.', 'Хэтчбек 5 дв.', 'Купе', 'Лифтбек', 'Кабриолет', 'Пикап', 'Внедорожник', 'Внедорожник 3 дв.', 'Внедорожник 5 дв.', 'Минивен', 'Фургон'], typeInput: 'string' },
    { name: 'Пробег от, км', type: 'mileagemin', value: '', variants: [''], typeInput: 'number' },
    { name: 'до', type: 'mileageMax', value: '', variants: [''], typeInput: 'number' },
    { name: 'Цена от, ₽', type: 'priceMin', value: '', variants: [''], typeInput: 'number' },
    { name: 'до', type: 'priceMax', value: '', variants: [''], typeInput: 'number' },

]
export const featureFields = [
    { name: 'Бренд', type: 'brand', value: '', variants: [' &#10006;&nbsp;&nbsp;&nbsp;Любой', 'BMW', 'Hyundai', 'Audi', 'Lada', 'Chery', 'Honda', 'Kia', 'Renault', 'Nissan', 'Skoda', 'Volfswagen'], typeInput: 'string' },
    { name: 'Модель', type: 'model', value: '', variants: ['&#10006;&nbsp;&nbsp;&nbsp;Любая', "M2", "X5", "3 Series", "Santa Fe", "Sonata", "Tucson", "A4", "Q5", "A6", "Vesta", "Granta", "Niva", "Tiggo 7", "Arrizo 5", "Tiggo 8", "Civic", "CR-V", "Accord", "Sportage", "Seltos", "Forte", "Clio", "Captur", "Koleos", "Qashqai", "X-Trail", "Altima", "Octavia", "Kodiaq", "Superb", "Golf", "Tiguan", "Passat"], typeInput: 'string' },
    { name: 'Двигатель', type: 'engine', value: '', variants: ['&#10006;&nbsp;&nbsp;&nbsp;Любой', 'Бензин', 'Дизель', 'Электро', 'Гибрид'], typeInput: 'string' },
    { name: 'Год', type: 'year', value: '', variants: ['Год от', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000', '1999', '1998', '1997', '1996', '1995', '1994', '1993', '1992', '1991', '1990'], typeInput: 'string' },

    { name: 'Привод', type: 'gear', value: '', variants: ['&#10006;&nbsp;&nbsp;&nbsp;Любой', 'Зданий', 'Передний', 'Полный'], typeInput: 'string' },
    { name: 'Объем', type: 'volume', value: '', variants: ['Объем', '0.1л', '0.2л', '0.3л', '0.4л', '0.5л', '0.6л', '0.7л', '0.8л', '0.9л', '1л', '1.1л', '1.2л', '1.3л', '1.4л', '1.5л', '1.6л', '1.7л', '1.8л', '1.9л', '2л', '2.1л', '2.2л', '2.3л', '2.4л', '2.5л', '2.6л', '2.7л', '2.8л', '2.9л', '3л', '3.5л', '4л', '4.5л', '5л', '5.5л', '6л', '6.5л', '7л', '7.5л', '8л', '8.5л', '9л', '9.5л'], typeInput: 'string' },
    { name: 'Коробка', type: 'transmission', value: '', variants: ['&#10006;&nbsp;&nbsp;&nbsp;Любая', 'Автоматическая', 'Робот', 'Механическая'], typeInput: 'string' },
    { name: 'Кузов', type: 'carBody', value: '', variants: ['&#10006;&nbsp;&nbsp;&nbsp;Любой', 'Седан', 'Хэтчбек', 'Хэтчбек 3 дв.', 'Хэтчбек 5 дв.', 'Купе', 'Лифтбек', 'Кабриолет', 'Пикап', 'Внедорожник', 'Внедорожник 3 дв.', 'Внедорожник 5 дв.', 'Минивен', 'Фургон'], typeInput: 'string' },
    { name: 'Пробег, км', type: 'mileage', value: '', variants: [''], typeInput: 'number' },
    { name: 'Цена, ₽', type: 'price', value: '', variants: [''], typeInput: 'number' },
    { name: 'Фото', type: 'photo', value: '', variants: [''], typeInput: 'photo' },


    { name: 'Описание', type: 'description', value: '', variants: ['&#10006;&nbsp;&nbsp;&nbsp;Любой', 'Седан', 'Хэтчбек', 'Хэтчбек 3 дв.', 'Хэтчбек 5 дв.', 'Купе', 'Лифтбек', 'Кабриолет', 'Пикап', 'Внедорожник', 'Внедорожник 3 дв.', 'Внедорожник 5 дв.', 'Минивен', 'Фургон'], typeInput: 'textarea' },

]
export type OptionsFieldsInterface = {
    name: string;
    type: string;
    value: string;
    variants: string[];
    typeInput: string;
}
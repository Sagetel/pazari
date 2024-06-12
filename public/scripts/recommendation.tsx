import React from "react";
import { ApiCars, Rules } from "./interfaces";
import {
    checkVolume, checkYear, checkPrice, checkMileage, checkBrand, checkModel, checkHorse, checkEngine,
    checkGear, checkCarBody, checkTransmission
} from './recFunctions'
interface PropsInterface {
    rule: Rules;
    ads: ApiCars[];
    setCars: React.Dispatch<React.SetStateAction<ApiCars[]>>
}
export const recommendation = (props: PropsInterface) => {
    const { rule, ads, setCars } = props
    const checkFullCompliance = (ad: ApiCars) => {
        if ((rule.brand ? ad.information.brand === rule.brand : true) &&
            (rule.model ? ad.information.model === rule.model : true) &&
            (rule.gear ? ad.information.gear === rule.gear : true) &&
            (rule.transmission ? ad.information.transmission === rule.transmission : true) &&
            (rule.engine ? ad.information.engine === rule.engine : true) &&
            (rule.yearMin ? Number(ad.information.year) >= Number(rule.yearMin) : true) &&
            (rule.yearMax ? Number(ad.information.year) <= Number(rule.yearMax) : true) &&
            (rule.mileageMin ? Number(ad.information.mileage) >= Number(rule.mileageMin) : true) &&
            (rule.mileageMax ? Number(ad.information.mileage) <= Number(rule.mileageMax) : true) &&
            (rule.type ? ad.information.type === rule.type : true) &&
            (rule.volumeMin ? ad.information.volume >= rule.volumeMin : true) &&
            (rule.volumeMax ? ad.information.volume <= rule.volumeMax : true) &&
            (rule.carBody ? ad.information.carBody === rule.carBody : true) &&
            (rule.priceMin ? Number(ad.information.price) >= Number(rule.priceMin) : true) &&
            (rule.priceMax ? Number(ad.information.price) <= Number(rule.priceMax) : true)) {
            return true
        }
        else { return false }
    }
    const checkNoFullCompliance = (ad: ApiCars) => {
        const car = ad.information
        let counter = 0;
        counter = counter + checkVolume({ volume: car.volume, volumeMax: rule.volumeMax, volumeMin: rule.volumeMin })
        counter = counter + checkYear({ year: car.year, yearMax: rule.yearMax, yearMin: rule.yearMin })
        counter = counter + checkPrice({ price: car.price, priceMax: rule.priceMax, priceMin: rule.priceMin })
        counter = counter + checkMileage({ mileage: car.mileage, mileageMax: rule.mileageMax, mileageMin: rule.mileageMin })
        counter = counter + checkHorse({ horse: car.horse, horseMax: rule.horseMax, horseMin: rule.horseMin })
        counter = counter + checkBrand({ brand: car.brand, brandRule: rule.brand })
        counter = counter + checkModel({ model: car.model, modelRule: rule.model })
        counter = counter + checkEngine({ engine: car.engine, engineRule: rule.engine })
        counter = counter + checkGear({ gear: car.gear, gearRule: rule.gear })
        counter = counter + checkCarBody({ carBody: car.carBody, carBodyRule: rule.carBody })
        counter = counter + checkTransmission({ transmission: car.transmission, transmissionRule: rule.transmission })
        if (counter <= 6) { return true } else { return false }
    }
    const checkDemand = (ad: ApiCars) => {
        if (checkFullCompliance(ad)) { return true }
        if (checkNoFullCompliance(ad)) { return true }
    }
    const newCars = ads.filter(ad => checkDemand(ad))
    setCars(newCars)
}
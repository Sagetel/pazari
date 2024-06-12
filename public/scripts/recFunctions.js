export const checkVolume = (props) => {
    let { volume, volumeMax, volumeMin } = props
    volume = parseFloat(volume.replace(/[^\d.]/g, ""))
    volumeMin = parseFloat(volumeMin.replace(/[^\d.]/g, ""))
    volumeMax = parseFloat(volumeMax.replace(/[^\d.]/g, ""))
    if (volumeMin && volume - volumeMin < 0) {
        if (Math.abs(volume - volumeMin) > 0.5) { return 3 } else {
            if (Math.abs(volume - volumeMin) <= 0.5) { return 1 }
        }
    }
    if (volumeMax && volume - volumeMax > 0) {
        if (volume - volumeMax > 0.5) { return 3 } else {
            if (volume - volumeMax <= 0.5) { return 1 }
        }
    }
    return 0
}
export const checkYear = (props) => {
    let { year, yearMax, yearMin } = props
    year = parseFloat(year)
    yearMin = parseFloat(yearMin)
    yearMax = parseFloat(yearMax)
    if (yearMin && year - yearMin < 0) {
        if (Math.abs(year - yearMin) > 3) { return 3 } else {
            if (Math.abs(year - yearMin) <= 3) { return 1 }
        }
    }
    if (yearMax && year - yearMax > 0) {
        if (year - yearMax > 3) { return 3 } else {
            if (year - yearMax <= 3) { return 1 }
        }
    }
    return 0
}
export const checkPrice = (props) => {
    let { price, priceMax, priceMin } = props
    price = parseFloat(price)
    priceMin = parseFloat(priceMin)
    priceMax = parseFloat(priceMax)
    if (priceMin && price - priceMin < 0) {
        if (Math.abs(price - priceMin) > 1000000) { return 3 }
        else {
            if (Math.abs(price - priceMin) > 500000) { return 2 }
            else {
                if (Math.abs(price - priceMin) <= 500000) { return 1 }
            }
        }
    }
    if (priceMax && price - priceMax > 0) {
        if (price - priceMax > 1000000) { return 5 }
        else {
            if (price - priceMax > 500000) { return 3 }
            else {
                if (price - priceMax <= 500000) { return 1 }
            }
        }
    }
    return 0
}
export const checkMileage = (props) => {
    let { mileage, mileageMax, mileageMin } = props
    mileage = parseFloat(mileage)
    mileageMin = parseFloat(mileageMin)
    mileageMax = parseFloat(mileageMax)
    if (mileageMin && mileage - mileageMin < 0) {
        if (Math.abs(mileage - mileageMin) > 50000) { return 1 } else {
            if (Math.abs(mileage - mileageMin) <= 50000) { return 3 }
        }
    }
    if (mileageMax && mileage - mileageMax > 0) {
        if (mileage - mileageMax > 50000) { return 3 } else {
            if (mileage - mileageMax <= 50000) { return 1 }
        }
    }
    return 0
}
export const checkHorse = (props) => {
    let { horse, horseMax, horseMin } = props
    horse = parseFloat(horse)
    horseMin = parseFloat(horseMin)
    horseMax = parseFloat(horseMax)
    if (horseMin && horse - horseMin < 0) {
        if (Math.abs(horse - horseMin) > 30) { return 3 } else {
            if (Math.abs(horse - horseMin) <= 30) { return 1 }
        }
    }
    if (horseMax && horse - horseMax > 0) {
        if (horse - horseMax > 30) { return 3 } else {
            if (horse - horseMax <= 30) { return 1 }
        }
    }
    return 0
}

export const checkBrand = (props) => {
    let { brand, brandRule } = props
    if (!brandRule) return 0
    if (brand != brandRule) {
        return 2
    } else {
        return 0
    }
}
export const checkModel = (props) => {
    let { model, modelRule } = props
    if (!modelRule) return 0
    if (model != modelRule) {
        return 1
    } else {
        return 0
    }
}
export const checkEngine = (props) => {
    let { engine, engineRule } = props
    if (!engineRule) return 0
    if (engine != engineRule) {
        return 2
    } else {
        return 0
    }
}
export const checkGear = (props) => {
    let { gear, gearRule } = props
    if (!gearRule) return 0
    if (gear != gearRule) {
        return 1
    } else {
        return 0
    }
}
export const checkCarBody = (props) => {
    let { carBody, carBodyRule } = props
    if (!carBodyRule) return 0
    if (carBody != carBodyRule) {
        return 2
    } else {
        return 0
    }
}
export const checkTransmission = (props) => {
    let { transmission, transmissionRule } = props
    if (!transmissionRule) return 0
    if (transmission != transmissionRule) {
        return 2
    } else {
        return 0
    }
}

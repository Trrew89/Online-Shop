import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Refrigerator'},
            {id: 2, name: 'Smartphones'}
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id:2, name:'Appel'}
        ]
        this._devices = [
            {id: 1, name: "Iphone 12 pro", price: 900, rating: 5, img: `https://d10cggh4v5dmy2.cloudfront.net/media/catalog/product/cache/17faa7f491c70ff08effdc50b0fd4c4b/i/p/iphone_12_pro_max_silver_full_cover_7db0.jpg`},
            {id: 2, name: "Iphone 12 pro", price: 900, rating: 5, img: `https://d10cggh4v5dmy2.cloudfront.net/media/catalog/product/cache/17faa7f491c70ff08effdc50b0fd4c4b/i/p/iphone_12_pro_max_silver_full_cover_7db0.jpg`},
            {id: 3, name: "Iphone 12 pro", price: 900, rating: 5, img: `https://d10cggh4v5dmy2.cloudfront.net/media/catalog/product/cache/17faa7f491c70ff08effdc50b0fd4c4b/i/p/iphone_12_pro_max_silver_full_cover_7db0.jpg`},
            {id: 4, name: "Iphone 12 pro", price: 900, rating: 5, img: `https://d10cggh4v5dmy2.cloudfront.net/media/catalog/product/cache/17faa7f491c70ff08effdc50b0fd4c4b/i/p/iphone_12_pro_max_silver_full_cover_7db0.jpg`},
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types  
    }

    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
}
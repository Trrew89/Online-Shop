import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Refrigerators'},
            {id: 2, name: 'Smartphones'},
            {id: 3, name: 'Laptops'},
            {id: 4, name: 'TV'}
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name:'Apple'},
            {id: 3, name: 'Lenovo'},
            {id: 4, name:'Xiaomi'},
        ]
        this._devices = [
            {id: 1, name: "Iphone 12 pro", price: 900, rating: 5, img: `https://d10cggh4v5dmy2.cloudfront.net/media/catalog/product/cache/17faa7f491c70ff08effdc50b0fd4c4b/i/p/iphone_12_pro_max_silver_full_cover_7db0.jpg`},
            {id: 2, name: "Iphone 12 pro", price: 900, rating: 5, img: `https://d10cggh4v5dmy2.cloudfront.net/media/catalog/product/cache/17faa7f491c70ff08effdc50b0fd4c4b/i/p/iphone_12_pro_max_silver_full_cover_7db0.jpg`},
            {id: 3, name: "Iphone 12 pro", price: 900, rating: 5, img: `https://d10cggh4v5dmy2.cloudfront.net/media/catalog/product/cache/17faa7f491c70ff08effdc50b0fd4c4b/i/p/iphone_12_pro_max_silver_full_cover_7db0.jpg`},
            {id: 4, name: "Iphone 12 pro", price: 900, rating: 5, img: `https://d10cggh4v5dmy2.cloudfront.net/media/catalog/product/cache/17faa7f491c70ff08effdc50b0fd4c4b/i/p/iphone_12_pro_max_silver_full_cover_7db0.jpg`},
            {id: 5, name: "Iphone 12 pro", price: 900, rating: 5, img: `https://d10cggh4v5dmy2.cloudfront.net/media/catalog/product/cache/17faa7f491c70ff08effdc50b0fd4c4b/i/p/iphone_12_pro_max_silver_full_cover_7db0.jpg`},
            {id: 6, name: "Iphone 12 pro", price: 900, rating: 5, img: `https://d10cggh4v5dmy2.cloudfront.net/media/catalog/product/cache/17faa7f491c70ff08effdc50b0fd4c4b/i/p/iphone_12_pro_max_silver_full_cover_7db0.jpg`},
            {id: 7, name: "Iphone 12 pro", price: 900, rating: 5, img: `https://d10cggh4v5dmy2.cloudfront.net/media/catalog/product/cache/17faa7f491c70ff08effdc50b0fd4c4b/i/p/iphone_12_pro_max_silver_full_cover_7db0.jpg`},
            {id: 8, name: "Iphone 12 pro", price: 900, rating: 5, img: `https://d10cggh4v5dmy2.cloudfront.net/media/catalog/product/cache/17faa7f491c70ff08effdc50b0fd4c4b/i/p/iphone_12_pro_max_silver_full_cover_7db0.jpg`},
            {id: 9, name: "Iphone 12 pro", price: 900, rating: 5, img: `https://d10cggh4v5dmy2.cloudfront.net/media/catalog/product/cache/17faa7f491c70ff08effdc50b0fd4c4b/i/p/iphone_12_pro_max_silver_full_cover_7db0.jpg`},
            {id: 10, name: "Iphone 12 pro", price: 900, rating: 5, img: `https://d10cggh4v5dmy2.cloudfront.net/media/catalog/product/cache/17faa7f491c70ff08effdc50b0fd4c4b/i/p/iphone_12_pro_max_silver_full_cover_7db0.jpg`},
            {id: 11, name: "Iphone 12 pro", price: 900, rating: 5, img: `https://d10cggh4v5dmy2.cloudfront.net/media/catalog/product/cache/17faa7f491c70ff08effdc50b0fd4c4b/i/p/iphone_12_pro_max_silver_full_cover_7db0.jpg`},
            {id: 12, name: "Iphone 12 pro", price: 900, rating: 5, img: `https://d10cggh4v5dmy2.cloudfront.net/media/catalog/product/cache/17faa7f491c70ff08effdc50b0fd4c4b/i/p/iphone_12_pro_max_silver_full_cover_7db0.jpg`},
        
        ]
        this._selectedType = {}
        this._selectedBrand = {}
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
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
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
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}
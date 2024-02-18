interface NavigtaionType {
    language : 'id' | 'en'
}

interface HeroOneType {
    id : number,
    title : string,
    desc : string,
    imgSrc : string,
}

interface BannerType {
    id : number,
    title_1 : string,
    title_2? : string,
    subtitle? : string,
    price? : string,
    currency? : string,
    text_info? : string,
    phone_numbers? : any[],
    points? : any[],
    background : string,
}

interface FooterType {
    address : string,
    no_telepon : string,
    email_1 : string,
    email_2 : string,
    facebook : string,
    twitter : string,
    instagram : string,
    wa_1 : string,
    wa_2 :string,
    copyright :string,
}

interface AboutOneType {
    title : string,
    subtitle :string,
    paragraph : string,
    sideImage : string
}

interface FeatureType {
    id : number,
    title : string,
    description : string,
    icon : string
}

interface ArticleThumbnailType {
    id : number,
    title : string,
    category : string,
    imageUrl : string,
    publishedDate : string,
    slug : string
}

interface ProductIndexType {
    title : string,
    subtitle : string,
    imageUrl : string
}


interface SingleBlogType {
    title : string,
    publishedDate : string,
    category : string,
    tags : string[],
}
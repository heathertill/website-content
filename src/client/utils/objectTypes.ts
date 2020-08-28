export interface About {
    userid: number,
    entryHistory: string,
    aboutYou: string,
    expSkills: string,
    portStyle: string,
    highlight: string,
    qualifications: string,
    serviceProd: string
}

export interface Client {
    userid: number,
    firstName: string,
    lastName: string,
    workNumber: string,
    cellNumber: string,
    email: string
}

export interface Brand {
    purpose: string,
    audience: string,
    competition: string,
    siteAction: string,
    tagLine: string,
    greatness: string,
}

export interface Contact {
    address: string,
    email: string,
    workPhone: string,
    otherPhone: string,
    linkedin: string,
    insta: string,
    facebook: string,
    otherSocial: string
}

export interface Landing {
    siteEntry: string,
    branding: string,
    callToAction: string,
    simWebFunc: string,
}

export interface SEOContent {
    knownFor: string,
    found: string,
    blog: string,
    socialMedia: string,
    emailCamp: string,
    emailService: string
}

export interface Site {
    webName: string,
    hostName: string,
    domain: string,
    siteManager: string,
    updateFreq: string,
    budget: string,
    completion: string
}

export interface Style {
    logo: string,
    style: string,
    color: string,
    standards: string,
    printMaterials: string,
    fonts: string,
    photoService: string,
    websites: string,
    webLikesDis: string,
    features: string
}

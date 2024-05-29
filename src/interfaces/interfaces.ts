export interface BlogID {
    id: string
    title: string
    description: string
    image_Url: string
    blogById?: BlogByID;
}
export interface BlogByID {
    description?: string;
    descriptionTwo?: string;
    titleOne?: string;
    oneText?: string;
    oneTextTwo?: string;
    titleTwo?: string;
    twoText?: string;
    twoTextTwo?: string;
    titleThree?: string;
    threeText?: string;
    threeTextTwo?: string;
    titleFour?: string;
    fourText?: string;
    fourTextTwo?: string;
}
export interface ClassProp {
    className: string
}

export interface Params {
    params: Blog
}

export interface Blog {
    blog: "consejos" | "curiosidades" | "enfermedades";
    id?: { id: string }
}





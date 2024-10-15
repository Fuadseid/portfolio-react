export const getImage =(path)=>{
    return new URL(`./asset//${path}`, import.meta.url).href;
}  

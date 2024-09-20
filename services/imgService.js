export const getUserImageSrc = imgPath => {
    if(imgPath){
        return {uri: imgPath}
    }else{
        return require('../assets/images/defaultUser.png')
    }
}
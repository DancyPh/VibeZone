export const getUserImageSrc = imgPath => {
    if(imgPath){
        return {uri: imgPath}
    }else{
        return require('../assets/images/defaultUser.png')
    }
}

export const uploadFile = async (folderName, fileUri, isImage = true) => {
    try{
        let fileName = getFilePath(folderName, isImage);
    }catch(e){
        console.log("file upload fails: " , e);
        return {success: false, msg: "can not upload media"};
    }
}

export const getFilePath = (folderName, isImage) => {
    return `/${folderName}/${(new Date()).getTime()}${isImage? '.png' : '.mp4'}`;
}
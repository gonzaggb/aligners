function isImage(fileExtension) {
    const ext = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'];
    console.log(ext.includes(fileExtension.toLowerCase()))
    return ext.includes(fileExtension.toLowerCase());
}


module.exports = { isImage }
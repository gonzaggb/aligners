function isImage(fileExtension) {
    const ext = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'];
    return ext.includes(fileExtension.toLowerCase());
}


module.exports = { isImage }
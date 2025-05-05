export function transformToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    if (
      (file && file.type.match("image.*")) ||
      file.type.match("application/pdf") ||
      file.type.match("application/postscript") ||
      file.type.match("")
    ) {
      fileReader.readAsDataURL(file);
    }

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}


export function replaceImgNot64(item) {
  return item.includes("data:image/jpeg;base64,")
    ? item.replace("data:image/jpeg;base64,", "")
    : item.includes("data:image/png;base64,")
    ? item.replace("data:image/png;base64,", "")
    : item.includes("data:application/pdf;base64,")
    ? item.replace("data:application/pdf;base64,", "")
    : item.includes("data:image/jpg;base64,")
    ? item.replace("data:image/jpg;base64,", "")
    : item.includes("data:image/svg+xml;base64,")
    ? item.replace("data:image/svg+xml;base64,", "")
    : item.includes("data:application/octet-stream;base64,")
    ? item.replace("data:application/octet-stream;base64,", "")
    : item.includes("data:application/postscript;base64,")
    ? item.replace("data:application/postscript;base64,", "")
    : item.includes("data:application/zip;base64,")
    ? item.replace("data:application/zip;base64,", "")
    : item;
}
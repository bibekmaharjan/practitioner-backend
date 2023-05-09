import B2 from 'backblaze-b2';

const b2 = new B2({
  applicationKeyId: process.env.B2_APPLICATION_KEY_ID,
  applicationKey: process.env.B2_APPLICATION_KEY,
});

const uploadImageToB2 = async (imageFile, bucketId) => {
  await b2.authorize();

  const fileData = imageFile.buffer;
  const fileName = imageFile.originalname;
  const contentType = imageFile.mimetype;
  const uploadUrl = await b2.getUploadUrl({
    bucketId,
  });

  const fileInfo = await b2.uploadFile({
    data: fileData,
    mime: contentType,
    fileName: fileName,
    uploadUrl: uploadUrl.data.uploadUrl,
    uploadAuthToken: uploadUrl.data.authorizationToken,
  });

  console.log('Image uploaded to Backblaze B2 Cloud Storage:', fileInfo);
};

export default uploadImageToB2;

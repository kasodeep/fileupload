const path = require("path");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors/index");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

/**
 * This function is used to upload the images/ files on local device like your 💻.
 */
const uploadProductImageLocal = async (req, res) => {
  // check if file exists
  if (!req.files) {
    throw new CustomError.BadRequestError("No file Uploaded");
  }

  // Taking the File
  const productImage = req.files.image;

  // check format
  if (!productImage.mimetype.startsWith("image")) {
    throw new CustomError.BadRequestError("Please Upload the Image");
  }

  // check image size
  const maxSize = 1024 * 1024 * 10;
  if (productImage.size > maxSize) {
    throw new CustomError.BadRequestError(
      "Please upload image smaller than 10MB",
    );
  }

  // Upload the image in the local folder on the server using the mv method.
  const imagePath = path.join(
    __dirname,
    "../public/uploads/" + `${productImage.name}`,
  );
  await productImage.mv(imagePath);

  // To see the image : localhost:5000/uploads/${productImage.name}
  return res
    .status(StatusCodes.OK)
    .json({ image: { src: `/uploads/${productImage.name}` } });
};

/**
 * This function is used to upload the files on a cloud platform at present cloudinary.
 */
const uploadProductImage = async (req, res) => {
  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: "File_Upload",
    },
  );

  // Delete the temp files from the server.
  fs.unlinkSync(req.files.image.tempFilePath);

  // Return the url where the image is stored on the cloud : secure_url
  return res.status(StatusCodes.OK).json({ image: { src: result.secure_url } });
};

module.exports = { uploadProductImage, uploadProductImageLocal };

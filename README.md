## Image and PDF Uploading with Cloudinary:

In this application we are uploading image to the local server as well as to a cloud storage like cloudinary.

It is useful for any production application to store the images of products, users, posts on cloud rather than on personal storage.

For running this code you need to have an cloudinary account and the three .env variables in order to communicate with your cloud database.

The varibles are :
```bash 
CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SECRET
```

_You can start by cloning this repository and then provide the env variables listed above along with your MONGODB_URL in an .env file_

The product model is just a sample to understand how we can store the url as string in any Schema.

### Open Terminal an Run

```bash
npm i && npm start
```

_After this make the api request from postman or any other client and provide files in the body with name image._

[Link of the pdf uploaded](https://res.cloudinary.com/deepkcloud/image/upload/v1677844753/File_Upload/tmp-2-1677844699698_fckfgg.pdf)

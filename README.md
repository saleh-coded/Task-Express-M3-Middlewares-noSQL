# Blog Api ✍️

## Instructions

- Fork and clone [this repository](https://github.com/JoinCODED/Task-Express-M3-Middlewares-noSQL) to your `Development` folder.

### Not Found Middleware

Create a middleware that handles requests to non-existing paths.

1. Create a middleware method before the `listen` method.
2. This middleware should end the response with a `404` status code and a message that says `Path Not Found`.
3. Test your middleware by sending a request to a non-existing path, for example `/whatever`.

### Error Handling Middleware

Create a middleware that handles all the errors in your application.

1. Pass four arguments to your middleware's function: `err`, `req`, `res` and `next`.
2. Set the response status to the error object's status. If it doesn't have a status, give it a default status of `500`.
3. Send an object with the message from the error object as a JSON response. If the error object doesn't have a message, give it the following default message `Internal Server Error`.

### Fetch Post Function

In `controllers.js`, create a function called `fetchPost` that handles finding a post from the database by its ID.

1. Pass this function two arguments: `postId` `next`.
2. In a `try catch` statement, fetch the post by passing `postId` to `findById` if it exist.
3. Return the found post.
4. In your `catch` block, pass the error to `next` to trigger the error handling middleware.
5. Don't forget to export your function.


## More Middlewares

### Morgan Setup

1. Install [morgan](https://www.npmjs.com/package/morgan)

```shell
$ npm install morgan
```

2. In `app.js`, create a variable called morgan.
3. Configure your express application to use morgan using the `dev` format.

### Cors

1. Install [cors](https://www.npmjs.com/package/cors)

```shell
$ npm install cors
```

2. In `app.js`, create a variable called cors.
3. Enable your app to use the cors middleware.

### Setup Media Folder

Create a route for the media files.

1. Create a folder called `media` for your images.
2. In `app.js`, create a route with the path `/media`.
3. Join `media` to the directory path `__dirname` using `join` and pass it to `express.static`.
4. Test your route by putting any image in the `media` folder, then in your browser go to `localhost:8000/media/<image_name>`.
5. Add `media` to your `.gitignore` file.

### Setup Upload Middleware

Set up the upload middleware using multer.

1. Install multer

```shell
$ npm install multer
```

2. Create a directory called `middleware` in your root of your application directory, then within the `middleware` folder, create a file called `multer.js`.

3. In this file `multer.js`, copy paste the following code:

```js
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./media",
  filename: (req, file, cb) => {
    cb(null, `${+new Date()}${file.originalname}`);
  },
});

const upload = multer({
  storage,
});

module.exports = upload;
```

4. In `posts.routes.js`, require the newly created `multer` middleware.

```js
const upload = require("../../middleware/multer");
```

5. Include the `upload` middleware before the `postsCreate` controller route.

6. Specify that `single` images are uploaded only and the field name is `image`.

### Uploading Images

1. In `postsCreate` controller method in the `posts.controllers.js`, check if an image was uploaded by checking if `req.file` exists.
2. If a file is uploaded, save the path in the body as `req.body.image` before the post instance is created.
3. In the `PostSchema`, add a new property called image of type `String`.
4. Test your post create api using postman.
5. Try to access the image from the post through the browser.

## Bonus

### 🍋 Slug Middleware

Create a custom middleware when creating a blog that generates a slug for the blog title and adds it to the request.

### 🌶 Validation Middleware

Use a validation middleware [library](https://www.npmjs.com/package/express-validation).

Validate that the `title` argument contains letters and not only numbers, and does not exceed 40 character.

# Headless VTEX e-commerce using Next.Js

Hey there! How is it going?

This project was made with two intentions in mind. The first intention would be to measure the disparity between static pages and dynamic pages that are exactly the same using Next.Js as the main framework and Google's PageSpeed as tool to measure. The second intention is fecthing private and public data from a VTEX account through severless functions!

## About this project

<img src="https://user-images.githubusercontent.com/67528242/107867249-14330f00-6e58-11eb-8544-93a11d950f3c.png" width="400px">

The image above is what you should be able to see as soon as you enter the page. If you are not seeing what the image above presents, it's likely that either the account does not exist anymore or changes were done to the collections fecthed. You might be able to still see the website through [/forever-static-home](https://e-com.pscruzzz.vercel.app/forever-static-home) wich is a page that never revalidates after it's build.

ALl in all, this project represents a headless VTEX e-commerce hosted at Vercel that uses Next.Js to produce static and also dynamic pages. To expose which route is dynamic or static, the image below is a print from this application build where you can check the routes characteristics.

<img src="https://user-images.githubusercontent.com/67528242/107867488-18602c00-6e5a-11eb-9e49-b88654cf40af.png">

If you feel so inclined, you can also test the severless function created in this exercise:

```js
  var axios = require("axios").default;

  var options = {method: 'GET', url: 'https://e-com.pscruzzz.vercel.app/api/collections/142'};

  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
```

### Or

```bash
  curl -X GET \
  https://e-com.pscruzzz.vercel.app/api/collections/142
```

### Or

[./api/collections/142](https://e-com.pscruzzz.vercel.app/api/collections/142)

## This application was built with

* [React](https://pt-br.reactjs.org/docs/hooks-intro.html)
* [Next.Js](https://nextjs.org/)
* [Framer-motion](https://www.framer.com/motion/)
* [Axios](https://github.com/axios/axios)
* [SWR](https://swr.vercel.app/)
* [VTEX API's](https://developers.vtex.com/vtex-developer-docs/reference/get-to-know-vtex-apis)
* [Styled-Components](https://styled-components.com/)
* [Typescript](https://www.typescriptlang.org/)
* [Hosted in Vercel](vercel.com)

## Results

When it comes to Desktop, there were no big differences (3 points diffenrence), this fact is likely related to cached request responses that accelarated the dynamic page results, without cache, the results should have larger disparity:
* [Dynamic Desktop Page](https://developers.google.com/speed/pagespeed/insights/?hl=pt-br&url=https%3A%2F%2Fe-com.pscruzzz.vercel.app%2Fdynamic-product%2F142&tab=desktop)
* [Static Desktop Page](https://developers.google.com/speed/pagespeed/insights/?hl=pt-br&url=https%3A%2F%2Fe-com.pscruzzz.vercel.app%2Fstatic-product%2F142&tab=desktop)

Mobile wise, there was a 10 point disparity between the pages:
* [Dynamic Mobile Page](https://developers.google.com/speed/pagespeed/insights/?hl=pt-br&url=https%3A%2F%2Fe-com.pscruzzz.vercel.app%2Fdynamic-product%2F142&tab=mobile)
* [Static Mobile Page](https://developers.google.com/speed/pagespeed/insights/?hl=pt-br&url=https%3A%2F%2Fe-com.pscruzzz.vercel.app%2Fstatic-product%2F142&tab=mobile)

## Contact

* Email: pscruzzz@outlook.com
* Linkedin: https://www.linkedin.com/in/pedrosantoscruz/
* Project Link: [https://e-com.pscruzzz.vercel.app/](https://e-com.pscruzzz.vercel.app/)
* Figma Link: [https://www.figma.com/file/2agANeWFMY89asFVCOPl90/E-com?node-id=0%3A1](https://www.figma.com/file/2agANeWFMY89asFVCOPl90/E-com?node-id=0%3A1)

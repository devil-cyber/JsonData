## Guide
- Below you'll find examples using Fetch API but you can JSONPlaceholder with any other language.

- You can copy paste the code in your browser console to quickly test [Josn Data](https://jsondata-4a1d1.web.app/).

## Getting a resource
```javascript
// For getting one post from database

fetch('https://babbaer.herokuapp.com/post/one')
  .then((response) => response.json())
  .then((json) => console.log(json))

  // For getting all post from database

fetch('https://babbaer.herokuapp.com/post/All')
  .then((response) => response.json())
  .then((json) => console.log(json))
  
```
👇 Output :
```javascript
// Output for One post
{
  
 "_id": 5f8f9579f964cf043c89683e
   "id": 1
   "userId": "1"
   "title": "Get Started with API"
   "body": "API is love"
}

//Output for All post

[
  { id: 1, title: '...' /* ... */ },
  { id: 2, title: '...' /* ... */ },
  { id: 3, title: '...' /* ... */ },
  /* ... */
  { id: 100, title: '...' /* ... */ },
]
```
## Creating a resource
```javascript
fetch('https://babbaer.herokuapp.com/post/create', {
  method: 'POST',
  body: JSON.stringify({
    title: 'mani',
    body: 'kant',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json))

```
👇 Output :
```javascript
{
  id: 101,
  title: 'mani',
  body: 'kant',
  userId: 1
}

```
## Listing nested resources
```javascript
// This is one level of nesting using the postId 

fetch('https://babbaer.herokuapp.com/post/one/create')
  .then((response) => response.json())
  .then((json) => console.log(json))
```
## For contribution mail me at: [Say Hi!](mailto:mani2474695@gmail.com)
## Happy Coding 😎

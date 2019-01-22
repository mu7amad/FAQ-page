const Questions = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then(response =>
    response.json()
  );
};
const faq = Questions();
export default faq;

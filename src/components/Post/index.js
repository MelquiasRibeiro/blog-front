import React from 'react';


function Post({content}) {
  return (
  <div class=" w-80 bg-white rounded-xl overflow-hidden shadow-lg">
    <img src="https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80" alt="asdas"/>
    <div class="p-5">
      {
      content.categories.map(category=>(
        <span class="inline-flex bg-purple-600 text-white rounded-full h-6 px-3 justify-center items-center text-">{category}</span>
      ))
      }
      <h1 class="text-2xl font-bold">{content.title}</h1>
      <p class="mt-2 text-lg font-semibold text-gray-600">by {content.userName}</p>
      <p class="mt-1 text-gray-500 font-">{content.description}
      </p>
      <a href="/" class="py-2 px-3 mt-4 px-6 text-white bg-green-500 inline-block rounded hover:shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer">Read More</a>
    </div>
  </div>
  );
}

export default Post;
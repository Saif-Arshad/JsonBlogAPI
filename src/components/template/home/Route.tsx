import React from 'react';
import { Tabs } from '@/components/ui/tabs';
import Snippets from '../codeSnippets/Snippets';
import { getAllBlogs,getById,searchBlog,categoryBlog,paginationBlog,paginationLimitBlog } from '@/utils/endpoints'
function Route() {

  const tabs = [
    {
      title: "All Blogs",
      value: "All Blogs",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl py-10 px-3 md:p-10  bg-gradient-to-br from-purple-700 to-blue-900">
          <h1 className="text-xl md:text-4xl font-bold text-white ">Get All the blogs</h1>
          <h3 className="text-lg  md:text-xl font-semibold mt-4 text-white">Method :  GET</h3>
          <Snippets
          code={getAllBlogs}      
          text="Get All Items"
          />
          <p className='sm:text-lg text-white mt-10'>
          This endpoint retrieves a comprehensive list of all blog posts available in the Dummy JSON Blog API. It is designed to provide developers with an array of dummy blog data that can be used for testing and development purposes. The data returned by this endpoint includes various attributes of each blog post, such as the title, content, author, date, and other relevant metadata.
            </p>
        </div>
      ),
    },
    {
      title: "Get Single",
      value: "Get Single",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl py-10 px-3 md:p-10  bg-gradient-to-br from-purple-700 to-blue-900">
          <h1 className="text-xl md:text-4xl font-bold text-white ">Get Single blogs</h1>
          <h3 className="text-lg  md:text-xl font-semibold mt-4 text-white">Method :  GET</h3>
         
          <Snippets
          code={getById}      
          text="Get single"
          />
          <p className='sm:text-lg text-white mt-10'>
          This endpoint retrieves the details of a specific blog post identified by its unique ID from the Dummy JSON Blog API. It is designed to provide developers with a precise piece of dummy blog data that can be used for testing and development purposes. The data returned by this endpoint includes various attributes of the specified blog post, such as the title, content, author, date, and other relevant metadata.
            </p>
        </div>
      ),
    },
    {
      title: "Search item",
      value: "Search Item",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl py-10 px-3 md:p-10  bg-gradient-to-br from-purple-700 to-blue-900">
          <h1 className="text-xl md:text-4xl font-bold text-white ">Search Blogs</h1>
          <h3 className="text-lg  md:text-xl font-semibold mt-4 text-white">Method :  GET</h3>
       
          <Snippets
          code={searchBlog}      
          text="Search"
          />
          <p className='sm:text-lg text-white mt-10'>
          This endpoint retrieves a list of blog posts that match the specified title query from the Dummy JSON Blog API. It is designed to provide developers with a filtered array of dummy blog data based on the blog title, which can be used for testing and development purposes. The data returned by this endpoint includes various attributes of each matching blog post, such as the title, content, author, date, and other relevant metadata.
            </p>
        </div>
      ),
    },
    {
      title: "Get Category",
      value: "Get Category",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl py-10 px-3 md:p-10  bg-gradient-to-br from-purple-700 to-blue-900">
          <h1 className="text-xl md:text-4xl font-bold text-white ">Get Blog by Category </h1>
          <h3 className="text-lg  md:text-xl font-semibold mt-4 text-white">Method :  GET</h3>
         
          <Snippets
          code={categoryBlog}      
          text="Blog by category"
          />
          <p className='sm:text-lg text-white mt-10'>
          This endpoint retrieves a list of blog posts that belong to a specified category from the Dummy JSON Blog API. It is designed to provide developers with a filtered array of dummy blog data based on the blog category, which can be used for testing and development purposes. The data returned by this endpoint includes various attributes of each blog post within the specified category, such as the title, content, author, date, and other relevant metadata.
            </p>
        </div>
      ),
    },
    {
      title: "Pagination",
      value: "Pagination",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl py-10 px-3 md:p-10  bg-gradient-to-br from-purple-700 to-blue-900">
          <h1 className="text-xl md:text-4xl font-bold text-white ">Get Blogs with Pagination  </h1>
          <h3 className="text-lg  md:text-xl font-semibold mt-4 text-white">Method :  GET</h3>
         
          <Snippets
          code={paginationBlog}      
          text="Pagination"
          />
          <p className='sm:text-lg text-white mt-10'>
          This endpoint retrieves a paginated list of blog posts from the Dummy JSON Blog API. It is designed to provide developers with a manageable subset of dummy blog data that can be used for testing and development purposes. The data returned by this endpoint includes various attributes of each blog post, such as the title, content, author, date, and other relevant metadata. Pagination helps in handling large datasets by dividing the results into pages.
            </p>
        </div>
      ),
    },
    {
      title: "Pagination with Limit",
      value: "Pagination with Limit",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl py-10 px-3 md:py-10  bg-gradient-to-br from-purple-700 to-blue-900">
          <h1 className="text-xl md:text-4xl font-bold text-white ">Get Blogs with Pagination and limit  </h1>
          <h3 className="text-lg  md:text-xl font-semibold mt-4 text-white">Method :  GET</h3>
        
          <Snippets
          code={paginationLimitBlog}      
          text="Pagination with Limit"
          />
          <p className='sm:text-lg text-white mt-10'>
          This endpoint retrieves a paginated list of blog posts from the Dummy JSON Blog API. It allows developers to navigate through the collection of blog posts in a structured manner, enhancing user experience and optimizing resource consumption. By default, the endpoint returns a subset of blog posts with a limit of 8 posts per page. However, developers can specify the desired page number and the number of blog posts per page using optional query parameters. 
            </p>
        </div>
      ),
    },

  ];
 
  return (
    <>
 <div className="h-[56rem] sm:h-[45rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>

    </>

  );
}

export default Route;

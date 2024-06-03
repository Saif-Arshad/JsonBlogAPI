import React from 'react'
import ExampleCode from '../home/ExampleCode'

function HowItWorks() {
  return (
    <div>
  <h1 className='text-xl md:text-4xl font-bold mt-9'>
    How it Work
  </h1>
 < p className='mt-8 text-lg md:text-xl'>
 The Dummy JSON Blog API provides developers with a reliable source of dummy blog data for testing and development purposes. It offers a set of RESTful endpoints to interact with the blog data, allowing users to retrieve, search, and paginate through blog posts. With realistic and high-quality dummy data, developers can build, test, and perfect their applications with ease.
 </p>
 <h3 className="text-xl font-semibold mt-5 mb-2">Features</h3>
            <ul className="list-disc ml-8 mb-4">
                <li><strong>Realistic Data:</strong> The API delivers lifelike blog posts, comments, and user profiles, ensuring that your development and testing environments closely mimic real-world scenarios.</li>
                <li><strong>Easy Integration:</strong> With simple and intuitive API endpoints, developers can integrate the Dummy JSON Blog API into their projects quickly and effortlessly, saving valuable development time.</li>
                <li><strong>Customizable Requests:</strong> Tailor the data to fit specific testing needs with flexible query parameters, such as searching by title or retrieving paginated results.</li>
                <li><strong>Secure and Reliable:</strong> Built with modern security practices, the API ensures a safe testing environment, allowing developers to focus on development without worrying about data integrity or security issues.</li>
                <li><strong>Free to Use:</strong> The Dummy JSON Blog API is free to use, with generous usage limits and no hidden fees, making it an ideal choice for both solo developers and larger teams.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">Endpoints</h3>
            <ol className="list-decimal ml-8 mb-4">
                <li><strong>Get All Blogs:</strong> Retrieve a comprehensive list of all blog posts available in the API.</li>
                <li><strong>Get Single Blog by ID:</strong> Retrieve the details of a specific blog post identified by its unique ID.</li>
                <li><strong>Search Blog by Title:</strong> Search for blog posts that match the specified title query.</li>
                <li><strong>Get Blogs by Category:</strong> Retrieve a list of blog posts that belong to a specified category.</li>
                <li><strong>Get Paginated Blogs:</strong> Retrieve a paginated list of blog posts, allowing users to navigate through the collection efficiently.</li>
            </ol>

            <h3 className="text-xl font-semibold mb-2">Usage</h3>
            <ul className="list-disc ml-8 mb-4">
                <li>Populating front-end applications with sample blog data.</li>
                <li>Testing the display and functionality of blog-related features.</li>
                <li>Simulating real-world scenarios in development and staging environments.</li>
            </ul>

    <ExampleCode/>
    </div>
  )
}

export default HowItWorks
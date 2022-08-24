import React from 'react'
import { useSelector } from 'react-redux'
import Blog from './Blog';

const Blogs = () => {
    const blogs = useSelector((state)=> state.blogs);
    const {category,name, search}= useSelector((state)=> state.filters);


    let noSearchFilter;
  let noAuthorCategoryFilter = [];

  if (search) {
    noSearchFilter = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (
    search &&
    name &&
    category &&
    blogs
      .filter((blog) => {
        if (category) {
          return blog.category === category;
        }
        return true;
      })
      .filter((blog) => {
        if (name) {
          return blog.author === name;
        }
        return true;
      })
      .filter((blog) => {
        if (search) {
          return blog.title.toLowerCase().includes(search.toLowerCase());
        }
        return true;
      }).length === 0
  ) {

    noAuthorCategoryFilter = [];
  }

  console.log(noSearchFilter);
    

    

    
  return (
    <>

        <section
            className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8"
        >
            <div className="absolute inset-0">
                <div className="bg-white h-1/3 sm:h-2/3"></div>
            </div>
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">ALL BLOGS ARE HERE</h2>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Lorem ipsum dolor sit amet consectetur, adipisicingelit. Ipsa libero labore natus atque, ducimus sed.</p>
                </div>

                {/* <!-- card grid  --> */}
                {(search && noSearchFilter.length <= 0) || (search && name && category && noAuthorCategoryFilter.length <= 0) ? ( <div className="text-center">
      <h2 className="text-xl tracking-tight font-bold text-gray-500 sm:text-4xl">
        NO RESULTS FOUND FOR{" "}
        <span className="font-extrabold text-gray-900">
          {search ? search : null}
          {category ? (search ? ` , ${category}` : category) : null}
          {name ? (category ? ` , ${name}` : name) : null}
        </span>
      </h2>
    </div>): (<div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                    {/* <!-- single card  --> */}
                    {blogs.filter((blog) => {
                if (category) {
                  return blog.category === category;
                }
                return true;
              })
              .filter((blog) => {
                if (name) {
                  return blog.name === name;
                }
                return true;
              })
              .filter((blog) => {
                if (search) {
                  return blog.title
                    .toLowerCase()
                    .includes(search.toLowerCase());
                }
                return true;
              })
              
              .map((blog) => {
                return <Blog key={blog.id} {...blog} />;
              })}
                  

                   
                </div>)}
            </div>
        </section>
    </>
  )
}

export default Blogs
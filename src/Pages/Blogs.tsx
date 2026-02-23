import { AppBar } from "../Components/AppBar"
import { BlogCard } from "../Components/BlogCard"
import { getBlogs } from "../hooks/Getallblogs"

export const Blogs = () => {
    const { loading, blogs } = getBlogs()
    if (loading) {
        return (
            <div>
                Loading...
            </div>
        )
    }
    return (
        <div >

            <div className="border-b border-slate-200">
                <AppBar />

            </div>
            {blogs.map(blog => {
                console.log(blog.id);
                
                return (
                    <div key={blog.id} className="flex justify-center ">
                        <div>
                            <BlogCard 
                                id={blog.id}
                                name={blog.author.name}
                                title={blog.title}
                                content={blog.content}
                                publishedDate="21 Feb 2025"
                            />
                            {/* <BlogCard
                                name="Lokesh"
                                title="this is about me"
                                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, consequatur commodi? Saepe ratione repudiandae quas nesciunt! Eligendi explicabo voluptatibus sit repellendus facere assumenda ullam maxime quae distinctio tempora! Id voluptates in nihil suscipit ut officiis, sit expedita ipsa assumenda, et aliquid amet rerum perferendis. Impedit, quisquam ut. Id quas quis aliquam debitis nam tenetur numquam rerum dolore dolores praesentium, similique, fuga obcaecati hic velit aliquid neque natus possimus, fugiat sed odit officia quam nobis. Voluptas ipsa saepe nihil ullam ipsam veritatis ut obcaecati voluptatem repellendus atque commodi sint, aliquid debitis eveniet odit iusto nostrum dignissimos nemo eaque esse, repudiandae aliquam."
                                publishedDate="21 Feb 2025"
                            />
                            <BlogCard
                                name="Lokesh"
                                title="this is about me"
                                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, consequatur commodi? Saepe ratione repudiandae quas nesciunt! Eligendi explicabo voluptatibus sit repellendus facere assumenda ullam maxime quae distinctio tempora! Id voluptates in nihil suscipit ut officiis, sit expedita ipsa assumenda, et aliquid amet rerum perferendis. Impedit, quisquam ut. Id quas quis aliquam debitis nam tenetur numquam rerum dolore dolores praesentium, similique, fuga obcaecati hic velit aliquid neque natus possimus, fugiat sed odit officia quam nobis. Voluptas ipsa saepe nihil ullam ipsam veritatis ut obcaecati voluptatem repellendus atque commodi sint, aliquid debitis eveniet odit iusto nostrum dignissimos nemo eaque esse, repudiandae aliquam."
                                publishedDate="21 Feb 2025"
                            /> */}
                        </div>
                    </div>
                )
            })}

        </div>
    )
}
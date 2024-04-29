import { Link } from "react-router-dom"
import { Appbar } from "../components/appbar"

export const Projects = () =>{
    return <div className="bg-slate-300 h-full">
        <Appbar/>
        <div className=" flex justify-center my-8 text-2xl underline">
            Projects
        </div>
        <div className="flex justify-center">
        <div className="grid grid-cols-2">
            <div className="mx-40">
                <div className="text-xl underline">
                    ProjectName
                </div>
               
                <div className="my-20 py-20">
                    <div className="my-20">
                    1. PAYMENT_APP
                   <Link to= "https://github.com/gunasekharsai/PAYMENT_APP_NEXT_TURBOREPO" className="text-xm text-sky-600 px-5	">Link</Link>
                    </div>
                 
                </div>
               

                <div className="my-20 py-20">
                    <div className="my-20">
                    2. Medium_Blogging_website
                    <Link to= "https://github.com/gunasekharsai/Medium_Blog" className="text-xm text-sky-600 px-5">Link</Link>
                    </div>
                </div>
               

                <div className=" my-20 py-20">
                    <div className="my-20 py-10">
                    3. PAYTM_CLONE
                    <Link to= "https://github.com/gunasekharsai/PAYMENT_APP_NEXT_TURBOREPO" className="text-xm text-sky-600 px-5	">Link</Link>
                    </div>
                 
                   
                </div>
               

            </div>
            <div className="mx-40 ">
                <div className="underline text-xl pl-20">
                   About
                </div>
                <div className="flex justify-center text-xm pt-5  ">
                <div className="grid grid-cols-1">
                    <div className="my-1">
                    ● Developed a comprehensive payment application utilizing Next.js for frontend and backend frameworks.
                    </div >
                    <div className="my-1">
                    ● Implemented features enabling users to transfer funds between accounts and add money to their wallets.
                    </div>
                    <div className="my-1">
                    ● Integrated PostgreSQL with Prisma ORM for efficient data management and retrieval.
                    </div>
                    <div className="my-1">
                    ● Utilized NextAuth for seamless authentication, ensuring robust security measures.
                    </div>
                    <div className="my-1">
                    ● Engineered a bank webhook system to verify payment status, ensuring real-time updates for users.
                    </div>
                    <div className="my-1">
                    ● employing TurboRepo for efficient project management.
                    </div>
                    <div className="my-2">
                    ● USED Tailwind CSS to style the frontend.
                    </div>
                    <div className="my-2">
                    ● Technologies: NEXT.js, PostgreSQL with Prisma ORM, Turborepo, NextAuth, Express.js, Tailwind CSS.
                    </div>
               
                </div>
                </div>
                <div className="flex justify-center text-xm my-8 ">
                <div className="grid grid-cols-1">
                    <div className="my-1">
                    ● Implemented the feature for users to create and publish posts, allowing for dynamic content creation.
                     </div >
                    <div className="my-1">
                    ● Enabled access for logged-in users to view posts created by other users, fostering a community-driven platform.
                     </div>
                    <div className="my-1">
                    ● Developed the frontend user interface using React.js, ensuring responsive design and smooth user experience across
devices
                    </div>
                    <div className="my-1">
                    ● Implemented user authentication functionalities for signup and signin using secure protocols.
                    </div>
                    <div className="my-1">
                    ● Designed and developed backend APIs using Hono, enabling communication between frontend and database.
                    </div>
                    <div className="my-1">
                    ● Integrated Postgres database to store and retrieve user information and blog content efficiently.
                    </div>
                    <div className="my-2">
                    ● Collaborated with team members to ensure seamless deployment on Vercel and Cloudflare networks, optimizing
performance and reliability.
                    </div>
                    <div className="my-2">
                    ● Technologies: REACT, POSTGRESsql, Prisma as ORM, HONO.
                    </div>
               
                </div>
                </div>

                <div className="flex justify-center text-xm my-8 ">
                <div className="grid grid-cols-1">
                    <div className="my-1">
                    ● enables multiple users to create accounts, maintain balances, and conduct transactions within the application.
                     </div >
                    <div className="my-1">
                    ● Enabled users to search and interact with other users within the application, facilitating seamless transactions between accounts.
                    </div>
                    <div className="my-1">
                    ● Designed and developed the frontend user interface using React.js, ensuring a responsive and intuitive user
experience.
                    </div>
                    <div className="my-1">
                    ● Implemented user authentication and authorization mechanisms using JWT, ensuring secure access to user
accounts and transactions.
                    </div>
                    <div className="my-1">
                    ● Utilized Express.js to develop RESTful APIs for handling user registration, login and balance management.
                    </div>
                    <div className="my-1">
                    ● Integrated Zod for data validation to ensure the integrity and consistency of user inputs and transaction data.
                    </div>
               
                </div>
                </div>
                
            </div>
        </div>
        </div>
       
    </div>
}




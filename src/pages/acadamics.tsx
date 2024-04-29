import { Appbar } from "../components/appbar"

export const Acadamics = ()=>{
    return <div className="bg-slate-300 h-screen">
        <Appbar/>
        <div className="flex justify-center my-10 text-2xl underline">
        Academics
        </div>
        <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-40 ztext-1xl">
                <div className="">
                    <div className="text-xl underline">
                        YEAR
                    </div>
                    <div className="my-3">
                        2019
                    </div>
                    <div className="my-3">
                        2021
                    </div>
                    <div className="my-3">
                        2025
                    </div>
                </div>
                <div className="">
                    <div className="text-xl underline">
                       COLLEGE
                    </div>
                    
                    <div className="my-3">
                        SURESH HIGH SCHOOL
                    </div>
                    <div className="my-3">
                        NARAYANA JUNIOUR COLLEGE
                    </div>
                    <div className="my-3">
                        IIT MADARS
                    </div>
                </div>

                <div className="">
                    <div className="text-xl underline">
                        GPA / %
                    </div>
                  
                    <div className="my-3">
                        10
                    </div>
                    <div className="my-3">
                        95.6%
                    </div>
                    <div className="my-3">
                        7.19
                    </div>
                </div>

            </div>
           
        </div>
        <div className="flex justify-center my-10 text-2xl underline">
        Scholastic achievements
        </div>
        <div className=" flex flex-col">
            <div className="flex justify-center my-3 text-xl">
            1 Secured All India Rank Of 9,430 in Joint Entrance Examination Advanced '21
            </div>

            <div className="flex justify-center my-3 text-xl">
            2 Secured 99.1 percentile in Joint Entrance Examination Mains '21.
            </div>

            <div className=" flex justify-center my-3 text-xl">
            3 Secured rank of 230 in Comed, Karnataka Engineering Entrance Examination.
            </div>
        </div>

        
    </div>
}
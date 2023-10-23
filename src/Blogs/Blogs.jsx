

const Blogs = () => {
    return (
        <div className="mt-20 h-[120vh]">
            <div className="text-center mb-10">
                <h1 className="text-green-600 text-3xl font-bold underline">Blogs</h1>
               <p className="text-gray-400">Here two parts are technology and electronics blogs</p>
            </div>
            <div className="flex gap-20">
                <div className="w-[450px] h-[400px] border border-1">
                    <img className="h-[170px] w-[450px]" src="https://i.ibb.co/zhX9K90/tech.jpg" />
                    <h1 className=" text-2xl pt-2 pl-4 text-black font-bold text-center underline">TECHNOLOGY</h1>
                    <div className="pl-4 pr-4 text-sm font-semibold text-gray-600">Technology encompasses a wide range of knowledge, tools, systems, and techniques used to create, control, and utilize resources for practical purposes. It involves the application of scientific principles to solve problems and meet human needs.Technology has numerous benefits, including:Improved efficiency and productivity.Enhanced communication and connectivity.Advances in medicine and healthcare.Increased convenience and quality of life.Solutions to complex problems, such as environmental challenges.</div>
                </div>
                <div className="w-[450px] h-[400px] border border-1">
                    <img className="h-[170px] w-[450px]" src="https://i.ibb.co/FXxrLj4/elec.jpg" />
                    <h1 className=" text-2xl pt-2 pl-4 text-black font-bold text-center underline">ELECTRONICS</h1>
                    <div className="pl-4 pr-4 text-sm font-semibold text-gray-600">Electronics is a branch of science and technology that deals with the flow of electrons and their behavior within various devices and systems. It involves the study, design, and application of electrical circuits and components to manipulate and control electrical currents for various purposes. Electronics involves designing electrical circuits to perform specific functions. Engineers and technicians use components to create circuits that can perform tasks like amplifying signals, filtering noise, and controlling devices.</div>
                </div>
               
            </div>
        </div>
    );
};

export default Blogs;
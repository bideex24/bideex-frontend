type ModalProps = {
    isFilterOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};
const FilterBanner: React.FC<ModalProps> = ({ isFilterOpen, onClose }) => {
    if (!isFilterOpen) return null;
    return (
       <div className="lg:max-w-4xl mx-auto">
         <div className={`relative inset-0 transition-colors z-10 ${isFilterOpen ? "visible" : "invisible"}`}>
            <div className="bg-white h-[300px] lg:w-[400px] mx-auto md:mr-56 lg:ml-[500px] rounded">
                <div className="px-4 py-4">
                    <h1 className="text-xl text-black font-bold">Categories</h1>
                    <select className="w-20 md:w-32 mr-3 px-3 text-black rounded h-12 bg-white">
                        <option className="px-6 text-black" value="">All Categories</option>
                        <option value="option1 text-black">Buy</option>
                        <option value="option2 text-black">Sell</option>
                        <option value="option3 text-black">Rent</option>
                        <option value="option3 text-black">Job</option>
                    </select>
                    <hr />
                    <h2 className="text-xl font-bold text-black">Location</h2>
                    <select className="w-20 md:w-32 mr-3 px-3 text-black rounded h-12 bg-white">
                        <option className="px-6 text-black" value="">All location</option>
                        <option value="option1 text-black">Bangladesh</option>
                        <option value="option2 text-black">India</option>
                        <option value="option3 text-black">Japan</option>
                        <option value="option3 text-black">America</option>
                    </select>
                    <hr />
                    <h2 className="text-xl font-bold text-black">Status</h2>
                    <div className="flex gap-5">
                        <div className="flex gap-1">
                        <input className="" type="checkbox" name="" id="" />
                        <p className="text-black">New</p>
                        </div>
                        <div className="flex gap-1">
                        <input type="checkbox" name="" id="" />
                        <p className="text-black">Up Comming</p>
                        </div>
                        <div className="flex gap-1">
                        <input type="checkbox" name="" id="" />
                        <p className="text-black">Done</p>
                        </div>
                    </div>
                    <div className="flex justify-center mt-5 gap-5">
                    <button onClick={onClose} className=" bg-none px-4 py-2 text-black hover:bg-secondary hover:text-white rounded-xl">Cancel</button>
                    <button className="bg-none bg-secondary px-4 py-2 hover:bg-secondary text-white rounded-xl">Save</button>
                    </div>
                </div>
            </div>
        </div>
       </div>
    )
};

export default FilterBanner;

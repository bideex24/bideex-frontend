import job from '../../../../public/job.svg';
import rent from '../../../../public/rent.svg';
import earning from '../../../../public/earning.svg';
const Add = () => {
    return (
        <section className="my-6 max-w-6xl mx-auto bg-white">
            <div className="grid grid-cols-1 md:ml-10 lg:ml-0 md:grid-cols-3 lg:grid-cols-3 gap-1">
                <div className="card card-side bg-white">
                    <div className="card-body text-black rounded-2xl">
                        <img className='h-56' src={earning} alt="" />
                        <h2 className="text-lg ">Start Earning Money with Bideex</h2>
                        <p>Do you have something to sell? Post your first ad on Bideex and start earning today! It’s quick, easy, and connects you to a global audience.</p>
                        <div className="card-actions justify-center">
                            <button className="btn bg-addbtnearning hover:bg-addbtnearning text-white rounded-full border-none">Post Free Ad On Bideex</button>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-white">
                    <div className="card-body text-black rounded-2xl">
                    <img className='h-56' src={job} alt="" />
                        <h2 className="text-lg ">Employers & Job Seekers on Bideex</h2>
                        <p>Are you hiring or looking for a job? Bideex offers thousands of job listings and access to millions of CVs from candidates around the world. Find your perfect match with Bideex.</p>
                        <div className="card-actions justify-center">
                            <button className="btn bg-addbtnjob hover:bg-addbtnjob text-white rounded-full border-none">Post Free Job On Bideex</button>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-white">
                    <div className="card-body text-black rounded-2xl">
                    <img className='h-56' src={rent} alt="" />
                        <h2 className="text-lg">Quick Rent with Bideex</h2>
                        <p>Need to rent something fast? Post your rental ad on Bideex and connect with people worldwide who are looking for properties or items to rent. Renting out has never been easier with Bideex.</p>
                        <div className="card-actions justify-center">
                            <button className="btn bg-addbtnrent hover:bg-addbtnrent text-white rounded-full border-none">Post Free Rental On Bideex</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Add;

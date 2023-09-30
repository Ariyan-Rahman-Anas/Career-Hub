const Banner = () => {
    return (
      <div className="pt-12 mb-16 bg-slate-50  mx-auto px-2 md:px-[10%] grid md:grid-cols-7 place-items-center gap-4">
        <div className="col-span-3">
          <h1 className="text-4xl font-semibold">
            <p className="bg-gradient-to-r from-slate-400 to-slate-800 text-transparent bg-clip-text">
              One Step Closer To Your
            </p>
            <p className="my-1 text-6xl ">Dream Job</p>
          </h1>
          <p className="text-sm mt-5 mb-3 ">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
                </p>
                <button className="px-3 py-2 rounded-md bg-gradient-to-r from-slate-400 to-slate-800 text-white  ">Get Started</button>
        </div>
        <div className="col-span-4 flex md:items-center justify-center md:justify-end ">
          <img className="md:w-[74.5%] " src="/public/owner/3.png" alt="" />
        </div>
      </div>
    );
};

export default Banner;
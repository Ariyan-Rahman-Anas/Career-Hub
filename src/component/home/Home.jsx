import Banner from "../banner/Banner";
import CategoryList from "../category list/CategoryList";
import FeaturedJobs from "../featured jobs/FeaturedJobs";

const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <div className="md:w-4/5 mx-auto px-2 md:px-0">
          <CategoryList></CategoryList>
          <FeaturedJobs></FeaturedJobs>
        </div>
      </div>
    );
};

export default Home;
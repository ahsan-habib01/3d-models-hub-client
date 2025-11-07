import { useLoaderData } from 'react-router';
import { ModelCard } from '../../components/ModelCard';
import { use, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Loading from '../../components/Loading';

const AllModels = () => {
  const data = useLoaderData();
  const [models, setModels] = useState(data);
  const {loading, setLoading} = use(AuthContext)
  // console.log(data);

  const handleSearch = e => {
    e.preventDefault();
    const search_text = e.target.search.value;
    console.log(search_text);
    setLoading(true)

    fetch(`https://3d-model-server.vercel.app/search?search=${search_text}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setModels(data);
        setLoading(false);
      });
  };

  if (loading) {
    return <Loading></Loading>
  }

  return (
    <div className="mx-2">
      <div className="text-2xl text-center font-bold"> All Models</div>
      <p className=" text-center">Explore 3d models.</p>

      <form onSubmit={handleSearch} className="my-10 text-center ">
        <div className="join ">
          <div className="">
            <label className="input  join-item rounded-l-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="text"
                name="search"
                placeholder="Search a Model"
                
              />
            </label>
          </div>
          <button className="btn btn-secondary join-item rounded-r-full">
            Search
          </button>
        </div>
      </form>

      <div className="grid grid-cols-3 lg:grid-cols-4 gap-3">
        {models.map(model => (
          <ModelCard key={model._id} model={model} />
        ))}
      </div>
    </div>
  );
};

export default AllModels;

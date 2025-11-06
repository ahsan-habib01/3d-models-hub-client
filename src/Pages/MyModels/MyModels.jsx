import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Loading from '../../components/Loading';
import { ModelCard } from '../../components/ModelCard';

const MyModels = () => {
  const { user, loading, setLoading } = use(AuthContext);
  const [models, setModels] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/my-models?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        setModels(data);
        setLoading(false);
      });
  }, [user, setLoading]);

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="mx-2">
      <div className="text-2xl text-center font-bold"> My Models</div>
      <p className=" text-center mb-10 ">Explore my 3D models</p>

      <div className="grid grid-cols-3 lg:grid-cols-4 gap-3">
        {models.map(model => (
          <ModelCard key={model._id} model={model} />
        ))}
      </div>
    </div>
  );
};

export default MyModels;

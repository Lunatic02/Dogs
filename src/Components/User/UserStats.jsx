import React, { useEffect } from 'react';
import Head from '../../Helper/Head';
import useFetch from '../../Hooks/useFetch';
import Loading from '../../Helper/Loading';
import Error from '../../Helper/Error';
import { STATS_GET } from '../../Hooks/api';
import UserStatsGraphs from './UserStatsGraphs';

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (data)
    return (
      <div>
        <Head title="Estátisticas" />
        <UserStatsGraphs data={data} />
      </div>
    );
  else return null;
};

export default UserStats;

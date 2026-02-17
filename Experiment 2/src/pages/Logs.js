import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLogs } from '../store/logsSlice';

const Logs = () => {
  const dispatch = useDispatch();
  const{data,status,error}=useSelector((state)=>state.logs);
  useEffect(() => {
    if (status==='idle'){
      dispatch(fetchLogs());
    }

  }, [status, dispatch]);
  if(status==='loading'){
    return <p>Loading...</p>;
  }else if(status==='failed'){
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Daily Logs(redux)</h2>
      <ul>
        {data.map((log) => (
          <li key={log.id}>
            {log.activity}: {log.carbon} kg CO2
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Logs;
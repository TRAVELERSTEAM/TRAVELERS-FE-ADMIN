import { getReferenceAll } from '@/api/reference/Reference';
import React from 'react';
import { useQuery } from 'react-query';

function Reference() {
  const { data } = useQuery('reference', getReferenceAll);
  console.log(data);
  return (
    <>
      <h2>자료실</h2>
    </>
  );
}

export default Reference;

import React, { useState, useEffect } from 'react';
import { getReferenceAll } from '@/api/reference/Reference';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { Contents } from '@/api/reference/Reference';

function Reference() {
  const [posts, setPosts] = useState<Contents[]>();

  const { data, isLoading, error } = useQuery('reference', getReferenceAll, {
    refetchOnWindowFocus: false,
  });

  const navigator = useNavigate();

  useEffect(() => {
    if (data?.contents.length !== 0) setPosts(data?.contents);
  }, [data]);

  if (isLoading) <p>Loading...</p>;
  if (error) <p>Error!!!</p>;
  return (
    <>
      <h2>자료실</h2>
      <button onClick={() => navigator('/dashboard/add-reference')} className="add-reference">
        + New
      </button>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일자</th>
          </tr>
        </thead>
        {posts ? (
          <tbody>
            {posts.map((post, index) => {
              return (
                <tr key={index}>
                  <td>{post.sequence}</td>
                  <td>{post.title}</td>
                  <td>{post.writer}</td>
                  <td>{post.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td colSpan={4}>등록된 게시글이 없습니다.</td>
            </tr>
          </tbody>
        )}
      </table>
    </>
  );
}

export default Reference;

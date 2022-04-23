import React from 'react'
import BlogContent from './BlogContent';
import styled from 'styled-components';
import BlogsSection from './BlogsSection';

const signoutadmin = () => {
    localStorage.setItem('admin',false);
    window.location.href = '/';
}

function AdminPage() {
  return (
    <Main>
        <button className='signoutadmin' onClick={signoutadmin}>Sign out</button>
        <BlogsSection/>
    </Main>
  )
}

export default AdminPage

const Main = styled.div`
    margin-left:40px;
    margin-right:40px;
`;
import React from 'react'

const signoutadmin = () => {
    localStorage.setItem('admin',false);
    window.location.href = '/';
}

function AdminPage() {
  return (
    <div>Hello
        <button className='signoutadmin' onClick={signoutadmin}>Sign out</button>
    </div>
  )
}

export default AdminPage
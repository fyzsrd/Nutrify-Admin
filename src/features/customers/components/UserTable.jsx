import React from 'react'
import { NavLink } from 'react-router'

const UserTable = () => {
    const userData = [
        {
            id:1,
            name: "Fayaz",
            Mobile: "94111141139",
            isVerified: true,
            isBlocked: false,

        },
        {
            id:2,
            name: "sardar",
            Mobile: "63132128528",
            isVerified: false,
            isBlocked: true,

        }
    ]

    return (
        <div className='overflow-x-auto'>
            <table className="min-w-full border-collapse rounded-lg shadow-md overflow-hidden text-sm">
  <thead className="bg-gray-100">
    <tr>
      <th className="px-4 py-2 text-left">
        <input type="checkbox" />
      </th>
      <th className="px-4 py-2 text-left font-semibold text-gray-700 uppercase text-xs">Sl No</th>
      <th className="px-4 py-2 text-left font-semibold text-gray-700 uppercase text-xs">Mobile</th>
      <th className="px-4 py-2 text-left font-semibold text-gray-700 uppercase text-xs">First Name</th>
      <th className="px-4 py-2 text-left font-semibold text-gray-700 uppercase text-xs">isVerified</th>
      <th className="px-4 py-2 text-left font-semibold text-gray-700 uppercase text-xs">isBlocked</th>
      <th className="px-4 py-2 text-left font-semibold text-gray-700 uppercase text-xs">Actions</th>
    </tr>
  </thead>
  <tbody>
    {userData.map((user, index) => (
      <tr key={user.id} className="odd:bg-white even:bg-gray-50 hover:bg-blue-50 transition">
        <td className="px-4 py-2">
          <input type="checkbox" />
        </td>
        <td className="px-4 py-2">{index + 1}</td>
        <td className="px-4 py-2">{user.Mobile}</td>
        <td className="px-4 py-2">{user.name}</td>
        <td className="px-4 py-2">
          {user.isVerified ? (
            <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
              Verified
            </span>
          ) : (
            <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
              Unverified
            </span>
          )}
        </td>
        <td className="px-4 py-2">
          {user.isBlocked ? (
            <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
              Yes
            </span>
          ) : (
            <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
              No
            </span>
          )}
        </td>
        <td className="px-4 py-2">
            <NavLink to={`${user.id}`}>
            <button className="px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded text-xs">
            View
          </button>
            </NavLink>
          
        </td>
      </tr>
    ))}
  </tbody>
</table>

        </div>
    )
}

export default UserTable
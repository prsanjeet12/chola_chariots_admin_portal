import React, { useState } from 'react';

const PermissionsPage: React.FC = () => {
  const [permissions, setPermissions] = useState<{
    [key: string]: boolean;
  }>({
    view: false,
    update: false,
    create: false,
    delete: false,
  });

  const roles = [
    'Admin',
    'Rider',
    'Driver',
    'Rides',
    'Ride Management',
    'Riders Booking',
    'Ride History',
    'Payment Method',
    'Support Number',
  ];

  const handleCheckboxChange = (permission: string) => {
    setPermissions({
      ...permissions,
      [permission]: !permissions[permission],
    });
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold text-center my-8">Permissions</h1>
      <div className="grid grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Permissions</h2>
          {Object.keys(permissions).map((permission) => (
            <div key={permission} className="flex items-center my-2">
              <input
                type="checkbox"
                id={permission}
                checked={permissions[permission]}
                onChange={() => handleCheckboxChange(permission)}
                className="mr-2 h-5 w-5 text-indigo-600"
              />
              <h1>Admin</h1>
              <label htmlFor={permission} className="text-gray-800">
                {permission}
              </label>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Roles</h2>
          <ul>
            {roles.map((role) => (
              <li key={role} className="text-gray-800">
                {role}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Permissions for Roles</h2>
          <table className="w-full">
            <thead>
              <tr>
                {Object.keys(permissions).map((permission) => (
                  <th key={permission} className="text-gray-800">
                    {permission}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {roles.map((role) => (
                <tr key={role}>
                  {Object.keys(permissions).map((permission) => (
                    <td key={permission} className="text-center">
                      <input
                        type="checkbox"
                        checked={permissions[permission]}
                        readOnly
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PermissionsPage;
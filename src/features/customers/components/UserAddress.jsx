import React from "react";

const UserAddress = () => {
  const userAddressData = [
    {
      _id: "651f0d1a12ab3c45b8e91a10",
      userId: "651e9bfa12ab3c45b8e91a01",
      firstName: "Rahul",
      lastName: "Sharma",
      mobileNumber: "9876543210",
      email: "rahul.sharma@example.com",
      altPhoneNo: "9123456789",
      pincode: "500001",
      city: "Hyderabad",
      state: "Telangana",
      addressLine: "123 Main Street, Near City Mall",
      landmark: "Beside Domino’s Pizza",
      addressType: "Home",
      defaultAddress: true,
    },
    {
      _id: "651f0d1a12ab3c45b8e91a11",
      userId: "651e9bfa12ab3c45b8e91a01",
      firstName: "Rahul",
      lastName: "Sharma",
      mobileNumber: "9876543210",
      email: "rahul.sharma@example.com",
      altPhoneNo: null,
      pincode: "560001",
      city: "Bangalore",
      state: "Karnataka",
      addressLine: "456 Office Park, MG Road",
      landmark: "Opposite Metro Station",
      addressType: "Work",
      defaultAddress: false,
    },
    {
      _id: "651f0d1a12ab3c45b8e91a12",
      userId: "651e9bfa12ab3c45b8e91a01",
      firstName: "Rahul",
      lastName: "Sharma",
      mobileNumber: "9876543210",
      email: "rahul.sharma@example.com",
      altPhoneNo: null,
      pincode: "400001",
      city: "Mumbai",
      state: "Maharashtra",
      addressLine: "789 Market Street",
      landmark: "Near Gateway of India",
      addressType: "Others",
      defaultAddress: false,
    },
  ];

  return (
    <div className="flex gap-4 overflow-x-auto pb-2">
      {userAddressData.map((a) => (
        <div
          key={a._id}
          className="min-w-[250px] border shadow-sm rounded-lg p-4 text-sm bg-gray-50"
        >
             <h3 className="font-medium mb-1">
            <strong>address ID:</strong> {a._id}</h3>
          <h3 className="font-medium mb-1">
            <strong>Name:</strong> {a.firstName} {a.lastName}
          </h3>
          <p className="text-gray-700">
            <strong>Mobile:</strong> {a.mobileNumber}
          </p>
          {a.altPhoneNo && (
            <p className="text-gray-700">
              <strong>Alt Phone:</strong> {a.altPhoneNo}
            </p>
          )}
          <p className="text-gray-700">
            <strong>Address:</strong> {a.addressLine}
          </p>
          {a.landmark && (
            <p className="text-gray-700">
              <strong>Landmark:</strong> {a.landmark}
            </p>
          )}
          <p className="text-gray-700">
            <strong>City:</strong> {a.city}
          </p>
          <p className="text-gray-700">
            <strong>State:</strong> {a.state}
          </p>
          <p className="text-gray-700">
            <strong>Pincode:</strong> {a.pincode}
          </p>
          <p className="text-gray-700">
            <strong>Type:</strong> {a.addressType}
          </p>

          {a.defaultAddress && (
            <p className="text-green-600 text-xs mt-2 font-medium">
              ✅ Default Address
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default UserAddress;

import React from 'react';

interface AccountUpdateProps {}

const AccountUpdate: React.FC<AccountUpdateProps> = () => {
  return (
    <div className="h-[200px] mt-[160px]
    font-poppins 
    p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-md mx-auto">
        <div>
          {/* <h2 className="font-semibold text-xl text-gray-600">Form</h2> */}

          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-2">
              <div className="text-gray-600">
                <p className="font-bold text-lg ">Account Information</p>
                <p>Please fill out the required fields.</p>
              </div>

              <div>
                <form className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-1">
                  <div>
                    <label htmlFor="username" className='font-semibold'>Username</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className='font-semibold'>Email Address</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder=""
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className='font-semibold'>Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="confirmPassword" className='font-semibold'>Confirm Password</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      className="h-10 
                      border mt-1 rounded px-4 
                      w-full bg-gray-50"
                    />
                  </div>

                  <div className="text-right">
                    <button className="bg-black hover:bg-black
                    
                    text-white  font-bold py-2 px-7 rounded">
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

       
       
      </div>
    </div>
  );
};

export default AccountUpdate;
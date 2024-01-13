export default function page() {
  return (
    <div className="container">
        <div className="signup_form">
            <div className="mt-5 bg-fuchsia-400 rounded-lg shadow-lg p-4 form_details" >
                <h1 className="text-center text-white font-medium">RESET PASSWORD</h1>
                <form className="space-y-6" action="#" method="POST">
                    <div className="form_split">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address:</label>
                        <div className="mt-2">
                        <input id="email" name="email" type="email" required placeholder="example@gmail.com" 
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                             ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div>
                        <button type="submit" 
                            className="flex w-full justify-center rounded-md bg-white px-3 py-1.5 
                            text-sm font-semibold leading-6 text-fuchsia-700 shadow-sm hover:bg-indigo-500 focus-visible:outline 
                            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:text-white ">
                                Reset Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

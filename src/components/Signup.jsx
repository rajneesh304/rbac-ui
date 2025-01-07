const Signup = () => {
    return (
        <div className='flex flex-col'>
            <form action="" className='flex flex-col'>
                <input type="text" name='username' id='username' className='block w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-400' placeholder='username' required />
                <input type="password" name='password' id='password' placeholder='password' className='block w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-400' />
                <button className='bg-purple-600 text-white py-3 px-6 rounded-md cursor-pointer transition-colors duration-30 hover:bg-purple-500'>submit</button>
                <p className="mt-4">Not registered? <a href="#" className="text-blue-500 hover:underline">Create an account</a>
                </p>
            </form>
        </div>
    )
}

export default Signup

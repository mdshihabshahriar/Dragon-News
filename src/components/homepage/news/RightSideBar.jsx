import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSideBar = () => {
    return (
        <div>
            <h2 className="text-lg font-bold mb-4">Login With</h2>
            <div className="flex flex-col gap-3">
                <button className="btn border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"><FaGoogle />Login with Google</button>
                <button className="btn border-black hover:bg-black hover:text-white"><FaGithub />Login with Github</button>
            </div>
        </div>
    );
};

export default RightSideBar;
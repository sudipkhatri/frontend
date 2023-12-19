import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function Error() {

    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
    <section className="py-6 border">
      <div className="container mx-auto flex gap-4 flex-col justify-center items-center">
        <div className="flex flex-col gap-5 items-center">
          <img
            className="rounded w-[100%] h-[400px]"
            src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
            alt="Error 404 page not found mernestate"
          />
          <div className="flex w-full justify-start items-start flex-col">
            <h3 className="text-lg font-bold">Look like you're lost</h3>

            <p className="text-lg py-2">
              The page you are looking for not avaible!
            </p>
            
            <NavLink
              to={isLoggedIn ? '/dash' : "/"}
              className="bg-indigo-600 w-[120px] pointer text-center p-2 rounded text-white my-2"
            >
              Go to Home
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

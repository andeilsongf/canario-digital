import React from "react";
import data from "./data";

type Props = {
  children: JSX.Element;
};

export function Header({ children }: Props) {
  return (
    <header className="max-w-7xl m-auto h-screen justify-between flex gap-20 py-7 flex-wrap">
        <span className="font-dm-sans font-bold mt-4">canário digital</span>
        <nav>
          <ul className="flex gap-10 self-start">
            {data.map((item) => {
              return (
                <li
                  key={item.id}
                  className="border rounded-full px-6 py-3 font-dm-sans"
                >
                  <a href={item.url}>{item.name}</a>
                </li>
              );
            })}
          </ul>
        </nav>

      {children}

    </header>
  );
}

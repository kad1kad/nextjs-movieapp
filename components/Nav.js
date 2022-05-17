import requests from "../utils/requests";
import { useRouter } from "next/router";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

function Nav() {
  const router = useRouter();

  return (
    <div className="flex text-sm px-3 space-x-8 overflow-x-scroll whitespace-nowrap scrollbar-hide md:px-20 md:text-lg md:space-x-20">
      {Object.entries(requests)
        .slice(0, 1)
        .map(([key, { title }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="transition duration-100 transform cursor-pointer last:pr-24 active:text-emerald-600"
          >
            {title}
          </h2>
        ))}

      <Menu>
        <MenuButton>
          Genres <ChevronDownIcon className="inline h-3 md:h-4" />{" "}
        </MenuButton>
        <MenuList className="!bg-slate-100/90 !border-0 ">
          {Object.entries(requests)
            .slice(2, 11)
            .sort()
            .map(([key, { title }]) => (
              <MenuItem
                className="text-md !text-slate-900"
                key={key}
                onClick={() => router.push(`/?genre=${key}`)}
              >
                <p>{title}</p>
              </MenuItem>
            ))}
        </MenuList>
      </Menu>
    </div>
  );
}

export default Nav;

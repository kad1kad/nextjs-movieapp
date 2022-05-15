import requests from "../utils/requests";
import { useRouter } from "next/router";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";

function Nav() {
  const router = useRouter();

  return (
    <div className="flex px-10 space-x-10 overflow-x-scroll text-xl sm:px-10 whitespace-nowrap sm:space-x-20 scrollbar-hide">
      {Object.entries(requests)
        .slice(0, 2)
        .map(([key, { title }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="transition duration-100 transform cursor-pointer last:pr-24 hover:scale-110 hover:text-white active:text-emerald-600"
          >
            {title}
          </h2>
        ))}

      <Menu>
        <MenuButton>Genres</MenuButton>
        <MenuList className="!bg-slate-100/90 !border-0 ">
          {Object.entries(requests)
            .slice(3, 11)
            .map(([key, { title }]) => (
              <MenuItem
                className="text-xl !text-slate-900"
                key={key}
                onClick={() => router.push(`/?genre=${key}`)}
              >
                {title}
              </MenuItem>
            ))}
        </MenuList>
      </Menu>
    </div>
  );
}

export default Nav;

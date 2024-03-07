"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Link } from "../../../navigation";

export const ComponentWithLinks = () => {
  const searchParams = useSearchParams();

  return (
    <div>
      <Link href={"/"}>Home</Link>
      <br />
      <Link href={"/?foo=bar"}>Foo</Link>
      <br />
      <Link href={{ pathname: "/", query: searchParams.toString() }}>
        Broken link
      </Link>
    </div>
  );
};

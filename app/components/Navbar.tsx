import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-white text-primary-content flex justify-between items-center p-4 px-8">
      {/* Left side */}
      <h1 className="text-2xl font-bold text-primary">Logo</h1>
      {/* Middle */}

      <ul className="flex justify-between items-center gap-4">
        <li>
          <Link href={"#"}>Home</Link>
        </li>
        <li>
          <Link href={"#"}>Courses</Link>
        </li>
        <li>
          <Link href={"#"}>About</Link>
        </li>
      </ul>

      {/* Right side */}
      <div>
        <button className="btn btn-primary">Login</button>
      </div>
    </div>
  );
};

export default Navbar;

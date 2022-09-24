export default function Navbar() {
  return (
    <div>
      <header class="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">
        <h1 class="p-4 border-b-2 border-green-500 border-opacity-0 text-lg font-semibold">Movie App</h1>

        <nav class="nav font-semibold text-lg">
          {/* <ul class="flex items-center">
            <li class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
              <a href="">Home</a>
            </li>
          </ul> */}
        </nav>
      </header>
    </div>
  );
}

import Home from "./src/home";
import Projects from "./src/projects";
import Tour from "./src/tour";

export default function Page() {
  return (
    <div className=" items-center justify-items-center  ">
      {/* <Login/> */}
      <Home />
      <Projects />
      <Tour/>
    </div>
  );
}

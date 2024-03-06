import imageTest from "../assets/image.png";
import chainIcon from "../assets/icons/chain.svg";
import githubIcon from "../assets/icons/github-small.svg";

export function PostProject() {
  return(
    <div className="rounded-2xl shadow-lg max-w-xs min-w-64">
      <img src={imageTest} alt="" />
      <div className="text-left gap-3 p-7 font-light">
        <h3 className="text-2xl font-medium">Project Tile goes here</h3>
        <p className="text-storm-dust-500 mt-4 mb-3">
          This is sample project description 
          random things are here in description 
          This is sample project lorem ipsum 
          generator for dummy content
        </p>
        <p className="text-prussian-900 mb-6">
          <strong>Tech stack:</strong> <span>HTML , JavaScript, SASS, React</span>
        </p>
        <div className="flex justify-between text-base">
          <div className="flex gap-2">
            <img src={chainIcon} alt="" />
            <a href="#" className="underline">Live Preview</a>
          </div>
          <div className="flex gap-2">
            <img src={githubIcon} alt="" />
            <a href="#" className="underline">View Code</a>
          </div>
        </div>
      </div>
    </div>
  );
}
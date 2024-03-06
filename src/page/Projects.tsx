import { PostProject } from "../components/PostProject";

export function Projects() {
  return(
    <div>
      <h2 className="text-prussian-900 font-bold text-4xl text-left mt-10 mb-6">Projetos</h2>
      <p className="text-lg text-left text-storm-dust-500">Projetos desenvolvidos até agora</p>
      <div className="mt-8 flex gap-x-12 gap-y-16 flex-wrap justify-start">
        <PostProject />
        <PostProject />
        <PostProject />
        <PostProject />
        <PostProject />
      </div>
    </div>
  );
}
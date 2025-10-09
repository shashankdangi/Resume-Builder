import Form from "./Form";

function ResumeBuildGrid() {
  return (
    <div className="px-5 py-6 flex flex-col max-w-[1200px] mx-auto">
      <h1 className="font-bold text-5xl mb-0 px-5 py-5">
        Enter Your Information
      </h1>
      <div>
        <div>
          <Form />
        </div>
        <div className="hidden">preview</div>
      </div>
    </div>
  );
}

export default ResumeBuildGrid;

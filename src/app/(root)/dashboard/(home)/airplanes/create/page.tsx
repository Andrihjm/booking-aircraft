import FormAirplanes from "@/app/form/form-airplanes";

const page = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="flex items-center justify-between">
          <h1 className="my-5 text-2xl font-bold">Tambahkan data airplanes</h1>
        </div>

        <FormAirplanes />
      </div>
    </>
  );
};

export default page;

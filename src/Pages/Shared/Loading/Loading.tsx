import { Oval } from "react-loader-spinner";
const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Oval
        visible={true}
        height="40"
        width="40"
        color="#FF435B"
        secondaryColor="#D1D5DB"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loading;

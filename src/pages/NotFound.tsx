import { useNavigate } from "react-router";
import { ButtonComponent } from "../components/genericComponents/ButtonComponent";

export const NotFound = () => {
  const navigator = useNavigate();
  return (
    <section className="mt-16 mb-20">
      <div className="flex gap-3 text-[14px]">
        <span className="text-[#0000003b]">Home</span> <span>/</span>
        404 Error
      </div>

      <div className="flex flex-col justify-center items-center mt-28">
        <h1 className="font-Inter text-[110px] font-medium">404 Not Found</h1>
        <p>Your visited page not found. You may go home page.</p>
        <div className="mt-20">
          <a onClick={() => navigator("/")}>
            <ButtonComponent text="Back to home page" width={254} />
          </a>
        </div>
      </div>
    </section>
  );
};

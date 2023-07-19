import { Link } from "@remix-run/react";

export default function StaticCard(props: any) {
  return (
    <section className="w-[100%] h-[180px] border-solid border-black border-2 rounded-[10px] overflow-hidden ">
      <Link to={props.to}>
        <div className="h-[20%] bg-gray-900 text-white text-center text-[20px] flex items-center justify-center ">
          {props.title}
        </div>
        <div className="h-[80%] bg-gray-200 text-justify p-4 box-border font-sans leading-5    ">
          {props.children}
        </div>
      </Link>
    </section>
  );
}

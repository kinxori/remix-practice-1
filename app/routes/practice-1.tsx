import { Link, useActionData, useLoaderData } from "@remix-run/react";
import favIcon from "~/assets/new-logo-kinxori.ico";
import SyntaxHighlighter from "react-syntax-highlighter";

const snippetLinkFunction = ` 
  // You have to import your file first

  import favIcon from "~/assets/new-logo-kinxori.ico";

  export const links = () => {
    return [
      {
        rel: "icon",
        href: favIcon,
      },
    ];
  };
`;

const snippetMetaFunction = `
  export const meta = () => {
    return [
      {
        title: "Practice 1",
      },
    ];
  };
`;

const snippetLoaderFunction = `
  // If you only have this in your route, you will have an API! 

  export const loader = async () => {
    const data = await (await fetch("https://rickandmortyapi.com/api/character/")).json();
    return data;
  };

  // If you add the component, you will have a normal route displaying your component. 

  export const loader = async () => {
    const data = await (await fetch("https://rickandmortyapi.com/api/character/")).json();
    return data;
  };

  // Make sure to add the useLoaderData hook to call your loader into your component

  export default function MyComponent(){
    const dataLoader = useLoaderData();
    return <h1> Hello World! </div>
  }
`;

const snippetFormJSX = `
  <form method="post">
    <label>
      Email
      <input type="email" name="email" placeholder="email"></input>
    </label>
    <label>
      Password
      <input type="text" name="password" placeholder="password"></input>
    </label>
    <button type="submit">Send</button>
  </form>
`;

const snippetActionFunction = `
  export const action = async (request) => {
    const formData = await request.formData();
    // You can console log it to test it
    // console.log("data: ", formData.get("email"));
    return formData;
  };

  // Make sure to add the useActionData hook to call your action into your component

  export default function MyComponent(){
    const formDataAction = useActionData();
    return <h1> Hello World! </div>
  }
`;

const snippetComponentFunction = `
  export default function MyComponent(){
    return (
      <article>
        <h1> Hello World! </div>
      </article>
    ) 
  }
`;

// Loader to consume API

export const loader = async () => {
  const data = await (await fetch("https://rickandmortyapi.com/api/character/")).json();
  return null;
};

// Action to recieve data from Form

export const action = async ({ request }: any) => {
  const formData = await request.formData();
  console.log("data: ", formData.get("email"));
  return null;
};

// Metas for route page

export const meta = () => {
  return [
    {
      title: "Practice 1",
    },
  ];
};

// Links for route page

export const links = () => {
  return [
    {
      rel: "icon",
      href: favIcon,
    },
  ];
};

// Cliente component

export default function LandingPage() {
  const dataLoader = useLoaderData();
  const formDataAction = useActionData();

  return (
    <article className="w-[80%] mx-auto my-10 text-white ">
      <div className="flex flex-col ">
        <h1 className="font-bold text-[54px] font-[rubik] underline ">Hey there!</h1>
        <h3 className="font-bold text-[20px] font-[rubik] ">Practice 1</h3>
        <Link to="/" className="ml-auto">
          <button className="px-4 py-1 bg-gray-200 text-black rounded-[10px] my-3">Go Back</button>
        </Link>
      </div>
      <div className="flex flex-col gap-3 my-10 mb-20">
        <div className="flex flex-col gap-3">
          <p>In this page we can take a look to the basic structure of a Remix route.</p>
          <p>There are 5 main parts to have a complete Remix route.</p>
          <p>Let's break it down:</p>
          <ul className="list-disc pl-8  ">
            <li>Link Function</li>
            <li>Meta Function</li>
            <li>Loader Function</li>
            <li>Action Function</li>
            <li>Component Function</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-[20px] font-[rubik] ">Link Function</h3>
          <p>
            This is something like our traditional HTML Link tag, but in Remix we use is as a
            function. The purpose of this is to have a dynamic Array of Links for each route.
          </p>
          <p>This is how your Link function should look like:</p>
          <div className="rounded-[10px] my-5 overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] border-white border-[2px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Link function</i>
            </div>
            <hr className="border-black border-[2px]"></hr>
            <SyntaxHighlighter
              language="text"
              customStyle={{ background: "black", color: "white" }}
              showLineNumbers
            >
              {snippetLinkFunction}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-[20px] font-[rubik] ">Meta Function</h3>
          <p>
            Meta function works the same way as Link function. You have to pass an Array of objects
            containing your key-value for your traditional Meta tags.
          </p>
          <p>Check it out:</p>
          <div className="rounded-[10px] my-5 overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] border-white border-[2px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Meta function</i>
            </div>
            <hr className="border-black border-[2px]"></hr>
            <SyntaxHighlighter
              language="text"
              customStyle={{ background: "black", color: "white" }}
              showLineNumbers
            >
              {snippetMetaFunction}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-[20px] font-[rubik] ">Loader Function</h3>
          <p>This function could be the most important one!</p>
          <p>
            Why? Because your will probably be fetching APIs or databases all-day-long and this is
            your tool to do it.
          </p>
          <p>With "loader" you can feed your route with the data you need to work with.</p>
          <p>But there's 2 ways to use it.</p>
          <p>
            Either way your set your "loader" up and skip your client component and you will have an
            API with the data your are consuming.
          </p>
          <p>This way you can have 2 uses for your routes in your project.</p>
          <p>Example:</p>
          <div className="rounded-[10px] my-5 overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] border-white border-[2px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Meta function</i>
            </div>
            <hr className="border-black border-[2px]"></hr>
            <SyntaxHighlighter
              language="text"
              customStyle={{ background: "black", color: "white" }}
              showLineNumbers
            >
              {snippetLoaderFunction}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-[20px] font-[rubik] ">Action Function</h3>
          <p>
            This function is quite the opposite of loader. This function will SEND data to your
            database.
          </p>
          <p>But this is quite a little bit tricky because you need 1 Form to do it.</p>
          <p>Your Form could like like this:</p>
          <div className="rounded-[10px] border-[2px] border-white my-5 bg-black overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] box-border p-[15px] flex flex-col gap-2 ">
            <form method="post" className="flex flex-col gap-3  ">
              <label className="flex flex-col gap-1  ">
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="rounded-lg py-2 px-2  "
                ></input>
              </label>
              <label className="flex flex-col gap-1  ">
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="rounded-lg py-2 px-2  "
                ></input>
              </label>
              <button
                type="submit"
                onClick={(event) => event.preventDefault()}
                className="bg-white rounded-lg text-black py-2 px-5 "
              >
                Enviar
              </button>
            </form>
          </div>
          <p>Or in JSX, like this:</p>
          <div className="rounded-[10px] my-5 overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] border-white border-[2px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Form JSX</i>
            </div>
            <hr className="border-black border-[2px]"></hr>
            <SyntaxHighlighter
              language="text"
              customStyle={{ background: "black", color: "white" }}
              showLineNumbers
            >
              {snippetFormJSX}
            </SyntaxHighlighter>
          </div>
          <p>
            Here it's SUPER important that you add the <i>method='post'</i> to your Form. This way
            you can "catch" your entry data in the "request" of the Action function.
          </p>
          <p>Your Action function should look something like this:</p>
          <div className="rounded-[10px] my-5 overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] border-white border-[2px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Action function</i>
            </div>
            <hr className="border-black border-[2px]"></hr>
            <SyntaxHighlighter
              language="text"
              customStyle={{ background: "black", color: "white" }}
              showLineNumbers
            >
              {snippetActionFunction}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-[20px] font-[rubik] ">Client Component</h3>
          <p>
            The 5th part of a Remix route is the actual client component. Now, remember, this is
            optional. If you want to have your route as a traditional client component, add it. If
            you want your route to be an API, just skip this function.
          </p>
          <p>Your component is going to be exported as default and return JSX.</p>
          <p>Check it out:</p>
          <div className="rounded-[10px] my-5 overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] border-white border-[2px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Client Component</i>
            </div>
            <hr className="border-black border-[2px]"></hr>
            <SyntaxHighlighter
              language="text"
              customStyle={{ background: "black", color: "white" }}
              showLineNumbers
            >
              {snippetComponentFunction}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-[20px] font-[rubik] ">That's it! (for now)</h3>
          <p>If you want to go to the next practice, click next: </p>
          <Link to="/practice-2" className="ml-auto">
            <button className="px-4 py-1 bg-gray-200 text-black rounded-[10px] my-3">
              Next &#8594;
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
}

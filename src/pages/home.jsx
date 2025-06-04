import { Title } from "@solidjs/meta";

function Home() {
  return (
    <>
      <Title>Home</Title>

      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <div className="card w-full bg-[#0069FF] text-white card-lg shadow-sm">
              <div className="card-body">
                <h2 className="card-title text-2xl">
                  WE BUILD, AUTOMATE & GROW BRANDS THAT SCALE
                </h2>

                <div className="divider" />

                <p className="text-lg">
                  Our service include web design & development, automation,
                  marketing & business growth solutions for entrepreneurs,
                  creators & companies ready to level up
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

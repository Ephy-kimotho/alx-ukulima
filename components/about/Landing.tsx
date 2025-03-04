import { nunito } from "@/fonts";

function Landing() {
  return (
    <section className="min-h-screen text-white bg-[url(@/public/images/about2.jpg)] bg-cover bg-center inset-shadow-overlay flex  items-center ">
      <div className="space-y-8 pl-6 lg:pl-16">
        <h2
          className={`${nunito.className} font-bold text-[34px] md:text-5xl lg:text-6xl lg:max-w-3xl`}
        >
          Empowering Farmers, Transforming Agriculture
        </h2>
        <p className="max-w-2xl text-balance md:text-lg">
          At Ukulima, we are committed to making farming easier, more efficient,
          and more profitable. By providing farmers with access to high-quality
          agricultural inputs and innovative solutions, we aim to revolutionize
          the way farming is done.
        </p>
      </div>
    </section>
  );
}

export default Landing;

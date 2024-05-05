import Image from "next/image";

export function HeroSection() {
  return (
    <section className="h-screen w-full pt-40 relative">
      <Image
        src="/money1.png"
        alt=""
        width={200}
        height={200}
        objectFit="cover"
        className="hidden"
      />
      <Image
        src="/money2.png"
        alt=""
        width={200}
        height={200}
        className="absolute top-0  -z-10"
      />
      <Image
        src="/money3.png"
        alt=""
        width={200}
        height={200}
        className="absolute right-0 bottom-0 -z-10"
      />

      <div className="flex flex-col gap-4 px-8 items-start">
        <h1 className="font-extrabold text-5xl">
          O Maior Marketplace de NFTs do Brasil{" "}
        </h1>
        <div className="flex gap-2 flex-col sm:flex-row">
          <Image src="/googlepay.png" alt="" width={200} height={200} />
          <Image src="/appstore.png" alt="" width={200} height={200} />
        </div>

        <Image
          src="/Stripe.png"
          alt=""
          className="w-full hidden sm:flex"
          width={600}
          height={200}
          quality={100}
        />
      </div>

      <div>{/*  <Image src="/NFT.png" alt="" fill/> */}</div>
    </section>
  );
}
